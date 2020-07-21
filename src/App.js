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
      time: 0,
      authorization: ''
    }
  }

  componentDidMount() {
    //console.log("test")
     idTwitch.post('/oauth2/token?client_id=23m2e48pcow8sf58r8blnnr1bqjygb&client_secret=y4ktfunbs0qh3qiuynh8u3fkxj8988&grant_type=refresh_token&refresh_token=jid977e7ngygsu7r8b2ekq6a80d4kus3cencvkpcdomlfl4fhi')
    .then( response => {this.setState({ authorization: response.data.access_token })
    apiTwitch.get('/helix/search/channels?query=Arst=1', {
      headers: {

        Authorization: 'Bearer ' + this.state.authorization
      }})
      .then( response => {this.setState({ twitch: response.data })
       if (response.data) {
         //console.log(this.state.twitch.data[0].is_live)
         if(this.state.twitch.data[0].is_live === true){
           this.setState({
             is_live: true
           })
         }
     } 
  })
      .catch( err => console.log(err));
  })
    .catch( err => console.log(err));

}

  
   







    

  render() {
  return (
    
    <div style={{display:'flex', justifyContent:'space-between', flexDirection:'column', height:'100vh'}} className="container">

      
          <MyNavbar></MyNavbar>


      <div className="App-content">
      </div>

      
          <MyFooter is_live = {this.state.is_live} ></MyFooter>
     

    </div>
    
    );
  }
}

export default App;
