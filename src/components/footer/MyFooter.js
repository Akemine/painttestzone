/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'

export class MyFooter extends Component {
    render() {
        return (
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <a style={{textDecoration:'none', color:'#F6EAEA'}} href="test" alt="Contact"><div className="mt-2"> Contact </div></a>
            <a target="_blank" style={{textDecoration:'none', color:'#F6EAEA'}} href="https://www.twitch.tv/imnotluw" alt="stream"><div className="mt-2"> Mon stream </div></a>
            <a style={{textDecoration:'none', color:'#F6EAEA'}} href="test" alt="Planning"><div className="mt-2"> Mon Planning </div></a>
            <a style={{textDecoration:'none', color:'#F6EAEA'}} href="test" alt="Amis_stream"><div className="mt-2"> Mes amis streameurs </div></a>
        </div>
        )
    }
}

export default MyFooter