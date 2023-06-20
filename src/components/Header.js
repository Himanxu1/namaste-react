import React,{useState} from "react";
import brandLogo from '../assets/download.png'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () =>{
     
    const [isLogin,setIsLogin] = useState(false)
    const cartItems = useSelector(store => store.cart.items)

    return (
        <div className="header">
             <div className="navbar">
                <img  src={brandLogo} className="logo" />
                <ul>
                    <li>
                        <Link to='/' className="link">
                        Home
                        </Link>
                    </li>
                    <li>
                   <Link to='/about' className="link">
                  About
                   </Link> 
                    </li>
                    <li>
                   <Link to='/contact'className="link">
                        Contact Us
                   </Link>
                    </li>
                    <li>
                        <Link to='/cart' className="link">
                        Cart({cartItems.length})
                        </Link>
                    </li>
                </ul>
                <div className="login-btn">
                    {isLogin ? <button>Logout</button> : <button>Login</button>}

                </div>
             </div>
        </div>
    )
}

export default Header