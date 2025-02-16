import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const token = (request.headers.get("Authorization") || "").replace(
    /^bearer /i,
    "",
  );
  const cursor = encodeURIComponent(
    new URL(request.url).searchParams.get("cursor") || "",
  );

  console.log("cursor", cursor);
  const response = await fetch(
    `https://slack.com/api/users.conversations?cursor=${cursor}&limit=500&types=public_channel,private_channel,mpim,im`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
    },
  );

  const data = await response.json();

  if (!data.ok) {
    console.error("data", data);

    if (data.error === "ratelimited") {
      const retryAfter = response.headers.get("Retry-After");
      return new Response("Rate limited", {
        status: 429,
        headers: {
          "Retry-After": retryAfter || "60",
        },
      });
    }

    return new Response(data.error || "unkown error", {
      status: 500,
    });
  }

  return new Response(JSON.stringify(data));
};
