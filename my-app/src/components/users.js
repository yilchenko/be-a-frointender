import React, { useState, useEffect } from 'react';
import axios from 'axios';


import User from './cards/user';


function Users({setAlbums, users, setUsers}) {
    // const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <div className="wrapper-users overflow-auto h-full">
            {users.map((user) => (
                <User user={user} setAlbums={setAlbums} key={user.id}/>
            ))}
        </div>
    );
}

export default Users;
