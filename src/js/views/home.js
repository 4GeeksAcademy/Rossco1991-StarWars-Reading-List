import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";


export const Home = () => {
	const [characters, setCharacters] =useState([]);
	
	useEffect(()=>{
		async function fetchCharacters(){
			const result = await fetch("https://swapi.dev/api/people/")
			const data = await result.json()
			setCharacters(data.results)
		}
		fetchCharacters();
	},[])

	return(	characters.map((character,idx)=>(
		<Card key={idx} name = {character.name} />
	)));
	
console.log(characters)	
};
