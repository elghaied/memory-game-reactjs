import React, { Component } from 'react'
import StartMenu from "./StartMenu";
import Music from "./Music";
import Card from "./Card";
import CardsData from "../Cards/Cards"
export class GameBoard extends Component {
    constructor(props) {
        super(props)
        this.state ={
       
        }
      }
      
    render() {
        return (
            <div className="GameBoard">
         
            <StartMenu/> 
            <Music/>

            <div className="Board-Bg">
                {CardsData.sort(()=> Math.random() -0.5).map((card, index) => {
                  

                    return(


                        <Card key = {index}
                        name = {card.name}
                        image = {card.image}
                        quantity = {card.quantity}
                        />
             )
                })}
            </div>
            </div>
        )
    }
}

export default GameBoard
