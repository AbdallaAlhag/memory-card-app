/* eslint-disable react/no-unescaped-entities */
// App Stores our game logic
import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid"; // Import the uuid function
import { Link } from "react-router-dom";
import Card from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";
import VideoBackground from "./components/VideoBackground";
import Modal from "./components/Modal";
import AudioPlayer from "./components/AudioPlayer";
import "./App.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [deck, setDeck] = useState(generateInitialDeck());
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRefs = useRef([]);

  // Ensure cardRefs.current is an array
  cardRefs.current = [];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  function generateInitialDeck() {
    const cards = [];
    const seen = new Set();
    let randomNumber;

    // I'm pretty sure there are 159 characters in the champions array
    for (let i = 0; i < 5; i++) {
      do {
        randomNumber = getRandomInt(159);
      } while (seen.has(randomNumber));
      // cards.push(<Card key={uuidv4()} onClick={handleClick} />);
      cards.push({ id: uuidv4(), value: randomNumber }); // Example card object
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
    console.log(isClicked);
    if (isClicked === true) {
      openModal();
      setGameOver(true);
    } else {
      setScore(score + 1);
      flipHalfwayAndShuffle();
    }
  }

  const flipHalfwayAndShuffle = async () => {
    // Flip all cards halfway
    await Promise.all(cardRefs.current.map((ref) => ref.flipHalfway()));

    // Shuffle the deck
    shuffleDeck();

    // Flip all cards back
    await Promise.all(cardRefs.current.map((ref) => ref.flipBack()));
  };

  useEffect(() => {
    if (gameOver) {
      console.log("Game Over! Resetting...");
      setDeck(generateInitialDeck());
      setGameOver(false);
      setScore(0);
    }
  }, [gameOver]);

  console.log(deck);
  return (
    <div className="container">
      <VideoBackground link="src/assets/background/zaun-arcane-desktop-wallpaperwaifu-com.mp4" />
      <div className="content">
        <header className="header-container">
          <div>
            <div className="title">
              <Link to="/">
                <img
                  src="src\assets\img\leagueLogo.png"
                  alt="league of legends Logo"
                />
              </Link>
              <h1>Memory Game</h1>
            </div>
            <h3>
              Get points by clicking on an image but don't click on any more
              than once!
            </h3>
          </div>
          <div className="Score-container">
            <ScoreBoard points={score}></ScoreBoard>
          </div>
        </header>
        <div className="game-container">
          {deck.map((card, index) => (
            <Card
              key={card.id}
              ref={(ref) => (cardRefs.current[index] = ref)}
              content={card.value}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
      <div className="footer-container">
        <AudioPlayer
          src="src\assets\Audio\Updated Summoner's Rift - Complete Soundtrack.mp3"
          loop={true}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <button onClick={closeModal}>
          <img
            src="src/assets/leagueVictoryButton.png"
            alt="League defeat screen continue button"
          />
        </button>
      </Modal>
    </div>
  );
}

export default App;
