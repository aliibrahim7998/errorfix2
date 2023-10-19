import { NavLink,Outlet } from "react-router-dom";

function Contact() {
    return (  
        <>
            <h1>
                Contact US
            </h1>
            <div>
                <NavLink to="hr">HR</NavLink>
                <NavLink to="ceo">CEO</NavLink>
            </div>
            <Outlet/>
        </>
    );
}

export default Contact;