import React from 'react';
import clsx from 'clsx';

interface ThreeDButtonProps {
    label: string;
    icon: React.ReactNode;
}

export const ThreeDButton: React.FC<ThreeDButtonProps> = ({ label, icon }) => {
    return (
        <div className="group flex flex-col items-center gap-2 ">
            <div
                className={clsx(
                    'relative flex items-center justify-center p-4 rounded-2xl',
                    'bg-[#111] shadow-[0_6px_20px_rgba(255,0,150,0.15)]',
                    'transition-transform duration-300 ease-out hover:scale-105',
                    'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-tr before:from-pink-500 before:to-yellow-400 before:opacity-10 before:blur-lg'
                )}
            >
                <div className="relative z-10">{icon}</div>
            </div>
            <span className="text-sm font-medium text-zinc-300">{label}</span>
        </div>
    );
};
