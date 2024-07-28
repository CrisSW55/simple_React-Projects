import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import pikachu from "./images/pikachu.png";
import raichu from "./images/raichu.png";



const init_pokemon = [
  {id:0,pokemonName:'pikachu',type:'electric',img:pikachu},
  {id:1,pokemonName:'squirtle',type:'water'},
  {id:2,pokemonName:'charmander ',type:'fire'},
  {id:3,pokemonName:'bulbasaur',type:'grass/poison'},]


function App() {

  const[pokemon,setPokemon]= useState(init_pokemon);
  const[selectpokemon,setSelectPokemon]= useState(pokemon[0]);

  
  let key = 0;
  return (
    <>
    
    <h2>Pokemon</h2> 
 
   <button onClick={() =>{

       setSelectPokemon(pokemon.map(p=>{
             key = p.id
             if(key === p.id){
                 p.pokemonName = 'raichu';
                 p.img = raichu;

             }

       }));
    
   }}>Evolve Pokemon</button>

   <p>{pokemon[0].pokemonName}</p>
   <img src= {pokemon[0].img} alt="pikachu" width="200" height="200"/>


   
   </>
   
  );
}

export default App;
