import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getUsers();
      setUsers(data);
      console.log(data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (_id) => {
    // const _id = id;
    await deleteUser(_id);
    setUsers(users.filter(user => user._id !== _id));
  };
  
  const handleUpdate = (_id)=>{
    navigate(`/edit-user/${_id}`);
  }

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <table style={{padding:"3px",border:"1px solid black",width:"300px" ,borderRadius:'10px',marginBottom:'20px'}}>
               <tr>
                 <td>
                 {user.name}
                 </td>
                 <td style={{marginRight:"30px"}}>{user.role}  </td>
                 <td> <button onClick={() => handleDelete(user._id)}>Delete</button></td>
                 <td> <button onClick={() => handleUpdate(user._id)}>update</button></td>
               </tr>
            </table>
            {/* {user.name} - {user.role}  
            <button onClick={() => handleDelete(user._id)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
