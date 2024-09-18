import { reatomComponent } from "@reatom/npm-react";
import { reatomProfile } from "./profile";

const App = reatomComponent(({ ctx }) => {
  const model = ctx.spy(reatomProfile);

  return (
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
  );
}, "App");

export default App;
