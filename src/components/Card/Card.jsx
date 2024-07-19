// import { useEffect, useState } from "react";
// import axios from "axios";

import { useState } from "react";
import championData from "./champion.json";
import _ from "lodash";
import "./Card.css";

const Card = ({ content, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const shuffledChampsData = _.shuffle(championData.data);
  const uniqueChampsData = _.uniqBy(shuffledChampsData, 'id'); // Use 'id' or any unique property


  // useEffect(() => {
  //   const fetchChampions = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion.json"
  //       );
  //       const champData = response.data.data;
  //       const shuffledChampsData = _.shuffle(champData);
  //       setChampions(Object.values(shuffledChampsData));
  //     } catch (error) {
  //       console.error("Error fetching champions:", error);
  //     }
  //   };
  //   fetchChampions();
  // }, []);

  const handleClick = () => {
    onClick(isClicked);
    setIsClicked(true);
  };

  // Ensure content is a valid index
  const currentChampion =
    Array.isArray(uniqueChampsData) && uniqueChampsData[content] ? uniqueChampsData[content] : null;

  return (
    <button className="card" onClick={handleClick}>
      {content}
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

// src={`https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${champions}`}
