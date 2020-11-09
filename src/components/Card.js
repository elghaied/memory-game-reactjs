import React, { Component } from 'react';
import CardsData from "../Cards/Cards";

export class Card extends Component {
    constructor(props) {
        super(props);
        this.state ={
          showCard: this.props.showCard,
          paired: this.props.paired,
          card1:this.props.card1,
          deck: CardsData.sort(()=> Math.random() -0.5),
        
        };
        console.log(this.state.deck);


      }
    // =================================
    //================== test =========
    // ===============================
    
    cards = [];
    handleClick = (event) => {
      let myCard = event.target;
      if (myCard.getAttribute("check") === "found") {
        return;
      }
  
      if (myCard !== this.cards[0]) {
        this.switch(myCard);
        this.cards.push(myCard);
      } else {
        this.switch(myCard);
        this.cards = [];
      }
  
      if (this.cards.length > 2) {
        if (!this.checkName(this.cards[0], this.cards[1])) {
          this.switch(this.cards[0]);
          this.switch(this.cards[1]);
          this.cards.shift();
          this.cards.shift();
        } else {
          this.cards.shift();
          this.cards.shift();
        }
      }
      let allPictures = document.getElementsByClassName("image-blank");
      if (allPictures.length < 1) {
        this.props.endGame(true);
        let reset = document.getElementsByClassName("image");
        for (let i = 0; i < reset.length; i++) {
          reset[i].classList.add("image-blank");
          reset[i].setAttribute("check", "false");
          this.cards = [];
        }
      }
    };
  
    checkName = (myCard1, myCard2) => {
      if (myCard1.getAttribute("name") === myCard2.getAttribute("name")) {
        myCard1.setAttribute("check", "found");
        myCard2.setAttribute("check", "found");
        return true;
      }
      return false;
    };
  
    switch = (target) => {
      if (target.getAttribute("check") === "true") {
        target.setAttribute("check", "false");
        target.classList.add("image-blank");
      } else {
        target.setAttribute("check", "true");
        target.classList.remove("image-blank");
      }
    };

    //===================================
    //===================================

    render() {
   
      const {deck} = this.state;
     
          return (
      
          <div className="Board-Bg">

            { deck.map((card, index) => {
              return(

              <article key = {index}
              
              className = " image image-blank"
              name = {card.name}
              check="false"
              onClick={this.handleClick}
              style={{ background: `url(${card.image})` }}
              >
              </article>

              )
            }
            )
            }
          </div>
        )
      }
    
  
}

        

export default Card