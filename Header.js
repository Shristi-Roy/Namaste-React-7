import { render } from "react-dom";
import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("login");
    console.log("Header Render")

    useEffect(() => {
        console.log("useEffect render")
    },[]);

    return(
        <div className='header'>
            <div className='Logo-container'>
                <img className='logo'
                src={LOGO_URL}>
                </img>
            </div>
            <div className='nav-items'>
                    <ul>
                        <li>Name</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                        <button className="login"
                            onClick={() => {
                                btnNameReact === "login"
                                ? setBtnNameReact("logout")
                                : setBtnNameReact("login");
                            }}
                            >
                                {btnNameReact}
                        </button>
                    </ul>
                </div>
        </div>
    )
};

export default Header;