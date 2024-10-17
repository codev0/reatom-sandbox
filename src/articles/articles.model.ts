import { atom, withComputed } from "@reatom/framework";
import { articlesResource } from "../api/api.model";

export const articles = articlesResource.dataAtom;
export const loading = articlesResource.statusesAtom;
export const fromAtom = atom<string | undefined>(undefined, "fromAtom").pipe(
  withComputed((ctx, state) => {
    ctx.spy(articlesResource.onFulfill, (payload) => {
      if (payload.payload) {
        state = payload.payload.meta.filters.from;
      }
    });
    return state;
  })
);
export const toAtom = atom<string | undefined>(undefined, "toAtom").pipe(
  withComputed((ctx, state) => {
    ctx.spy(articlesResource.onFulfill, ({ payload }) => {
      state = payload.meta.filters.to;
    });
    return state;
  })
);
