'use client';

import TypedText from "@/components/TypedText";
import VideoComponent from "@/components/VideoComponent";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [loaded, setLoaded] = useState(false);

  const texts = [
    "Arena Fla.",
    "Acompanhe o projeto do estádio do Flamengo."
  ];

  return (
    <main>
      <div className="flex flex-col items-center justify-between">
        {!loaded ? (
          <>
            <div className="flex flex-col items-center justify-center h-screen">
              <div className="mb-64">
                <Image src="/favicon.png" alt="Logo" width={200} height={200} />
              </div>

              <div className="text-center mb-64">
                <h1 className="text-3xl font-bold">
                  <audio src="/sounds/typing.mp3" autoPlay />
                  <TypedText texts={texts} deletingSpeed={30} typingSpeed={80} pauseDuration={1500} nextAction={() => {
                    setLoaded(true);
                  }} />
                </h1>
              </div>
            </div>
          </>
        ) : (
          <div className="background-container">
            <div >
              <VideoComponent></VideoComponent>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
