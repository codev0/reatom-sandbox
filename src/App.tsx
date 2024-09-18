import { reatomComponent } from "@reatom/npm-react";
import { reatomProfile } from "./profile";
import { ErrorBoundary } from "react-error-boundary";

const App = reatomComponent(({ ctx }) => {
  const model = ctx.spy(reatomProfile);

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <>
        <h1>Profile</h1>
        {ctx.spy(model.profileResource.statusesAtom) && <div>Loading...</div>}
        {ctx.spy(model.profileResource.errorAtom) && <div>Error</div>}
        {ctx.spy(model.profileResource.dataAtom) && (
          <div>
            <p>Username: {ctx.spy(model.profileResource.dataAtom)?.username}</p>
          </div>
        )}
      </>
    </ErrorBoundary>
  );
}, "App");

export default App;
