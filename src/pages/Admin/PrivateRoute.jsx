import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AdminContext } from "../../App";

export default function PrivateRoute({ children, ...rest }) {

    // eslint-disable-next-line
    const [isAdmin, setIsAdmin] = useContext(AdminContext)
    let email = localStorage.getItem('email')
    let password = localStorage.getItem('password')
    let code = localStorage.getItem('code')
    let fromContext = isAdmin.email !== '' && isAdmin.password !== '' && isAdmin.code !== ''
    let fromlocal = email && password && code

    return (
        <Route
            {...rest}
            render={({ location }) => (fromContext || fromlocal) ? (
                children
            ) :
                (<Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />)
            }
        />
    )
}
