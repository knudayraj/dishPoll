import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import DishContainer from './DishComponents/DishContainer';
import PrivateRoute from './Helpers/PrivateRoute';
import Login from './Login';
import PollContainer from './PollResults/PollContainer';

function NavBar(props) {
    const {dishData, handleLoggedin, userLoggin } = props

    const topRank = useSelector(state => {
        return state.topRank
    })

    const handleLogout = () => {
        localStorage.setItem('topRank', JSON.stringify(topRank))
        localStorage.removeItem('login')
        handleLoggedin()
    }


    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="nav-link disabled" href=""> Dishpoll Contest </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/"> Dishpoll </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/pollResult">Poll Result</a>
                        </li>
                        { userLoggin ? 
                        (
                            <button class="btn btn-outline-danger me-2" type="button" onClick={handleLogout}>LogOut</button>
                        ) : (
                            <button class="btn btn-outline-success me-2" type="button" onClick={handleLogout}>Login</button>
                        ) }
                    </ul>
                </div>
            </div>
            </nav>
            {/* { userLoggin ? (
            <>
                <Link to="/"> Dishpoll ||  </Link>
                <Link to="/pollResult"> Poll Result </Link>
                <Link to="" onClick={handleLogout}> LogOut</Link>
            </>
            ) : (
                <>
                    <Link to="/login"> Login </Link>    
                </>
            )} */}
            
            

            <PrivateRoute path="/" exact component={DishContainer} />
            <PrivateRoute path="/pollResult" component={PollContainer} />
            <Route path="/login" render={(props) => {
                return <Login 
                            {...props}
                            handleLoggedin={handleLoggedin}
                        />
            }} />
        </div>
    );
}

export default NavBar