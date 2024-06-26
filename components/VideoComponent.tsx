'use client';

import FadeInSection from "./FadeInSection";

const VideoComponent = () => (
    <div className="flex flex-col items-center justify-center h-screen">
        <FadeInSection duration={1000}>
            <div className="iframe-container">
                <iframe src="https://www.youtube.com/embed/u7C84GH-e8E?si=Q7du74qKMar5ep2V&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded mt-80">
                    Doar
                </button>
            </div>
        </FadeInSection>
    </div>
);

export default VideoComponent;