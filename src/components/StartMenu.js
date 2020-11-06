import React, { Component } from 'react'

export class StartMenu extends Component {
    constructor(props) {
        super(props);
        this.state ={
           isShown: true,
           
        }
      }

    render() {
        const {isShown} = this.state;
        
        return (
            isShown ?
            <div className="start-menu">
                <button onClick={this.setstratgame} className="start-btn">
                    start game                
                </button>

            </div> : null
        )
    }

    setstratgame = () => {
          this.setState({
              "isShown": false,
          });
          console.log(this.state.isShown);
            
        };
    
}

export default StartMenu
