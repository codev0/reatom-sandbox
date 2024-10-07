import { reatomComponent } from "@reatom/npm-react";
import { reatomArticles } from "./articles.model";

export const Articles = reatomComponent(({ ctx }) => {
  const model = ctx.spy(reatomArticles);
  const articles = ctx.spy(model.articles);

  return (
    <>
      <h1>Articles</h1>
      {ctx.spy(model.loading).isPending && <div>Loading...</div>}
      <div>
        <label>
          From
          <input type="date" defaultValue={ctx.spy(model.from)} />
          {ctx.spy(model.from) === undefined && <span>UNDEFINED ❌</span>}
        </label>
        <hr />
        <label>
          To
          <input type="date" defaultValue={ctx.spy(model.to)} />
          {ctx.spy(model.to) === undefined && <span>UNDEFINED ❌</span>}
        </label>
      </div>
      {ctx.spy(model.articles) && (
        <ul>
          {articles?.data.posts.map((article) => (
            <li key={article.id}>
              <h2>{article.title}</h2>
            </li>
          ))}
        </ul>
      )}
    </>
  );
});
