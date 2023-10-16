import SlAvatar from '@shoelace-style/shoelace/dist/react/avatar';
import SlButton from '@shoelace-style/shoelace/dist/react/button';
import axios from 'axios';


function User({user, setAlbums}) {
    // const bg_colors = ['bg-stone-200', 'bg-stone-200', 'bg-zinc-200', 'bg-slate-100'];

    function getInitials(name) {
        let result = [];
        
        for(let i = 0; i < name.length; i++){
            if(name[i].toUpperCase() === name[i] && name[i] !== ' ' && name[i] !== '.'){
                result.push(name[i]);
            }
        }
        
        return (result.join(''));
    }

    function getBgColor() {
        if(user.id % 2 === 0){
            return ('bg-slate-100');
        }else{
            return ('bg-white');
        }
    }

    const fetchUserAlbums = (userId) => {
        axios
          .get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
          .then((response) => {
            const albums = response.data;
            setAlbums(albums);
          })
          .catch((error) => {
            console.error('Error fetching user albums:', error);
        });
    };

    // function getRandomColor() {
    //     const min = Math.ceil(0);
    //     const max = Math.floor(bg_colors.length);
    //     const index = Math.floor(Math.random() * (max - min) + min)
        
    //     return (bg_colors[index]);
    // }


    return (
        <div className={`wrapper-user ${getBgColor()}`}>
            <SlAvatar initials={getInitials(user.name)} label={`Avatar with initials: ${getInitials(user.name)}`} />
            <div className='flex-col w-64 flex items-start leading-4 mx-2'>
                <span><strong>#{user.id}</strong></span>
                <span><i>{user.name}</i></span>
                <small><i>{user.email}</i></small>
            </div>
            <SlButton onClick={() => fetchUserAlbums(user.id)}>Get Albums</SlButton>
        </div>
    );
}

export default User;
  