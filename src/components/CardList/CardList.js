import React from "react";

import Card from "./Card/Card";
import styles from "./CardList.module.css"

const CardList = props => {

    const cardList = props.cards.map(card => {
        return <Card 
                    key={card.id} 
                    name={card.name}
                    imgUrl={card.imgUrl}
                    showDetails = {props.showDetails ? () => props.showDetails(card) : null}
                    />;
    });
    return (
        <div className={styles.CardList}>
            {cardList}
        </div>
    )
};

export default CardList;