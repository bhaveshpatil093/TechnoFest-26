import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio only once
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/stranger_things.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4; // Soft background volume
    }

    const handleInteraction = () => {
      // Only trigger on first interaction
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
          // Remove listeners once activated
          window.removeEventListener('click', handleInteraction);
          window.removeEventListener('keydown', handleInteraction);
        }).catch(err => {
          console.log("Audio play failed:", err);
        });
      }
    };

    if (!hasInteracted) {
      window.addEventListener('click', handleInteraction);
      window.addEventListener('keydown', handleInteraction);
    }

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [hasInteracted]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    }
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the global click listener
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Audio resume failed:", err);
      });
    }
    
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-center gap-4">
      <button
        onClick={togglePlay}
        className="w-12 h-12 bg-surface-low/50 backdrop-blur-md border border-white/10 text-white rounded-full flex items-center justify-center hover:bg-surface-high/50 hover:border-cyan/50 transition-all duration-300 group shadow-lg"
        aria-label="Toggle Theme Music"
      >
        {isPlaying ? (
          <Volume2 size={20} className="text-cyan drop-shadow-[0_0_8px_rgba(0,245,255,0.6)] group-hover:scale-110 transition-transform" />
        ) : (
          <VolumeX size={20} className="opacity-50 group-hover:scale-110 transition-transform" />
        )}
      </button>

      <AnimatePresence>
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="bg-surface-low/80 backdrop-blur-md border border-cyan/30 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-[0_0_20px_rgba(0,245,255,0.15)] pointer-events-none"
          >
            <Music size={14} className="text-cyan animate-bounce" />
            <span className="text-[10px] font-mono text-foreground tracking-widest flex flex-col uppercase">
              <span className="text-cyan font-bold leading-none mb-0.5">Click anywhere</span>
              <span className="text-[8px] text-foreground/50 leading-none">to turn on audio</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
