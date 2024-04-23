import { Route, Switch } from "react-router-dom";
import Home from '../Pages/Public/Home/Home'
import FaseFour from '../Pages/Public/PlayGame/FaseFour'
import ErrorPage from '../Pages/Public/ErrorPage'

function Router() {
    return (

        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>

            <Route exact path='/unit'>
                <FaseFour />
            </Route>

            <Route>
                <ErrorPage />
            </Route>

        </Switch>

    )
}

export default Router