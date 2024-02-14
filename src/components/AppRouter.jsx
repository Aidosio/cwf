import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes.js";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts.js";
import {FIREBASE_AUTH} from "../firebase/config.js";
import {useAuthState} from "react-firebase-hooks/auth";

function AppRouter() {
    const [user] = useAuthState(FIREBASE_AUTH)

    return user ? (
        <Routes>
            {privateRoutes.map(({path,element }) =>
                <Route key={path} path={path} Component={element} exact={true} />
            )}
            <Route path={"*"} element={<Navigate to={CHAT_ROUTE} replace />} exact={true} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(({path,element }) =>
                <Route key={path} path={path} Component={element} exact={true} />
            )}
            <Route path={"*"} element={<Navigate to={LOGIN_ROUTE} replace />} exact={true} />
        </Routes>
    );
}

export default AppRouter;
