import React, { Component } from 'react';


export class Card extends Component {
    constructor(props) {
        super(props);
        this.state ={
            showCard: false,
            card1: "",
            card2: "",
            match: false,
      
        };
        this.setVisible = this.setVisible.bind(this);
       
      }
      setVisible = (event) => {
        if(!this.state.match){
          if(this.state.card1 !== "" && this.state.card2 === ""){
            this.setState({
              showCard: !this.state.showCard,
              card2: this.props.name,
            })
            console.log("after 2 card")

            if (this.state.card1 == this.state.card2){
              console.log("1point")
              this.setState({
                match: true,
              })
            }if(this.state.card1 !== this.state.card2) {
              console.log("hide false")
              this.setState({
                
                showCard: false,
                card1: "",
                card2: ""
              })
            }
          }
          if(this.state.card1 === "" && this.state.card2 === ""){

      
              this.setState({
                  showCard: !this.state.showCard,
                  card1: this.props.name,
                

                });    
          }
            console.log("here you go");
            console.log(this.props.name);
        }
    }
    render() {
        const {showCard} = this.state;
      const {name,image} = this.props;
            
       
            
                    return (
                

                        <div
                        className = "Card"
                        onClick = {this.setVisible}
                        value = {name}
                        >
                        {showCard ?
                        <img 
                        src = { image }
                        alt = {name} /> : null }

                        </div>
                    )
                

                    }
                }
        

export default Card
