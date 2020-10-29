import React, {useEffect,useState} from 'react'
import './users.css'

const User = () => {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers=()=>{
        fetch('/api')
            .then(response => response.json())
            .then(data=>{setUsers(data);console.log(data)})
    }

    return(
        <div>
            <h2>Customers</h2>
            <h3>{users.fname} {users.lname}</h3>
        </div>
    )
}

export default User