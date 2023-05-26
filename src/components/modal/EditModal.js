import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';


function EditModal({selectedID,setShowEditModal}){
    const [userEditArray, setuserEditArray] = useState({})
    const [user,setUser] = useState({})

    console.log(user)

    useEffect(()=>{
        axios.get(`http://localhost:3005/users/${selectedID}`).then(res => setUser(res.data.user))
    }       ,[selectedID])

    const handleEdit = useCallback((id)=> {

            if(id){
                axios.put(`http://localhost:3005/users/${id}`,{
                    FirstName:userEditArray.FirstName,
                    LastName:userEditArray.LastName,
                    Email:userEditArray.Email,
                    Phone:userEditArray.Phone
                })

            }  window.location.reload()
        }

        ,[userEditArray])

    return(<>


        <div className='editCss'>
            <h2>UPDATE</h2>
            <label>FirstName</label>
            <input placeholder={user.FirstName} onChange={(e) => setuserEditArray({ ...userEditArray, FirstName: e.target.value })} />
            <label>LastName</label>
            <input placeholder={user.LastName} onChange={(e) => setuserEditArray({ ...userEditArray, LastName: e.target.value })} />
            <label>Email</label>
            <input placeholder={user.Email} onChange={(e) => setuserEditArray({ ...userEditArray, Email: e.target.value })} />
            <label>Phone</label>
            <input placeholder={user.Phone} onChange={(e) => setuserEditArray({ ...userEditArray, Phone: e.target.value })} />

            <button onClick={() => handleEdit(selectedID)} >Save</button>
            <button onClick={() => {setShowEditModal(false)}}>Cancel</button>
        </div>


    </>)

}


export default EditModal;