'use client'
import { useState } from 'react';
import Head from 'next/head';
import confetti from 'canvas-confetti';

export default function Home() {

    const [clicked, setClicked] = useState(false);

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleClick = () => {
    setClicked(true);
    const audio = new Audio('/track1.mp3');
    audio.play();
  };

  return (
   <>            
          <section>
              {/* <div className='avatar-container 0'>
                <img src="/avatar.png" alt="icon" className='avatar' />              
              </div> */}

        <title>Birthday Surprise</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </section>
            {/* ✅ Show avatar only after clicking */}
      {clicked && (
        <div className='avatar-container py-70'>
          <img src="/image1.jpg" alt="icon" className='avatar ' />
        </div>
      )}
      {!clicked ? (
        <div className="start-screen" onClick={handleClick}>
          <h1 className="glow-text">Click me if you dare...</h1>
        </div>
      ) : (
        <div className="birthday-card">
          <h1 className="animate__animated animate__bounceIn">
            🎉 Happy Birthday, Lutho Duka! 🎉
          </h1>
          <p>"Happy Birthday!
Today is all about you — your laughter, your light, and the joy you bring to everyone around you.
May your year ahead be filled with magic, surprise hugs, silly moments, and dreams coming true.
You're not just another year older — you're another year more amazing.

💖 Keep shining. Keep smiling. And never forget how loved you are."</p>
          <button onClick={triggerConfetti}>Start Confetti</button>
        </div>
      )}
      <style jsx>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
        }

        .start-screen {
          background-color: #000;
          color: red;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .glow-text {
          font-size: 2.5rem;
          text-shadow: 0 0 10px red, 0 0 20px red;
          animation: flicker 1.5s infinite;
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .birthday-card {
          background: linear-gradient(135deg, #ffecd2, #fcb69f);
          height: 100vh;
          text-align: center;
          padding-top: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .birthday-card h1 {
          font-size: 3rem;
          color: #ff4081;
          margin-bottom: 1rem;
        }

        .birthday-card p {
          font-size: 1.4rem;
          margin-bottom: 2rem;
          color: #444;
        }

        button {
          padding: 1rem 2rem;
          background: #ff4081;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: 0.3s ease;
        }

        button:hover {
          background: #e91e63;
        }

          .avatar-container {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    animation: float 3s ease-in-out infinite;
  }

  
  @keyframes float {
    0%, 100% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, -20px);
    }
  }
      `}</style>
   </>
  );
}
