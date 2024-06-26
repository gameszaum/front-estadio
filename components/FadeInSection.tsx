import { useEffect, useRef, useState } from 'react';
import { ReactNode } from 'react';

const FadeInSection = ({ children, duration }: { children: ReactNode, duration: Number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={domRef}
            className={`transition-opacity duration-${duration} ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
