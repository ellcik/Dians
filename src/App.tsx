import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/Login/LoginForm.tsx';
import ForgotPassword from './pages/NewPassword/ForgotPassword.tsx';
import HeaderLogo from './components/HeaderLogo.tsx';
import CreateAccount from "./pages/NewAccount/CreateAccount.tsx";

function App() {
    return (
        <Router>
            {/* Логото ќе биде поставено на секоја страница */}
            <HeaderLogo />
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/create-account" element={<CreateAccount />} />
            </Routes>
        </Router>
    );
}

export default App;
