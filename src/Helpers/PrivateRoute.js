import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route 
            {...rest}
            render={(props) => {
                return localStorage.getItem('login') ? <Component {...props} /> : <Redirect to={{pathname :  "/login" }} />
            }}
        />


}

export default PrivateRoute