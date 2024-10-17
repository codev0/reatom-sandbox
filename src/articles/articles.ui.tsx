import { reatomComponent } from "@reatom/npm-react";
import { articles, fromAtom, toAtom, loading } from "./articles.model";

export const Articles = reatomComponent(({ ctx }) => {
  return (
    <>
      <h1>Articles</h1>
      {ctx.spy(loading).isPending && <div>Loading...</div>}
      <div>
        <label>
          From
          <input type="date" value={ctx.spy(fromAtom)} readOnly />
          {ctx.spy(fromAtom) === undefined && <span>UNDEFINED ❌</span>}
        </label>
        <hr />
        <label>
          To
          <input type="date" value={ctx.spy(toAtom)} readOnly />
          {ctx.spy(toAtom) === undefined && <span>UNDEFINED ❌</span>}
        </label>
      </div>
      {ctx.spy(articles) && (
        <ul>
          {ctx.spy(articles)?.data.posts.map((article) => (
            <li key={article.id}>
              <h2>{article.title}</h2>
            </li>
          ))}
        </ul>
      )}
    </>
  );
});
