import React from  "react";

import Card from  "./Card/Card";
import styles from "./Cards.module.css";

const Cards = props => {
    const characteristics = props.characteristics.map(character => {
        return <Card key={character.id} cardData={character} />
    })
    return (
        <div className={styles.Cards}>
            {characteristics}
        </div>
    )
};

export default Cards;