import React from 'react';
import { motion } from 'framer-motion';
import logoUrl from './logo.svg';

interface LogoProps {
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <motion.div
                className="relative group h-8 w-8 flex items-center justify-center"
                animate={{
                    y: [0, -6, 0],
                    rotate: [0, 2, -2, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* User Provided SVG Logo via External File */}
                <img
                    src={logoUrl}
                    alt="BRIDGE Logo"
                    className="h-full w-full object-contain relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]"
                />

                {/* Animated Glow Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-bridge-gold/20 blur-xl rounded-full pointer-events-none opacity-0 group-hover:opacity-100"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            <span className="text-sm tracking-[0.2em] font-bold text-white/80 group-hover:text-white transition-colors">
                BRIDGE
            </span>
        </div>
    );
};
