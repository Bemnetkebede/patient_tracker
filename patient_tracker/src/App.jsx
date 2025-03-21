// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import DoctorDashboard from './Pages/Dashboards/DoctorDashboard';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
// import NurseDashboard from './Pages/NurseDashboard/NurseDashboard';
// import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
// import PatientDashboard from './Pages/PatientDashboard/PatientDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/doctor-dashboard" element={<DoctorDashboard />} />

                {/* <Route path="/nurse-dashboard" element={<NurseDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/patient-dashboard" element={<PatientDashboard />} /> */}
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;