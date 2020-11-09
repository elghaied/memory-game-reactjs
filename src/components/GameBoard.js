import React, { Component } from 'react'
import StartMenu from "./StartMenu";
import Music from "./Music";
import Card from "./Card";
import EndGame from "./EndGame";
import CardsData from "../Cards/Cards"
export class GameBoard extends Component {
    constructor(props) {
        super(props)
        this.state ={
            showEndGame:false,
            score: 0,
        
       
        }

      }

    //   restart  = () => {
    //       this.setState({

    //         showEndGame: false,
    //         score: 0 ,
    //         deck: CardsData.sort(()=> Math.random() -0.5),           

    //       });

    //       let reset = document.getElementsByClassName("image");
    //       for (let i = 0; i < reset.length; i++) {
    //         reset[i].classList.add("image-blank");
    //         reset[i].setAttribute("check", "false");
    //         this.cards = [];
    //       }          
          
    //       console.log("game restarted");
    //       console.log(this.state.deck);

    //   }

      handleEndGame = (boolean) => {
        if (boolean) {
          this.setState({ showEndGame: boolean, score: this.state.score + 1, deck: CardsData.sort(()=> Math.random() -0.5), });
        } else {
          this.setState({ showEndGame: boolean });
        }
      };

     
      
    render() {
                const {score,showEndGame} = this.state;

        return (
            <div className="GameBoard">
         
            <StartMenu/> 
            {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}           

            <div className="navi">
            
            <Music/>
            <div className="score">

             <h3>Score : </h3> <h3>{score}</h3>

            </div>
            </div>
           
                  

              


            <Card 
            endGame={this.handleEndGame}
          
            />
          
            

            </div>
          
        )
    }
}

export default GameBoard
