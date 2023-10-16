import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SlIcon from '@shoelace-style/shoelace/dist/react/icon';
import SlInput from '@shoelace-style/shoelace/dist/react/input';
import SlTooltip from '@shoelace-style/shoelace/dist/react/tooltip';
import SlAlert from '@shoelace-style/shoelace/dist/react/alert';


function Search({ setAlbums, users }) {
    const [searchInput, setSearchInput] = useState(''); 
    const [foundUser, setFoundUser] = useState(null); 
    const [open, setOpen] = useState(false);

    function handleShow() {
      setOpen(true);
      setTimeout(() => setOpen(false), 2000);
    }
    
    const findUser = () => {
        let searchTerm = searchInput.trim(); 
        let searchResult = null;
        if(searchInput.length >= 2){
            if (searchTerm.startsWith('#')) {
                const userId = parseInt(searchTerm.substring(1));
                searchResult = users.find((user) => user.id === userId);
            } else if (searchTerm.includes('@')) {
                searchResult = users.find((user) => user.email === searchTerm);
            } else {
                searchResult = users.find((user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            }
            
            handleShow();
            setFoundUser(searchResult);
        }else {
            setFoundUser(null);
            setAlbums([]);
        }
      
    };
  
    
    const handleSearchInputChange = (e) => {
      setSearchInput(e.target.value);
    };
  
    
    useEffect(() => {
      findUser();
    }, [searchInput]);
  
    useEffect(() => {
        if(foundUser){
            axios
                .get(`https://jsonplaceholder.typicode.com/albums?userId=${foundUser.id}`)
                .then((response) => {
                    const albums = response.data;
                    setAlbums(albums);
                })
                .catch((error) => {
                    console.error('Error fetching user albums:', error);
            });
        }
        
    }, [foundUser]);

    return (
        <>
        <div style={{position:'absolute', top:'1vh', left:'150vh'}}>
            {foundUser && (
                <SlAlert open={open} closable >
                    <SlIcon slot="icon" name="info-circle" />
                    
                    <div>
                        <p>Found User: {foundUser.name}</p>
                        <p>Email: {foundUser.email}</p>
                        <p>ID: {foundUser.id}</p>               
                    </div>
                    
                </SlAlert>
            )}  
        </div>
        
        <div className="w-2/6 h-auto mb-8">
            
            <SlTooltip content="type #id to find by id; type full email to find by email or simply start typing the name⚰️⚰️⚰️">
                <SlInput
                placeholder="Search"
                size="large"
                value={searchInput}
                onInput={handleSearchInputChange}
                >
                   
                    <SlIcon name="search" slot="prefix"></SlIcon>
                </SlInput>
            </SlTooltip>
            
        </div>
        </>
    );
}

export default Search;
