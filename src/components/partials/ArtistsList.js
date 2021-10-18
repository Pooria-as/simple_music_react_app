import React from 'react';
import { NavLink} from 'react-router-dom';

const ArtistsList = (props) => {

    
     
    

    return(
        <div className="artists_list">
            <h4>All Artists</h4>
            <div className="artist_container">
           {
                props.allArtists.map( item => (
                    <NavLink
                        key={item.id}
                        to={`/artist/${item.id}`}
                        className="artist_item"
                        style={{
                            background: `url(/images/covers/${item.cover}.jpg)` 
                        }}
                    >
                        <div>{item.name}</div>
                    </NavLink>
                ))
           }
            </div>
        </div>
    )
}

export default ArtistsList;