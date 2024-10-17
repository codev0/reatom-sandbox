import { atom, withComputed } from "@reatom/framework";
import { articlesResource } from "../api/api.model";

export const reatomArticles = atom((ctx) => {
  const articles = ctx.spy(articlesResource.dataAtom);
  const fromAtom = atom<string | undefined>(undefined, "fromAtom").pipe(
    withComputed((ctx, state) => {
      ctx.spy(articlesResource.onFulfill, (payload) => {
        if (payload.payload) {
          state = payload.payload.meta.filters.from;
        }
      });
      return state;
    })
  );
  const toAtom = atom<string | undefined>(undefined, "toAtom").pipe(
    withComputed((ctx, state) => {
      ctx.spy(articlesResource.onFulfill, ({ payload }) => {
        state = payload.meta.filters.to;
      });
      return state;
    })
  );

  return {
    articles: articles?.data?.posts,
    loading: articlesResource.statusesAtom,
    from: fromAtom,
    to: toAtom,
  };
}, "reatomArticles");
