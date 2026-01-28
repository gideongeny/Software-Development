import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className="custom-cursor hidden md:block"
                style={{
                    transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isHovering ? 1.5 : 1})`,
                    backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
                }}
            />
            <div
                className="custom-cursor-dot hidden md:block"
                style={{
                    transform: `translate(${position.x - 4}px, ${position.y - 4}px)`
                }}
            />
        </>
    );
};

export default CustomCursor;
