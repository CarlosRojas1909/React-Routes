import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";


//ExpenseDashboardPage
const ExpenseDashboardPage = () => (
    <div>
        this is form expenses dashboard component
    </div>
)

const AddExpensePage = () => (
    <div>
        this is from add Addexpenses page
    </div>
 )

const EditExpensePage = () => (
    <div>
        this is coming form edit expense page
    </div>
)


const HelpPage = () => (
    <div>
        this is coming from help page
    </div>
)

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="isActive" exact={true}>DashBoard</NavLink>
        <NavLink to="/create" activeClassName="isActive">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="isActive">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="isActive">Help</NavLink>
    </header>
)

const NotFoundPage = () => (
    <div>
        404!!! <Link to="/">to home page</Link>
    </div>
)

const routes = (
    <Router>
        <div>
            <Header />    
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact />
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
        
    </Router>
)


ReactDOM.render(routes, document.getElementById('app'));
