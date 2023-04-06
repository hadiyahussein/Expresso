import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <>
            <div className="nav-bar">
            <img src={logo} alt="Expresso in cursise font design" />
                <ul className="nav-bar-right">
                    <li><Link to="/">Generator</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar