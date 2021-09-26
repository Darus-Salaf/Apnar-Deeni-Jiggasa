import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { ModeratorContext } from "../../../App";

export default function ModRoute({ children, ...rest }) {

    // eslint-disable-next-line
    const [isMod, setIsMod] = useContext(ModeratorContext)
    let localToken = localStorage.getItem('moderator_token')
    let contextToken = isMod.moderator_token !== ''

    return (
        <Route
            {...rest}
            render={({ location }) => (contextToken || localToken) ? (
                children
            ) :
                (<Redirect
                    to={{
                        pathname: "/moderator-login",
                        state: { from: location }
                    }}
                />)
            }
        />
    )
}
