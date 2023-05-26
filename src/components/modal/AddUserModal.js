import React, { useState, useCallback } from 'react';
import axios from 'axios';


function AddUserModal({setShowAddModal}){

    const [userAddArray, setUserAddArray] = useState({})

    const adduser = useCallback(()=>{
        axios.post("http://localhost:3005/users", {
            FirstName:userAddArray.FirstName,
            LastName:userAddArray.LastName,
            Email: userAddArray.Email,
            Phone:userAddArray.Phone
        })

        window.location.reload()
    },[userAddArray])



    return(
        <div>
            <div className='addCss'>
                <h2>ADD USER</h2>
                <label>FirstName</label>
                <input onChange={(e) => setUserAddArray({ ...userAddArray, FirstName: e.target.value })} />
                <label>LastName</label>
                <input onChange={(e) => setUserAddArray({ ...userAddArray, LastName: e.target.value })} />
                <label>Email</label>
                <input onChange={(e) => setUserAddArray({ ...userAddArray, Email: e.target.value })} />
                <label>Phone</label>
                <input onChange={(e) => setUserAddArray({ ...userAddArray, Phone: e.target.value })} />

                <button onClick={adduser}>Create</button>
                <button onClick={()=>{setShowAddModal(false)}}>Cancel</button>

            </div>



        </div>
    )

}


export default AddUserModal;