// import { useEffect, useState } from "react";
// import axios from "axios";

import { useState } from "react";
// import championData from "./champion.json";
import _ from "lodash";
import "./Card.css";

// const Card = ({ content, onClick }) => {
//   const [isClicked, setIsClicked] = useState(false);
//   const shuffledChampsData = _.shuffle(championData.data);
//   const uniqueChampsData = _.uniqBy(shuffledChampsData, 'id'); // Use 'id' or any unique property

//   // useEffect(() => {
//   //   const fetchChampions = async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         "https://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion.json"
//   //       );
//   //       const champData = response.data.data;
//   //       const shuffledChampsData = _.shuffle(champData);
//   //       setChampions(Object.values(shuffledChampsData));
//   //     } catch (error) {
//   //       console.error("Error fetching champions:", error);
//   //     }
//   //   };
//   //   fetchChampions();
//   // }, []);

//   const handleClick = () => {
//     onClick(isClicked);
//     setIsClicked(true);
//   };

//   // Ensure content is a valid index
//   const currentChampion =
//     Array.isArray(uniqueChampsData) && uniqueChampsData[content] ? uniqueChampsData[content] : null;

//   return (
//     <button className="card" onClick={handleClick}>
//       {content}
//       <img
//         src={
//           currentChampion && currentChampion.id
//             ? `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${currentChampion.id}_0.jpg`
//             : ""
//         }
//         alt={currentChampion ? currentChampion.id : "Champion"}
//         width="100"
//         loading="lazy"
//       />
//       <p>{currentChampion ? currentChampion.id : "ID not available"}</p>
//     </button>
//   );
// };


// src={`https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${champions}`}


// API method but using 
import axios from "axios";
import { useEffect } from "react";

const Card = ({ content, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [champions, setChampions] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState()
  
  useEffect(() => {
    const fetchChampions = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion.json"
        );
        const champData = response.data.data;
        const shuffledChampsData = _.shuffle(champData);
        setChampions(Object.values(shuffledChampsData));
      } catch (error) {
        console.error("Error fetching champions:", error);
        setError(error)
      } finally {
        setIsLoading(false);
      }
    };
    fetchChampions();
  }, []);
  
  const handleClick = () => {
    onClick(isClicked);
    setIsClicked(true);
  };
  
  // Ensure content is a valid index
  const currentChampion =
  Array.isArray(champions) && champions[content]
  ? champions[content]
  : null;
  
  if(isLoading){
    return <div>Loading...</div>
  }
  
  if (error){
    return <div>Something went wrong. Please try again</div>
  }
  
  return (
    <button className="card" onClick={handleClick}>
      <img
        src={
          currentChampion && currentChampion.id
          ? `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${currentChampion.id}_0.jpg`
          : ""
        }
        alt={currentChampion ? currentChampion.id : "Champion"}
        width="100"
        loading="lazy"
        />
      <p>{currentChampion ? currentChampion.id : "ID not available"}</p>
    </button>
  );
};

export default Card;