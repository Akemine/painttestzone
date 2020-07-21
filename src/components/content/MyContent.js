/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import Loading from '../utils/Loading'

class MyContent extends Component {

          constructor(props){
                    super(props)
          }

          
          
    render() {
          

        return (
        
          <div className="myRounded d-flex justify-content-around scrollBarVertical" style={{flexWrap:'wrap'}} >
                     
                     
                     {this.props.images.data.map((myImg, index) => (
                               <div key={index}>
                              <img  className="myRounded child " src={process.env.PUBLIC_URL + '/images/oeuvres/' + myImg} alt="luwImage" />
                              </div>
                     )) 
                    }

        </div>
         
        )
    }
}

export default MyContent