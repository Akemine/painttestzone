import React, { Component } from 'react';
import './App.css';
import { MyNavbar } from './components/navbar/MyNavbar';
import MyFooter from './components/footer/MyFooter';
import apiTwitch from './conf/api.twitch';


import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      twitch: null,
      is_live: false,
      time: 0
    }
  }


  // componentDidMount() {
  //   apiTwitch.post('/oauth2/token?client_id=23m2e48pcow8sf58r8blnnr1bqjygb&client_secret=y4ktfunbs0qh3qiuynh8u3fkxj8988&code=s0tq93mx130823br2bfzf5eit1jd3a&grant_type=authorization_code&redirect_uri=http://localhost:3000/')
  //     .then( response => response.data.results )
  //     .then( twitchApi => {
  //       const twitch = twitchApi.map(t => ({ 
  //         response_type: t.response_type
  //       }));
  //       console.log(twitch.response_type)
  //     })
  //     .catch( err => console.log(err));
  // }



  componentDidMount(e) {
   console.log("component did mounted...") 
    apiTwitch.get('/helix/search/channels?query=ImNotLuw&first=1')
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
