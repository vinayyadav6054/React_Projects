import React, { useContext, useEffect, useState } from 'react';
import Login from './Components/Auth/Login';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { getLocalstorage, setLocalstorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {

    // useEffect(() => {
    //    // setLocalstorage();
    //     getLocalstorage();
    // },)

    const [user, setUser] = useState(null);

    const handleLogin = (email, password) => {
        if (email == 'admin@me.com' && password =='123'){
           // console.log('Admin Logged In');
           setUser('admin')
           console.log(user);
           
        }else if(email =='user@me.com' && password == '123'){
            setUser('employee')
            console.log(user);
            
        }
        else{
            alert('Invalid Credentials');
        }
    }

    //handleLogin('admin@me.com','123')

    const data = useContext(AuthContext)
    console.log(data);

    return(
        <>
            {!user ? <Login handleLogin = {handleLogin} /> : ''}
            {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
            {/* <EmployeeDashboard /> */}
            {/* <AdminDashboard />  */}
        </>
    )
}
export default App;