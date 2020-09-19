import React from 'react';

function PokemonImage(props) {
    const offical_artwork = props.image.other["official-artwork"].front_default;
    return (
        <>
        <div className="imgBackground"></div>
        <img src = {offical_artwork} alt="this is a pokemon"></img>
        </>
    );
}

export default PokemonImage;