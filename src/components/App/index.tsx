import { BrowserRouter } from "react-router-dom";
import Router from "../Router";
import Header from "../Header";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Router />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
