import React, { Component } from 'react'
import BackgroundMusic from ".././assets/sound/bg-sound.mp3"
export class Music extends Component {
    constructor(props) {
        super(props);
        this.state ={
            play: false,
            pause: true
        };
        this.BgSound = new Audio(BackgroundMusic);

      }
      play = () => {
        this.setState({
          play: true,
          pause: false
        });
        console.log(this.audio);
        this.BgSound.play();
      }
    
      pause = () => {
      this.setState({ play: false, pause: true });
        this.BgSound.pause();
      }
    
    render() {

        return (
            <div className="Music">
              {"Music"}  
                <button onClick={this.play}>Play</button>
                <button onClick={this.pause}>Pause</button>
            </div>
        )
    }
}

export default Music
