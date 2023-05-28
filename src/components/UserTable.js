import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Table from './table/Table';
import AddUserModal from './modal/AddUserModal';
import EditModal from './modal/EditModal';



function UserTable() {
    const [data, setData] = useState([]);


    const [showAddModal, setShowAddMModal] = useState(false)
    const [seleectedID,setSelectedID] = useState()
    const [showEditModal, setShowEditModal] = useState(false)


    const addModalHandle = useCallback(() => {
        if(showEditModal) {
            setShowEditModal(false)
        }
        setShowAddMModal(true)
    },[showEditModal])

    const onEdit = useCallback((id) =>{
        setShowEditModal(true)
        setSelectedID(id)
        if(showAddModal) {
            setShowAddMModal(false)
        }
    },[showAddModal])

    const handleDelete = useCallback((id)=>{
        axios.delete(`http://localhost:3005/users/${id}`)
        window.location.reload()
    },[])

    useEffect(() => {
        axios.get("http://localhost:3005/users")
            .then(response => {
                setData(response.data.users);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>

            <h1>USERS</h1>
            <Table data={data} onEdit={onEdit} onDelete={handleDelete} />
            <button className='addUserButton' disabled={showAddModal} onClick={() => addModalHandle()}>ADD USER</button>

            {showAddModal &&
                <AddUserModal setShowAddModal= {setShowAddMModal}/>
            }

            {
                showEditModal &&
                <EditModal setShowEditModal={setShowEditModal}   selectedID={seleectedID}/>
            }



        </div>
    )
}

export default UserTable;