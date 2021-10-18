import React from "react"


const Album =({artistAlbum})=>
{
    const showList=(albums)=>(
        albums 
        ?
        albums.map((item,i)=>
        {
         return <img key={i} alt={item.title} src={`/images/albums/${item.cover}.jpg`}/>
        })
        :
        null
    )
    
    return (
        <div className="">
            {
               showList(artistAlbum)
            }
        </div>

    )
}

export default Album;