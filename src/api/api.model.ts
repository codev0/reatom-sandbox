import {
  atom,
  reatomResource,
  withDataAtom,
  withErrorAtom,
  withStatusesAtom,
} from "@reatom/framework";

export const startDateAtom = atom<string | undefined>(
  undefined,
  "startFromAtom"
);
export const endDateAtom = atom<string | undefined>(undefined, "endAtAtom");
export const articlesResource = reatomResource(async (ctx) => {
  const s = ctx.spy(startDateAtom);
  const e = ctx.spy(endDateAtom);
  return await ctx.schedule(() =>
    fetch("/api/articles" + `?startDate=${s}&endDate=${e}`).then(
      (res) =>
        res.json() as Promise<{
          data: { posts: { id: number; title: string }[] };
          meta: { filters: { from: string; to: string } };
        }>
    )
  );
}, "profileResource").pipe(
  withDataAtom(null),
  withStatusesAtom(),
  withErrorAtom(console.error)
);
