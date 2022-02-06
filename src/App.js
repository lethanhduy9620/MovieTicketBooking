import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRoutesAdmin, renderRoutesHome } from "./routes";
import PageNotFound from "./container/PageNotFound";
import AuthPage from "./container/AdminPage/AuthPage";

// REACT-SLICK
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome()}
        {renderRoutesAdmin()}

        <Route path="/auth" component={AuthPage} />

        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
