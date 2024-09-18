import {
  atom,
  reatomResource,
  withDataAtom,
  withErrorAtom,
  withStatusesAtom,
} from "@reatom/framework";

export const reatomProfile = atom(() => {
  const profileResource = reatomResource(async (ctx) => {
    return await ctx.schedule(() =>
      fetch("/api/user").then(
        (res) => res.json() as Promise<{ username: string }>
      )
    );
  }, "profileResource").pipe(
    withDataAtom(null),
    withStatusesAtom(),
    withErrorAtom(console.error)
  );

  return {
    profileResource,
  };
});
