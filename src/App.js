import PageNotFound from "./container/PageNotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRoutesHome } from "./routes";

// REACT-SLICK
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



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
