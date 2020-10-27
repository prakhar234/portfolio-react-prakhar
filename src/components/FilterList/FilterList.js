import React from "react";

import Filter from "./Filter/Filter";
import styles from "./FilterList.module.css"

const FilterList = props => {
    const filterList = props.filters.map(filter => {
        return <Filter 
                    key={filter.id} 
                    text={filter.displayName} 
                    active={filter.active} 
                    setActiveFilter={() => props.setActiveFilter(filter.id)} />;
    });
    return (
        <div className={styles.FilterList}>
            {filterList}
        </div>
    )
};

export default FilterList;