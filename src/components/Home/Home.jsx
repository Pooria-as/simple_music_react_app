import React from 'react';
import Header from "../partials/Header"
import Banner from "../partials/Banner"
import axios from 'axios';
import ArtistsList from "../partials/ArtistsList"
class Home extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            artists:[]
        }

    }
    
    async componentDidMount()
    {
        const res=await axios.get('http://localhost:3005/artists')
        const response=res.data
       this.setState({artists:response})
    }


    render() { 
        return <div>    
            <Header/>
            <Banner/>
            <ArtistsList allArtists={this.state.artists}/>
        </div>;
    }
}
 
export default Home;
 