/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'

class MyFooter extends Component {

    displayLiveOnlineOrOffline(is_live){
        if(is_live){
            return <div style={{marginLeft:'7%', marginTop:'2%'}}><img style={{width:'4%'}} src={process.env.PUBLIC_URL + '/images/twitch_online.svg'} alt="twitch" /><span className="hoverText" style={{marginLeft:'1%'}}>Stream online !</span></div>
        } else{

            return <div style={{marginLeft:'7%', marginTop:'2%'}}><img style={{width:'4%'}} src={process.env.PUBLIC_URL + '/images/twitch_offline.svg'} alt="twitch" /><span style={{marginLeft:'1%', color:'black'}}>Stream offline :(</span></div>
        }
    }
    render() {
        
        
        return (
            <footer className="App-footer mb-2 mt-2">
            <div>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <a style={{textDecoration:'none', color:'#F6EAEA'}} href="test" alt="Contact"><h3 className="h-auto hoverText" style={{fontSize: '2vw'}}> Contact </h3></a>
                    <a target="_blank" style={{textDecoration:'none', color:'#F6EAEA'}} href="https://www.twitch.tv/imnotluw" alt="stream"><h3 className="h-auto hoverText" style={{fontSize: '2vw'}}> Mon stream </h3></a>
                    <a style={{textDecoration:'none', color:'#F6EAEA'}} href="test" alt="Planning"><h3 className="h-auto hoverText" style={{fontSize: '2vw'}}> Mon Planning </h3></a>
                    <a style={{textDecoration:'none', color:'#F6EAEA'}} href="test" alt="Amis_stream"><h3 className="h-auto hoverText" style={{fontSize: '2vw'}}> Mes amis streameurs </h3></a>
            </div>       
            {/*<b><a target="_blank" style={{textDecoration:'none', color:'#F6EAEA'}} href="https://www.twitch.tv/imnotluw" alt="stream">{this.displayLiveOnlineOrOffline(this.props.is_live)}</a></b>*/}
        </div>
         </footer>
        )
    }
}

export default MyFooter