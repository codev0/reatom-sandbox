import { ErrorBoundary } from "react-error-boundary";
import { Articles } from "./articles/articles.ui";

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <>
        <Articles />
      </>
    </ErrorBoundary>
  );
};

export default App;
