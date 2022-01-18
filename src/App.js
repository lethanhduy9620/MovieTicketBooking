import PageNotFound from "./container/PageNotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRoutesHome } from "./routes";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome()}

        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
