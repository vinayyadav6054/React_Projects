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
    const [loggedInUserData, setLoggedInUserData] =useState(null);
    const authData = useContext(AuthContext)
    //console.log(authData.employees);


    // useEffect(() => {
    //     if(authData){
    //         const loggedInUser = localStorage.getItem("loggedInUser")
    //         if(loggedInUser){
    //             setUser(loggedInUser.role)
    //         }
    //     }
    // },[authData])



    const handleLogin = (email, password) => {
        if (email == 'admin@me.com' && password =='123'){
           // console.log('Admin Logged In');
           setUser({role:'admin'})
           localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
           
        }else if(authData){
            const employee = authData.employees.find((e) => email == e.email && password == e.password)
            if (employee){
                setUser('employee')
                setLoggedInUserData(employee)
                localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
            }
            
        }
        else{
            alert('Invalid Credentials');
        }
    }

    //handleLogin('admin@me.com','123')

   

    return(
        <>
            {!user ? <Login handleLogin = {handleLogin} /> : ''}
            {user == 'admin' ? <AdminDashboard /> : user == 'employee' ? <EmployeeDashboard data={loggedInUserData} />: null}
            {/* <EmployeeDashboard /> */}
            {/* <AdminDashboard />  */}
        </>
    )
}
export default App;