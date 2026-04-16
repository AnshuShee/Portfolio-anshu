import React from 'react';
import { Sparkles, Command } from 'lucide-react';

const Marquee = () => {
    // Array to repeat the text enough times to fill the screen
    const items = [...Array(10)];

    return (
        <div className="relative w-full overflow-hidden bg-white py-3 flex items-center z-20">
            {/* The wrapper w-max allows the contents to naturally stretch as wide as they need to be to not overlap. */}
            <div className="flex w-max animate-marquee">
                {/* 20 repetitions provide plenty of width for any screen size */}
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="flex shrink-0 items-center">
                        <span className="text-black text-[1.4rem] md:text-3xl font-black uppercase tracking-[0.1em] font-['Anton'] whitespace-nowrap pl-6 md:pl-10 leading-none pb-1 mt-1">
                            FULL STACK DEV AT WORK
                        </span>
                        <Command className="w-6 h-6 md:w-8 md:h-8 mx-8 md:mx-12 text-black/80" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
