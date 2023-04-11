import bluecropped from './bluecropped.webp';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
const Navbar = () => {
    const navref = useRef();

    const showNavbar = () => {
        navref.current.classList.toggle("responsive-nav");
    }

    return (
        <div className="navbar">
            <div className="div1">
                {/* <div className="button"> */}
                <img className="blue-cropped"
                    alt="logo"
                    src={bluecropped}
                />
                {/* </div> */}
                <b className="consultobar">Conusultobar</b>
            </div>
            <div className="menu" ref={navref}>
                <div className="home">
                    <div>
                        <a href="#home">Home</a>
                    </div>
                    <div className="div2">
                        <a className="login" href="#login">Login</a>
                        <a className="login" href="#signup">Signup</a>
                    </div>
                </div>
                <button className='menu nav-btn nav-closebtn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </div>
            <button className='menu nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </div>
    );
}

export default Navbar;
