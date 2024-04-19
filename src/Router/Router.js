import { Route, Switch } from "react-router-dom";
import FormPage from '../Pages/Public/FormPage/FormPage'
import HomePageUnit from '../Pages/Public/HomePage/HomePageUnit'
import PartnerCourse from '../Pages/Private/UnitPage/PartnerCourses/PartnerCoursePage'
import ReportPage from '../Pages/Private/UnitPage/ReportPage/ReportPage'
import ConfirmPage from '../Pages/Private/UnitPage/ConfirmPage/ConfirmPage'
import ErrorPage from '../Pages/Public/ErrorPage'
import LoginPage from "../Pages/Public/LoginPage/LoginPage";
import LinkListPage from '../Pages/Private/UnitPage/LinkPage/LinkList'

function Router() {
    return (

        <Switch>
            <Route exact path='/'>
                <LoginPage />
            </Route>

            <Route exact path='/unit'>
                <HomePageUnit />
            </Route>

            <Route exact path='/unit/report'>
                <ReportPage />
            </Route>

            <Route exact path='/unit/course'>
                <PartnerCourse />
            </Route>

            <Route exact path='/unit/confirm'>
                <ConfirmPage />
            </Route>


            <Route exact path='/unit/links'>
                <LinkListPage />
            </Route>
            
            <Route exact path='/form'>
                <FormPage />
            </Route>

            <Route>
                <ErrorPage />
            </Route>

        </Switch>

    )
}

export default Router