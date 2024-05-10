import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("home", { status: 200 });
    } else if (url.pathname === "/login") {
      return new Response("login", { status: 200 });
    } else if (url.pathname === "/register") {
      return new Response("register", { status: 200 });
    } else {
      return new Response("404 error", { status: 404 });
    }
  },
  port: "3000",
  hostname: "127.0.0.1",
});
