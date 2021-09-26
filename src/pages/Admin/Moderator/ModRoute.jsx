import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { ModeratorContext } from "../../../App";

export default function ModRoute({ children, ...rest }) {

    // eslint-disable-next-line
    const [isMod, setIsMod] = useContext(ModeratorContext)
    let email = localStorage.getItem('email')
    let password = localStorage.getItem('password')
    let fromContext = isMod.email && isMod.password
    let fromlocal = email && password

    return (
        <Route
            {...rest}
            render={({ location }) => (fromContext || fromlocal) ? (
                children
            ) :
                (<Redirect
                    to={{
                        pathname: "/moderate-login",
                        state: { from: location }
                    }}
                />)
            }
        />
    )
}
