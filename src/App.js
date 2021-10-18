import React from "react"
import { Switch,Route } from "react-router";
import Artist from "./components/Artist/Artist";
import Home from "./components/Home/Home";


const App = () =>
{
  return (
    <div>
      <Switch>
        <Route exact path='/' render={()=><Home/>} />
        <Route exact path="/artist/:id" render={(PropsRoute) => <Artist id={PropsRoute.match.params.id} {...PropsRoute}/>} />
      </Switch>
    </div>
  )
}

export default App;