import React, { Component } from 'react';


export class Card extends Component {
    constructor(props) {
        super(props);
        this.state ={
          name: this.props.name,
          showCard: this.props.showCard
        };
       
      }


      
    render() {
      const {name,image} = this.props;
      const {showCard } = this.state;
                    return (
                

                        <div
                        className = "Card"
                        onClick = { (e) => this.updateCard(e)}
                        >
                        {showCard ?
                        <img 
                        src = { image }
                        alt = {name} /> : null }

                        </div>
                    )
                

                    }

                    updateCard (e){

                      this.setState({
                        name: this.props.name
                      })
                      this.props.setVisible(e);
                    }
                }
        

export default Card
