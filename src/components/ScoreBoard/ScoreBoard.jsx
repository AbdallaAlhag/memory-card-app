import { useEffect, useReducer } from "react";
import "./ScoreBoard.css";

// Define initial state
const initialState = {
  highScore: 0,
  points: 0,
};

// Define reducer function
function reducer(state, action) {
  switch (action.type) {
    case "SET_HIGH_SCORE":
      return {
        ...state,
        highScore: action.payload,
      };
    case "SET_POINTS":
      return {
        ...state,
        points: action.payload,
      };
    default:
      return state;
  }
}

const ScoreBoard = ({ points }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedHighScore = localStorage.getItem("highScore");
    if (storedHighScore) {
      dispatch({
        type: "SET_HIGH_SCORE",
        payload: JSON.parse(storedHighScore),
      });
    } else {
      localStorage.setItem("highScore", JSON.stringify(points));
      dispatch({ type: "SET_HIGH_SCORE", payload: points });
    }
  }, [points]);

  useEffect(() => {
    if (points > state.highScore) {
      localStorage.setItem("highScore", JSON.stringify(points));
      dispatch({ type: "SET_HIGH_SCORE", payload: points });
    }
  }, [points, state.highScore]);

  return (
    <>
      <h3>Score: {points}</h3>
      <h3>High-Score: {state.highScore || 0}</h3>
    </>
  );
};

export default ScoreBoard;
