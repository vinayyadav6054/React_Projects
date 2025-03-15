import React, { useEffect } from 'react';
import Login from './Components/Auth/Login';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { getLocalstorage, setLocalstorage } from './utils/localStorage';

const App = () => {

    useEffect(() => {
       // setLocalstorage();
        getLocalstorage();
    },)

    return(
        <>
            <Login />
            {/* <EmployeeDashboard /> */}
            {/* <AdminDashboard />  */}
        </>
    )
}
export default App;