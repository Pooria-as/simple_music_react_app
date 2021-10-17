import React from "react"
import { Switch,Route } from "react-router";
import Home from "./components/Home/Home";


const App = () =>
{
  return (
    <div>
      <Switch>
        <Route exact path='/' render={()=><Home/>} />
      </Switch>
    </div>
  )
}

export default App;