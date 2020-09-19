import React from 'react';


function PokemonImage(props) {
    const offical_artwork = props.image.other["official-artwork"].front_default;
    return (
        <div className="pokeImages">
            <img className = "pokeballImage" src = "pngegg.png" alt="pokeball"></img>
            <img className = "thePokemon" src = {offical_artwork} alt="this is a pokemon"></img>
        </div>
    );
}

export default PokemonImage;