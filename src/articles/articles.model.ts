import { atom } from "@reatom/framework";
import { articlesResource } from "../api/api.model";

export const reatomArticles = atom(() => {
  const fromAtom = atom<string | undefined>(undefined, "fromAtom");
  const toAtom = atom<string | undefined>(undefined, "toAtom");

  articlesResource.onFulfill.onCall((ctx, payload) => {
    fromAtom(ctx, payload.meta.filters.from);
    toAtom(ctx, payload.meta.filters.to);
  });

  return {
    articles: articlesResource.dataAtom,
    loading: articlesResource.statusesAtom,
    from: fromAtom,
    to: toAtom,
  };
}, "reatomArticles");
