import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause, Sparkles } from 'lucide-react';

export function AudioMantraPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedChant, setSelectedChant] = useState<'bell' | 'mariamman' | 'perumal'>('bell');
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Synthesize tranquil sacred temple bells and resonant harmonic drone using Web Audio API
  const playSacredChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : volume * 0.4, now);
      masterGain.connect(ctx.destination);

      // Frequency palette based on selected chant mode
      let baseFreq = 261.63; // C4
      let chordNotes = [261.63, 329.63, 392.00, 523.25]; // C Major peaceful

      if (selectedChant === 'mariamman') {
        // Warm devotional Lalitha raga notes
        chordNotes = [220.00, 277.18, 329.63, 440.00, 554.37];
      } else if (selectedChant === 'perumal') {
        // Deep majestic Vishnu Narayana tanpura notes
        chordNotes = [196.00, 246.94, 293.66, 392.00, 493.88];
      }

      chordNotes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.15);

        // Gentle bell envelope
        noteGain.gain.setValueAtTime(0.001, now + idx * 0.15);
        noteGain.gain.exponentialRampToValueAtTime(0.3 / (idx + 1), now + idx * 0.15 + 0.08);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.15 + 3.2);

        osc.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(now + idx * 0.15);
        osc.stop(now + idx * 0.15 + 3.4);
      });
    } catch (e) {
      console.warn('Audio synthesis initialized on user interaction', e);
    }
  };

  const togglePlayback = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      setIsPlaying(true);
      playSacredChime();
      timerRef.current = window.setInterval(() => {
        playSacredChime();
      }, 4200);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-40">
      <div className="bg-[#2D060B]/90 backdrop-blur-md border border-[#D4AF37]/50 rounded-2xl p-2.5 shadow-2xl text-white flex items-center gap-3">
        
        {/* Play / Pause Button */}
        <button
          onClick={togglePlayback}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
            isPlaying
              ? 'bg-[#D4AF37] text-[#3D0A0F] shadow-md animate-pulse'
              : 'bg-[#6B111A] text-amber-200 hover:bg-[#8A1622]'
          }`}
          title={isPlaying ? 'Pause Temple Chimes' : 'Play Sacred Temple Chimes'}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>

        {/* Chant Info & Selector */}
        <div className="hidden sm:block">
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider">
            <Sparkles className="w-3 h-3" />
            <span>Sacred Bell & Tanpura Ambiance</span>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <button
              onClick={() => {
                setSelectedChant('mariamman');
                if (isPlaying) playSacredChime();
              }}
              className={`text-[11px] px-2 py-0.5 rounded cursor-pointer transition ${
                selectedChant === 'mariamman'
                  ? 'bg-amber-400/20 text-amber-200 font-bold border border-amber-400/40'
                  : 'text-amber-200/60 hover:text-white'
              }`}
            >
              Mariamman
            </button>
            <button
              onClick={() => {
                setSelectedChant('perumal');
                if (isPlaying) playSacredChime();
              }}
              className={`text-[11px] px-2 py-0.5 rounded cursor-pointer transition ${
                selectedChant === 'perumal'
                  ? 'bg-amber-400/20 text-amber-200 font-bold border border-amber-400/40'
                  : 'text-amber-200/60 hover:text-white'
              }`}
            >
              Perumal
            </button>
            <button
              onClick={() => {
                setSelectedChant('bell');
                if (isPlaying) playSacredChime();
              }}
              className={`text-[11px] px-2 py-0.5 rounded cursor-pointer transition ${
                selectedChant === 'bell'
                  ? 'bg-amber-400/20 text-amber-200 font-bold border border-amber-400/40'
                  : 'text-amber-200/60 hover:text-white'
              }`}
            >
              Deepam Chime
            </button>
          </div>
        </div>

        {/* Volume Mute toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="text-amber-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition cursor-pointer"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

      </div>
    </div>
  );
}
