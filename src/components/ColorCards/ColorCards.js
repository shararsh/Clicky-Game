import React from "react";
import "./ColorCards.css";

const ColorCards = props => (
    <div className="cards">
        <div className="img-container">
         <a onClick={() => props.selectCard(props.id)} className={props.currentScore === 0}>
                <img src={require("./images/" + props.image)} alt={props.id}/>
         </a>
        </div>
    </div>
);

export default ColorCards;