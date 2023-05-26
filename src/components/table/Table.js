import React from 'react';
import Button from '../buttons/Button';
import '../../Table.css';

const Table = (props) => (
    <table className="table">
        <thead>
        <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {props.data.map(user => (
            <tr key={user.ID}>
                <td>{user.FirstName}</td>
                <td>{user.LastName}</td>
                <td>{user.Email}</td>
                <td>{user.Phone}</td>
                <td>
                    <div>
                        <Button onClick={() => props.onEdit(user.ID)} label="Edit" />
                        <Button onClick={() => props.onDelete(user.ID)} label="Delete" />
                    </div>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
);

export default Table;