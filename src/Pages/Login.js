import { useForm } from 'react-hook-form';
import '../Styles/LoginStyle.css';
import { data } from '../data';
import { useContext, useEffect } from 'react';
import { UserContext } from '../Context';
import { useNavigate } from 'react-router';
const Login = () => {
    const { register, handleSubmit, watch } = useForm();
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const onSubmit = (values) => {
        for (let user of data) {
            if (
                values.email !== user.email ||
                values.password !== user.password
            ) {
                // alert('User not found');
                // return;
            } else {
                localStorage.setItem('user', JSON.stringify(values));
                setUser(values);
                navigate('/');
            }
        }
        return;
    };
    useEffect(() => {
        if (localStorage.getItem('user') !== null) navigate('/');
    }, [navigate]);
    const watchValues = watch(['password', 'email']);
    return (
        <section className='form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='container'>Login</h1>
                <div className='container'>
                    <label>Email</label>
                    <input
                        {...register('email', { required: true })}
                        required
                        placeholder='email.@example.com'
                        name='email'
                        type='email'
                    />
                </div>
                <div className='container'>
                    <label>Password</label>
                    <input
                        {...register('password', { required: true })}
                        required
                        type='password'
                        placeholder='password'
                        name='password'
                        id='password'
                    />
                    {watchValues[0] && watchValues[0].length < 8 && (
                        <span style={{ color: 'red', fontSize: '10px' }}>
                            Password must contain more than 8 characters
                        </span>
                    )}
                </div>
                <button type='submit' className='container'>
                    Login
                </button>
            </form>
        </section>
    );
};

export default Login;
