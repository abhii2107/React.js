import "./pokemon.css"
import React, { useEffect } from "react";
import { useState } from "react";
export const HowNotToFetchApi = () => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const API = "https://pokeapi.co/api/v2/pokemon/raticate"


    // const fetchPokemon = () => {
    //     fetch(API)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setApiData(data)
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             setError(error);
    //             setLoading(fasle);
    //         })
    // }
    const fetchPokemon = async () => {
        try {
           const res   = await fetch(API);
            const data = await res.json();
            setApiData(data)
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            setError(error);
            setLoading(fasle);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, [])
    console.log(apiData)

    if (!apiData) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    if (error) {
        return (
            <div>
                <h1>Error: {error.message}</h1>
            </div>
        )
    }

    if (apiData) {
        return (
            <section className="container">
                <header>
                    <h1>Let's Catch Them All</h1>
                </header>
                <ul className="card-demo">
                    <li className="pokemon-card">
                        <figure>
                            <img src={apiData.sprites.other.dream_world.front_default}
                                alt={apiData.name}
                                className="pokemon-img"
                            />
                        </figure>
                        <h1>{apiData.name}</h1>
                        <div className="grid-three-cols">
                            <p className="pokemon-info">
                                Height: <span>{apiData.height}</span>
                            </p>
                            <p className="pokemom-info">
                                Weight: <span>{apiData.weight}</span>
                            </p>
                            <p className="pokemon-info">
                                speed: <span>{apiData.stats[5].base_stat}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
};