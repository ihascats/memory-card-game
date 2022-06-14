import React, { useEffect, useState } from 'react';
import './styles/GameBoard.css';
import blushContent from './cardImages/blushContent.png';
import cryingSad from './cardImages/cryingSad.png';
import dead from './cardImages/dead.png';
import happy from './cardImages/happy.png';
import happyBlush from './cardImages/happyBlush.png';
import inLove from './cardImages/inLove.png';
import reluctant from './cardImages/reluctant.png';
import sad from './cardImages/sad.png';
import sunglasses from './cardImages/sunglasses.png';
import surprised from './cardImages/surprised.png';
import surprisedBlank from './cardImages/surprisedBlank.png';
import tearSad from './cardImages/tearSad.png';
import MemoryCard from './MemoryCard';

export default function GameBoard(props) {
  function shuffle(immutableArray) {
    let array = [...immutableArray];
    // https://bost.ocks.org/mike/shuffle/
    let m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  const [cardArray, setCardArray] = useState();
  const [endGame, setEndGame] = useState(false);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  useEffect(() => {
    const arrayOfImages = [
      <MemoryCard
        game={gameFinished}
        key="blushContent"
        alt="blushContent"
        source={blushContent}
      />,
      <MemoryCard
        game={gameFinished}
        key="cryingSad"
        alt="cryingSad"
        source={cryingSad}
      />,
      <MemoryCard game={gameFinished} key="dead" alt="dead" source={dead} />,
      <MemoryCard game={gameFinished} key="happy" alt="happy" source={happy} />,
      <MemoryCard
        game={gameFinished}
        key="happyBlush"
        alt="happyBlush"
        source={happyBlush}
      />,
      <MemoryCard
        game={gameFinished}
        key="inLove"
        alt="inLove"
        source={inLove}
      />,
      <MemoryCard
        game={gameFinished}
        key="reluctant"
        alt="reluctant"
        source={reluctant}
      />,
      <MemoryCard game={gameFinished} key="sad" alt="sad" source={sad} />,
      <MemoryCard
        game={gameFinished}
        key="sunglasses"
        alt="sunglasses"
        source={sunglasses}
      />,
      <MemoryCard
        game={gameFinished}
        key="surprised"
        alt="surprised"
        source={surprised}
      />,
      <MemoryCard
        game={gameFinished}
        key="surprisedBlank"
        alt="surprisedBlank"
        source={surprisedBlank}
      />,
      <MemoryCard key="tearSad" alt="tearSad" source={tearSad} />,
    ];
    if (!cardArray) {
      setCardArray(shuffle(arrayOfImages));
    }
    if (score === 12) {
      setEndGame(true);
    }
    if (score > best) {
      setBest(score);
    }

    if (!best) return;

    if (!arrayOfImages) return;
  }, [cardArray, score, best]);

  function shuffleCards() {
    setCardArray(shuffle(cardArray));
  }

  function gameFinished() {
    setEndGame(true);
  }

  function addScore() {
    setScore(score + 1);
  }

  const resetScreen = (
    <div className="reset">
      <h1>You Lost :C</h1>
      <button
        onClick={() => {
          setEndGame(false);
          setScore(0);
        }}
      >
        Restart
      </button>
    </div>
  );

  const winScreen = (
    <div className="reset">
      <h1>You WON!! C:</h1>
      <button
        onClick={() => {
          setEndGame(false);
          setScore(0);
        }}
      >
        Play Again!
      </button>
    </div>
  );

  return (
    <div className="container">
      {endGame && score !== 12 ? resetScreen : null}
      {score === 12 ? winScreen : null}
      <h1>
        Current Score: {score} | All time best: {best}
      </h1>
      <div
        onClick={(event) => {
          if (endGame) return;
          const image = event.target.closest('img');
          if (!image || image === null) return;
          addScore();
          shuffleCards();
        }}
        className="game"
      >
        {cardArray}
      </div>
    </div>
  );
}
