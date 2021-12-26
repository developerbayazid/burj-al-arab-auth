import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        {loggedInUser.email ? <button style={{border: '1px solid salmon', backgroundColor: 'black', color: 'white', padding: '5px', cursor: 'pointer'}} onClick={() => setLoggedInUser({})}>LogOut <span style={{fontWeight: 'bold'}}>({loggedInUser.name})</span></button> : <Link to="/login">Login</Link>}
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;