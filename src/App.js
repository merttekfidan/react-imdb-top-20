import React from "react";
import Movies from "./components/Movies";
import "./App.css";
import store from "./store";
import _ from "lodash";
function App() {
  const movies = store.getState();
  console.log(_.values(movies));
  return (
    <div className="App">
      <Movies movies={_.values(movies)} />
    </div>
  );
}

export default App;
