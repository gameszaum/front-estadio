// src/components/TypedText.js
import { useEffect, useState } from 'react';

type TypedTextProps = {
    texts: string[];
    typingSpeed?: number;
    pauseDuration?: number;
    deletingSpeed?: number;
    nextAction: () => void;
};

const TypedText = ({ texts, typingSpeed = 100, pauseDuration = 2000, deletingSpeed = 50, nextAction }: TypedTextProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopIndex, setLoopIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (!texts || !texts.length) return;

        const handleTyping = () => {
            if (!isDeleting && charIndex < texts[loopIndex].length) {
                setDisplayedText((prev) => prev + texts[loopIndex][charIndex]);
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                setDisplayedText((prev) => prev.slice(0, -1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === texts[loopIndex].length) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && charIndex === 0) {
                if (loopIndex + 1 === texts.length) {
                    nextAction();
                } else {
                    setIsDeleting(false);
                    setLoopIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }
            }
        };

        const timeoutId = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeoutId);
    }, [charIndex, isDeleting, loopIndex, texts, typingSpeed, deletingSpeed, pauseDuration, nextAction]);


    return (
        <span className="typed-text">{displayedText}</span>
    );
};

export default TypedText;
