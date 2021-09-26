import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AdminContext } from "../../App";

export default function PrivateRoute({ children, ...rest }) {

    // eslint-disable-next-line
    const [isAdmin, setIsAdmin] = useContext(AdminContext)
    let localToken = localStorage.getItem('admin_token')
    let contextToken = isAdmin.admin_token !== ''

    return (
        <Route
            {...rest}
            render={({ location }) => (contextToken || localToken) ? (
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
