/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import the uuid function
import Card from "./components/Card";
import ScoreBoard from './components/ScoreBoard';
import "./App.css";

function App() {
  const [deck, setDeck] = useState(generateInitialDeck());
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0)

  function generateInitialDeck() {
    const cards = [];
    for (let i = 0; i < 10; i++) {
      // cards.push(<Card key={uuidv4()} onClick={handleClick} />);
      cards.push({ id: uuidv4(), value: i }); // Example card object
    }
    return cards;
  }

  function shuffleDeck() {
    const shuffledDeck = [...deck]; // Create a copy of the deck
    let currentIndex = shuffledDeck.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledDeck[currentIndex], shuffledDeck[randomIndex]] = [
        shuffledDeck[randomIndex],
        shuffledDeck[currentIndex],
      ];
    }

    setDeck(shuffledDeck);
  }

  function handleCardClick(isClicked) {
    if (isClicked === true) {
      setGameOver(true);
      console.log('game over');
    } else {
      setScore(score+1)
      shuffleDeck();
    }
  }

  useEffect(() => {
    if (gameOver) {
      console.log('Game Over! Resetting...');
      setDeck(generateInitialDeck());
      setGameOver(false);
      setScore(0);
    }
  }, [gameOver]);



  return (
    <div className="container">
      <header className="header-container">
        <div>
          <h1>Memory Game</h1>
          <p>
            Get points by clicking on an image but don't click on any more than
            once!
          </p>
        </div>
        <div className="Score-container">
          <ScoreBoard points={score}></ScoreBoard>
        </div>
      </header>
      <div className="game-container">
        {deck.map((card) => (
          <Card key={card.id} content={card.value} onClick={handleCardClick}/>
        ))}
      </div>
    </div>
  );
}

export default App;
