import React, { Component } from 'react'
import StartMenu from "./StartMenu";
import Music from "./Music";
import Card from "./Card";
import CardsData from "../Cards/Cards"
export class GameBoard extends Component {
    constructor(props) {
        super(props)
        this.state ={
            showCard: false,
            match: false,
            card1:"",
            card2:"",
       
        }
        this.setVisible = this.setVisible.bind(this);

      }
      setVisible = (e) => {

        this.setState({
            showCard: !this.state.showCard,
            
           
        });
        console.log("this is name on GameBoard.js >>",this.props.name);
        console.log(e);
        
        // if(!this.state.match){
        //   if(this.state.card1 !== "" && this.state.card2 === ""){
        //     console.log( "card1 full and card2 empty")

        //     this.setState({
        //       showCard: !this.state.showCard,
        //       card2: e.props.value,
        //     })
        //     console.log("after 2 card")

        //     if (this.state.card1 === this.props.name){
        //       console.log("1point")
        //       this.setState({
        //         match: true,
        //       });

        //     }
        //     if(this.state.card1 !== this.state.card2) {
        //       console.log("hide false")
        //       this.setState({
                
        //         showCard: false,
        //         card1: "",
        //         card2: ""
        //       })
        //     }
        //   }
        //   if(this.state.card1 === "" && this.state.card2 === ""){

      
        //       this.setState({
        //           showCard: !this.state.showCard,
        //           card1: e.props.value,
                

        //         });    
        //         console.log( "card1 and card2 empty")
        //   }
        //     console.log("here you go");
        //     console.log(this.props.name);
        // }
    }
    render() {
                const {showCard} = this.state;

        return (
            <div className="GameBoard">
         
            <StartMenu/> 
            <Music/>

            <div className="Board-Bg">
                { CardsData.sort(()=> Math.random() -0.5).map((card, index) => {
                  

                    return(


                        <Card key = {index}
                        name = {card.name}
                        image = {card.image}
                        quantity = {card.quantity}
                        showCard = {showCard}
                        setVisible = {this.setVisible}
                        />
             )
                })}
            </div>
            </div>
        )
    }
}

export default GameBoard
