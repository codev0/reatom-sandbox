import { delay, http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/user", async () => {
    await delay(2000);
    return HttpResponse.json({
      username: "admin",
    });
  }),
];
