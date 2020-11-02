import React from  "react";

import Card from  "./Card/Card";
import styles from "./CharacterCards.module.css";

const CharacterCards = props => {
    const characteristics = props.characteristics.map(character => {
        return <Card key={character.id} characterCardData={character} />
    })
    return (
        <div className={styles.CharacterCards}>
            {characteristics}
        </div>
    )
};

export default CharacterCards;