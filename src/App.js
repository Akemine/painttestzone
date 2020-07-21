import React, { Component } from 'react';
import './App.css';
import { MyNavbar } from './components/navbar/MyNavbar';
import MyFooter from './components/footer/MyFooter';
import apiTwitch from './conf/api.twitch';
import idTwitch from './conf/id.twitch';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      twitch: null,
      is_live: false,
      authorization: ''
    }
  }

  getDataFromTwitch(){
      idTwitch.post('/oauth2/token?client_id='+process.env.REACT_APP_IMNOTLUW_TWITCH_CLIENT_ID+'&client_secret='+process.env.REACT_APP_IMNOTLUW_TWITCH_SECRET_CODE+'&grant_type=refresh_token&refresh_token='+process.env.REACT_APP_IMNOTLUW_TWITCH_REFRESH_TOKEN)
      .then( response => {this.setState({ authorization: response.data.access_token })
        apiTwitch.get('/helix/search/channels?query=Alderiate&first=1', {
          headers: {
            Authorization: 'Bearer ' + this.state.authorization
          }})
          .then( response => {this.setState({ twitch: response.data })
            if(this.state.twitch.data[0].is_live === true){
              this.setState({
                is_live: true
              })
            }
      })
          .catch( err => console.log(err));
    })
      .catch( err => console.log(err));
  }

  componentDidMount() {
    this.getDataFromTwitch()
  }

  

  render() {

    
  return (
    
    <div style={{display:'flex', justifyContent:'space-between', flexDirection:'column', height:'100vh'}} className="container">

          {console.log("lol")}
          <MyNavbar /*is_live = {this.state.is_live}*/></MyNavbar>


      <div className="App-content">
      </div>

      
          <MyFooter /*is_live = {this.state.is_live}*/ ></MyFooter>
     

    </div>
    
    );
  }
}

export default App;
