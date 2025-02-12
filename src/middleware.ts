import { sequence } from "astro/middleware";
import { auth } from "./utils/auth/middleware";
import { defineMiddleware } from "astro:middleware";
import arcjet, { shield } from "@arcjet/node";
import type { ArcjetNodeRequest } from "@arcjet/node";

const arcjetShield = defineMiddleware(
  async (context: { request: Request }, next: () => Promise<Response>) => {
    const aj = arcjet({
      key: import.meta.env.ARCJET_KEY as string,
      rules: [
        // Protect against common attacks with Arcjet Shield
        shield({
          mode: "LIVE", // Change to "LIVE" to block requests
        }),
      ],
    });

    const arcjetRequest: ArcjetNodeRequest = {
      method: context.request.method,
      url: context.request.url,
      headers: (() => {
        const headers: Record<string, string | string[]> = {};
        context.request.headers.forEach((value, key) => {
          headers[key] = value;
        });
        return headers;
      })(),
    };

    const decision = await aj.protect(arcjetRequest);

    console.log("Conclusion", decision.conclusion);

    if (decision.isDenied()) {
      console.log("Reason", decision.reason);
      return new Response("Forbidden", {
        status: 403,
      });
    }
    return next();
  },
);

export const onRequest = sequence(arcjetShield, auth);
