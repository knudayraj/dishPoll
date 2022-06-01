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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="nav-link disabled" href=""> Dishpoll Contest </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/"> Dishpoll </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/pollResult">Poll Result</a>
                        </li>
                        { userLoggin ? 
                        (
                            <button className="btn btn-outline-danger me-2" type="button" onClick={handleLogout}>LogOut</button>
                        ) : (
                            <button className="btn btn-outline-success me-2" type="button" onClick={handleLogout}>Login</button>
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