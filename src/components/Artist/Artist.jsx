import axios from 'axios';
import {React,useState,useEffect} from 'react';
import Header from "../partials/Header"
import Album from './Album';
const Artist=(props)=>
{
    const [artist, setState] = useState([])
    useEffect(() => {
       axios.get(`http://localhost:3005/artists/${props.match.params.id}`)
       .then(res=>
        {
            setState(res.data)
        }).catch(err=>
            {
                console.error('error !');
            })

    }, [props])
    return(
        <div>
            <Header/>
              <div className="artist_bio">
                <div className="avatar">
                <span style={{
                        background:`url('/images/covers/${artist.cover}.jpg') no-repeat`
                    }}></span>
                </div>
                <div className="bio">
                    <h3>{artist.name}</h3>
                    <div className="bio_text">
                        {
                            artist.bio
                        }
                    </div>
                </div>
            <Album artistAlbum={artist.albums}/>
            </div>
        </div>
    )
}

export default Artist;