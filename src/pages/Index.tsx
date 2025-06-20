
import { useState, useEffect } from 'react';
import { Gift, Cake } from 'lucide-react';
import './BirthdayStyles.css';

const Index = () => {
  const [currentScene, setCurrentScene] = useState(1);
  const [showConfetti, setConfetti] = useState(false);
  const [boxOpened, setBoxOpened] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showBear, setShowBear] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  const questions = [
    "Are you really sure?",
    "You literally sure for that?", 
    "Are you sureee?",
    "Sureee?"
  ];

  const handleBoxClick = () => {
    setBoxOpened(true);
    setTimeout(() => {
      setConfetti(true);
      setTimeout(() => {
        setShowBear(true);
        setPlayMusic(true);
        setTimeout(() => {
          setCurrentScene(2);
        }, 3000);
      }, 1000);
    }, 800);
  };

  const nextScene = () => {
    setCurrentScene(currentScene + 1);
  };

  const handleYesClick = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setCurrentScene(6);
    }
  };

  const handleEnvelopeClick = () => {
    setEnvelopeOpened(true);
  };

  const renderScene = () => {
    switch(currentScene) {
      case 1:
        return (
          <div className="scene gift-scene">
            <div className="bubble-text">
              🎁 Click the box for a surprise!
            </div>
            <div 
              className={`gift-box ${boxOpened ? 'opened' : ''}`}
              onClick={!boxOpened ? handleBoxClick : undefined}
            >
              <div className="box-lid"></div>
              <div className="box-base"></div>
              <div className="ribbon-v"></div>
              <div className="ribbon-h"></div>
            </div>
            
            {showConfetti && (
              <div className="confetti-container">
                {[...Array(50)].map((_, i) => (
                  <div key={i} className={`confetti confetti-${i % 5}`}></div>
                ))}
              </div>
            )}
            
            {showBear && (
              <div className="ice-bear-container animate-bear">
                <div className="birthday-text">HAPPY 20TH BIRTHDAY, REY!</div>
                <div className="ice-bear">
                  <div className="bear-body"></div>
                  <div className="bear-head"></div>
                  <div className="bear-ear left"></div>
                  <div className="bear-ear right"></div>
                  <div className="bear-eye left"></div>
                  <div className="bear-eye right"></div>
                  <div className="bear-nose"></div>
                  <div className="bear-mouth"></div>
                  <div className="bear-arm left"></div>
                  <div className="bear-arm right"></div>
                  <div className="bear-leg left"></div>
                  <div className="bear-leg right"></div>
                </div>
                <div className="cake-container">
                  <Cake className="birthday-cake" size={60} />
                  <div className="candle"></div>
                  <div className="flame"></div>
                </div>
                {playMusic && (
                  <audio autoPlay loop>
                    <source src="data:audio/wav;base64,..." type="audio/wav" />
                  </audio>
                )}
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="scene question-scene">
            <div className="bubble-text">
              Now you're done! Are you excited for your gift?
            </div>
            <div className="button-container">
              <button className="yes-button" onClick={nextScene}>Yes</button>
              <button className="yes-button" onClick={nextScene}>Yes</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="scene question-scene">
            <div className="bubble-text">
              {questions[questionIndex]}
            </div>
            <div className="button-container">
              <button className="yes-button" onClick={handleYesClick}>Yes</button>
              <button className="yes-button" onClick={handleYesClick}>Yes</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="scene question-scene">
            <div className="bubble-text">
              {questions[questionIndex]}
            </div>
            <div className="button-container">
              <button className="yes-button" onClick={handleYesClick}>Yes</button>
              <button className="yes-button" onClick={handleYesClick}>Yes</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="scene question-scene">
            <div className="bubble-text">
              {questions[questionIndex]}
            </div>
            <div className="button-container">
              <button className="yes-button" onClick={handleYesClick}>YES</button>
              <button className="yes-button" onClick={handleYesClick}>YES</button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="scene conversation-scene">
            <div className="bubble-text">
              Okay but let me ask you first...
            </div>
            <div className="tap-to-continue" onClick={nextScene}>
              Tap to continue
            </div>
          </div>
        );

      case 7:
        return (
          <div className="scene conversation-scene">
            <div className="bubble-text">
              What would you think of a gift?
            </div>
            <div className="tap-to-continue" onClick={nextScene}>
              Tap to continue
            </div>
          </div>
        );

      case 8:
        return (
          <div className="scene conversation-scene">
            <div className="bubble-text">
              Guess what it is!
            </div>
            <div className="tap-to-continue" onClick={nextScene}>
              Tap to continue
            </div>
          </div>
        );

      case 9:
        return (
          <div className="scene conversation-scene">
            <div className="bubble-text">
              Are you ready?
            </div>
            <div className="tap-to-continue" onClick={nextScene}>
              Tap to continue
            </div>
          </div>
        );

      case 10:
        return (
          <div className="scene conversation-scene">
            <div className="bubble-text">
              Open it now!
            </div>
            <div className="tap-to-continue" onClick={nextScene}>
              Tap to continue
            </div>
          </div>
        );

      case 11:
        return (
          <div className="scene letter-scene">
            <div className="bubble-text">
              Still there! Find the letter that Jackie wrote for you 💌
            </div>
            <div className="letter-container">
              {!envelopeOpened ? (
                <div className="envelope" onClick={handleEnvelopeClick}>
                  <div className="envelope-back"></div>
                  <div className="envelope-front"></div>
                  <div className="envelope-flap"></div>
                  <div className="heart-seal">💖</div>
                </div>
              ) : (
                <div className="letter opened">
                  <div className="letter-header">Dear Rey,</div>
                  <div className="letter-content">
                    Happy 20th Birthday! 🎉<br/>
                    Hope your special day is filled with<br/>
                    joy, laughter, and all your favorite things!<br/>
                    <br/>
                    With love,<br/>
                    Jackie 💕
                  </div>
                </div>
              )}
            </div>
            <div className="button-container">
              <button className="done-button" onClick={nextScene}>Done</button>
              <button className="not-yet-button" onClick={() => {}}>Not yet</button>
            </div>
          </div>
        );

      case 12:
        return (
          <div className="scene final-scene">
            <div className="bubble-text final-message">
              GREAT! 🎉
            </div>
            <div className="bubble-text">
              Then I'll go, byeee! Enjoy your day and have fun.<br/>
              Happy Birthday! 🎂✨
            </div>
            <div className="ice-bear final-bear">
              <div className="bear-body"></div>
              <div className="bear-head"></div>
              <div className="bear-ear left"></div>
              <div className="bear-ear right"></div>
              <div className="bear-eye left"></div>
              <div className="bear-eye right"></div>
              <div className="bear-nose"></div>
              <div className="bear-mouth happy"></div>
              <div className="bear-arm left"></div>
              <div className="bear-arm right"></div>
              <div className="bear-leg left"></div>
              <div className="bear-leg right"></div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="birthday-app">
      {renderScene()}
    </div>
  );
};

export default Index;
