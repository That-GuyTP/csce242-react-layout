import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <p>This is my header</p>

            <Outlet />

            <p>This is my footer</p>
        </>
    );
};

export default Layout;