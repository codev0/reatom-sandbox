import { delay, http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/user", async () => {
    await delay(2000);
    return HttpResponse.json({
      username: "admin",
    });
  }),
  http.get("/api/articles", async () => {
    await delay(1000);
    return HttpResponse.json({
      data: {
        posts: [
          { id: 1, title: "Product 1" },
          { id: 2, title: "Product 2" },
          { id: 3, title: "Product 3" },
        ],
      },
      meta: {
        filters: {
          from: "2024-01-01",
          to: "2024-12-31",
        },
      },
    });
  }),
];
