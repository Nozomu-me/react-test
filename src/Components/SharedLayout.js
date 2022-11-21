import { Outlet } from 'react-router';
import Navbar from './Navbar';

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <section className='section'>
                <Outlet />
            </section>
        </>
    );
};

export default SharedLayout;
