

import Album from './cards/album';


function Results({ albums }) {

  return (
    <div className="wrapper-users overflow-auto h-full p-6">
      {albums.map((album) => (
        <Album  title={album.title} key={album.id} id={album.id}/>
      ))}
    </div>
  );
}

export default Results;





