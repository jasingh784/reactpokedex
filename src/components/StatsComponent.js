import React from 'react';


function StatsComponent(props) {
    const types = props.types.map(type => 
            <span>{type.type.name} </span>
        );
    return (
        <>
        <h3>{props.name}</h3>
        <b>Type: </b> {types}
        </>
    );

}

export default StatsComponent;