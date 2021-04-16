import React from 'react';
import './app.css';
import {siteData} from './data.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Detail from './Detail.js';
import List from './List.js';
import Profile from './Profile.js';

const App = () =>{

        return (
            <Router>
           <>
                   {siteData.map((data, key) => {
                       return (
                            <header key={key}>
                              <h1>{data.site.title}</h1>

                                <div className="logo">
                                    <Link to="/list" className="home-link"><img src={data.site.logoImage} alt="red and white R logo for Realtor.com" />                              </Link>

                                </div>
                                <Link to="/profile" className="profile-link">Welcome {data.profile.firstName}</Link>
                            </header>
                       );
                   })}
           </>
                <Switch>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/detail">
                        <Detail />
                    </Route>
                    <Route path="/list">
                        <List />
                    </Route>
                    <Redirect from="/" to="/list" />
                </Switch>
            </Router>
        );
}



export default App;