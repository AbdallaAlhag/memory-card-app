
## Demo

https://leaguememorycard.netlify.app/app

https://streamable.com/l46tle

# Memory Game


Welcome to the Memory Game project! This project showcases the concepts of React hooks, state management, and data fetching from an external API. The main goal is to demonstrate these concepts through a fun and interactive memory game.

The Memory Game is a simple yet engaging game where players flip cards to find matching pairs. The cards display images fetched from an external API, and each playthrough shuffles the cards randomly. The game includes a scoreboard that tracks the current score and the best score achieved by the player.
## Screenshots

![App Screenshot](https://snipboard.io/6MrZmB.jpg)

![App Screenshot](https://snipboard.io/1mLGUM.jpg)

## Features

- Current Score: Tracks the player's current score during the game.
- Best Score: Records the highest score achieved by the player across all playthroughs.
- Randomized Cards: Cards are displayed in a random order each time the user clicks one or when the component mounts.
- API Integration: Images and informational text on the cards are fetched from the riot API.
- Animation: Uses framer motion to flip cards and animate graphics during the app.



## Installation

1. Clone the repository:

```bash
  git clone https://github.com/yourusername/memory-game.git
```
    
2. Navigate to the project directory:


```bash
  cd memory-game
```

3. Install the dependencies:


```bash
  npm install
```

## Running the Application

1. Start the development server:

```bash
  npm start
```

2. Open your browser and go to http://localhost:3000 to see the application in action.

## Dependencies
- "@fightmegg/riot-api": "^0.0.20"
- "axios": "^1.7.2"
- "framer-motion": "^11.3.8"
- "lodash": "^4.17.21"
- "react": "^18.3.1"
- "react-dom": "^18.3.1"
- "react-parallax-tilt": "^1.7.232"
- "react-router-dom": "^6.25.1"
- "uuid": "^10.0.0"
## Assets

Live assets:

- https://wallpaperwaifu.com/games/league-of-legends-bilgewater-live-wallpaper/
- https://www.desktophut.com/Star-Guardian-2022-LoL-Live-Wallpaper (loading)
- https://moewalls.com/games/project-hunters-league-of-legends-live-wallpaper/ (maybe main page)

Non-live assets:

- https://wall.alphacoders.com/big.php?i=1311637 -> https://alphacoders.com/- league-of-legends-wallpapers (good source)

Fonts:

- https://brand.riotgames.com/en-us/league-of-legends/typography

Api:

- https://developer.riotgames.com/apis#account-v1
- https://developer.riotgames.com/docs/lol

## React + Vite

This project uses the React framework with Vite as the build tool. Vite offers fast hot module replacement (HMR) and optimized build performance.

Plugins
- @vitejs/plugin-react uses Babel for Fast Refresh.
- @vitejs/plugin-react-swc uses SWC for Fast Refresh.
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Future Possible Features

- Loading page to improve loading components smoothly.
- Difficulty levels (easy, medium, hard) with different numbers of cards (e.g., 5, 10, 15 cards).
- Swapping out cards instead of using the same set, potentially keeping the states of - swapped-out cards.
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

