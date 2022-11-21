import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Styles/NavbarStyle.css';
import { UserContext } from '../Context';

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };
    return (
        <nav className='navbar'>
            <div className='logo'>Logo</div>
            <div className='links'>
                <NavLink
                    to='/'
                    style={({ isActive }) => {
                        return { color: isActive ? '#ff5455' : 'black' };
                    }}
                    className='home-link'
                >
                    Home
                </NavLink>
                {user !== null && (
                    <NavLink
                        to='/posts'
                        style={({ isActive }) => {
                            return { color: isActive ? '#ff5455' : 'black' };
                        }}
                        className='home-link'
                    >
                        Posts
                    </NavLink>
                )}
                {user !== null && (
                    <button onClick={handleClick} className='login-btn'>
                        Log out
                    </button>
                )}
                {user === null && (
                    <NavLink to='/login' className='login-btn'>
                        Login
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
