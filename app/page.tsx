'use client';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import Image from 'next/image';

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
      <title>Birthday Surprise</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />

      {/* 🎂 Avatar shown after clicking */}
      {clicked && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Image
            src="/image1.jpg"
            alt="icon"
            width={100}
            height={100}
            className="rounded-full animate-float"
          />
        </div>
      )}

      {!clicked ? (
        <div
          className="start-screen min-h-screen bg-black text-red-600 flex items-center justify-center text-center px-4"
          onClick={handleClick}
        >
          <h1 className="glow-text text-3xl sm:text-4xl md:text-5xl">
            Click me if you dare...
          </h1>
        </div>
      ) : (
        <div className="birthday-card min-h-screen px-6 py-12 flex flex-col items-center justify-center text-center">
          <h1 className="animate__animated animate__bounceIn text-2xl sm:text-3xl md:text-4xl text-pink-500 mb-4">
            🎉 Happy Birthday, Lutho Duka! 🎉
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mb-6">
            &quot;Happy Birthday! Today is all about you — your light, and the joy
            you bring to everyone around you. May your year ahead be filled with
            magic, surprise hugs, silly moments, and dreams coming true.
            You&apos;re not just another year older — you&apos;re another year more
            amazing. 💖 Keep shining. Keep smiling. And never forget how loved you are.&quot;
          </p>
          <button
            onClick={triggerConfetti}
            className="bg-pink-500 text-white text-base sm:text-lg px-6 py-3 rounded-xl hover:bg-pink-600 transition"
          >
            Start Confetti
          </button>
        </div>
      )}

      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 10px red, 0 0 20px red;
          animation: flicker 1.5s infinite;
        }

        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .birthday-card {
          background: linear-gradient(135deg, #ffecd2, #fcb69f);
        }
      `}</style>
    </>
  );
}
