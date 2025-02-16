import type { APIRoute } from "astro";
import { AtpAgent } from "@atproto/api";

export const GET: APIRoute = async ({ params, request }) => {
  const username = new URL(request.url).searchParams.get("username") || "";

  if (!username) return new Response();

  const agent = new AtpAgent({ service: "https://bsky.social" });
  await agent.login({
    identifier: "dunkirk.sh",
    password: import.meta.env.BLUESKY_PASS as string,
  });

  try {
    const profile = await agent.getProfile({ actor: username });
    const allPosts = [];
    let cursor = undefined;
    do {
      const posts = await agent.getAuthorFeed({ actor: username, cursor });
      allPosts.push(...posts.data.feed);
      cursor = posts.data.cursor;
    } while (cursor);

    return new Response(
      JSON.stringify({
        profile: profile.data,
        posts: allPosts,
      }),
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch posts" }), {
      status: 500,
    });
  }
};
