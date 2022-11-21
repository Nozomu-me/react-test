import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Posts from './Pages/Posts';
import Error from './Pages/Error';
import SharedLayout from './Components/SharedLayout';
import React from 'react';
import { UserContextProvider } from './Context';
function App() {
    return (
        <UserContextProvider>
            <div className='App'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<SharedLayout />}>
                            <Route index element={<Home />} />
                            <Route path='login' element={<Login />} />
                            <Route path='posts' element={<Posts />} />
                        </Route>
                        <Route path='*' element={<Error />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </UserContextProvider>
    );
}

export default App;
