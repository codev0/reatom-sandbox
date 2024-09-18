import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createCtx, connectLogger } from "@reatom/framework";
import { reatomContext } from "@reatom/npm-react";
const ctx = createCtx();
if (import.meta.env.DEV) {
  connectLogger(ctx);
}
import App from "./App.tsx";

async function enableMocking() {
  if (import.meta.env.PROD) {
    return;
  }

  const { worker } = await import("../mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <reatomContext.Provider value={ctx}>
        <App />
      </reatomContext.Provider>
    </StrictMode>
  );
});
