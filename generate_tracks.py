import wave
import math
import struct
import random

SAMPLE_RATE = 22050  # 22.05 kHz is compact and sounds great for lo-fi / synthwave

def generate_track_synthwave(filename, duration=35.0):
    bpm = 116
    beat_sec = 60.0 / bpm
    total_samples = int(SAMPLE_RATE * duration)
    
    # Scale: D minor / F major: D3, F3, G3, A3, C4, D4, E4, F4
    chord_prog = [
        # Dm (D3, F3, A3)
        [146.83, 174.61, 220.00],
        # Bb (Bb2, D3, F3)
        [116.54, 146.83, 174.61],
        # C (C3, E3, G3)
        [130.81, 164.81, 196.00],
        # Am (A2, C3, E3)
        [110.00, 130.81, 164.81]
    ]
    
    arp_notes = [293.66, 349.23, 440.00, 523.25, 587.33, 659.25, 698.46, 880.00]
    
    data = bytearray()
    
    for i in range(total_samples):
        t = i / SAMPLE_RATE
        beat = t / beat_sec
        bar = int(beat / 4)
        chord_idx = bar % len(chord_prog)
        current_chord = chord_prog[chord_idx]
        
        # 1. Synth Pad / Chords with chorus/detune
        pad_sample = 0.0
        for f in current_chord:
            pad_sample += math.sin(2 * math.pi * f * t) * 0.4
            pad_sample += math.sin(2 * math.pi * (f * 1.004) * t) * 0.3
            pad_sample += math.sin(2 * math.pi * (f * 0.996) * t) * 0.3
        pad_sample = math.tanh(pad_sample * 0.5) * 0.35
        
        # 2. Rolling Synthwave 16th-note Bass
        sub_beat = (beat * 4) % 1.0
        bass_env = math.exp(-sub_beat * 5.0)
        root_f = current_chord[0] / 2.0
        bass_sample = math.sin(2 * math.pi * root_f * t) + 0.3 * math.sin(4 * math.pi * root_f * t)
        bass_sample = math.tanh(bass_sample * 2.0) * bass_env * 0.45
        
        # 3. Arpeggiator (16th notes)
        arp_step = int(beat * 4) % 8
        arp_f = arp_notes[(arp_step * 3) % len(arp_notes)]
        arp_env = math.exp(-sub_beat * 8.0)
        arp_sample = (math.sin(2 * math.pi * arp_f * t) + 0.2 * math.sin(6 * math.pi * arp_f * t)) * arp_env * 0.22
        
        # 4. Drums: Kick on beats 0, 1, 2, 3; Snare on 1 & 3
        beat_in_bar = beat % 4.0
        beat_frac = beat % 1.0
        
        # Kick drum
        kick_env = math.exp(-beat_frac * 22.0)
        kick_freq = 130.0 * math.exp(-beat_frac * 30.0) + 40.0
        kick_sample = math.sin(2 * math.pi * kick_freq * beat_frac) * kick_env * 0.6
        
        # Snare / Clap on beat 1.0 and 3.0
        snare_sample = 0.0
        snare_t1 = beat % 2.0
        if 0.98 <= snare_t1 <= 1.5:
            s_rel = snare_t1 - 1.0
            if s_rel >= 0:
                s_env = math.exp(-s_rel * 14.0)
                noise = (random.random() * 2.0 - 1.0)
                tone = math.sin(2 * math.pi * 180.0 * s_rel)
                snare_sample = (noise * 0.7 + tone * 0.3) * s_env * 0.4
        
        # Hi-hat (8th notes)
        hat_frac = (beat * 2) % 1.0
        hat_env = math.exp(-hat_frac * 40.0)
        hat_sample = (random.random() * 2.0 - 1.0) * hat_env * 0.12
        
        # Sum mix
        mix = pad_sample + bass_sample + arp_sample + kick_sample + snare_sample + hat_sample
        # Master limiter / soft clip
        mix = math.tanh(mix * 0.8)
        
        # Fade out at the end
        if t > duration - 2.0:
            fade = (duration - t) / 2.0
            mix *= max(0.0, fade)
            
        sample_int = int(mix * 32767.0)
        sample_int = max(-32767, min(32767, sample_int))
        data.extend(struct.pack('<h', sample_int))
        
    with wave.open(filename, 'w') as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(SAMPLE_RATE)
        wf.writeframes(data)
    print(f"Generated {filename}")

def generate_track_lofi(filename, duration=35.0):
    bpm = 76
    beat_sec = 60.0 / bpm
    total_samples = int(SAMPLE_RATE * duration)
    
    # Jazzy chords (Maj7, Min7, 9th chords): Fmaj7, Em7, Dm7, Cmaj7
    chords = [
        [174.61, 220.00, 261.63, 329.63], # Fmaj7
        [164.81, 196.00, 246.94, 293.66], # Em7
        [146.83, 174.61, 220.00, 261.63], # Dm7
        [130.81, 164.81, 196.00, 246.94]  # Cmaj7
    ]
    
    data = bytearray()
    
    for i in range(total_samples):
        t = i / SAMPLE_RATE
        beat = t / beat_sec
        bar = int(beat / 4)
        chord_idx = bar % len(chords)
        current_chord = chords[chord_idx]
        
        # Vinyl crackle
        crackle = 0.0
        if random.random() < 0.0015:
            crackle = (random.random() * 2 - 1) * 0.25
        
        # Soft Rhodes / EP electric piano with vibrato
        vibrato = math.sin(2 * math.pi * 4.5 * t) * 1.5
        piano_sample = 0.0
        beat_in_bar = beat % 4.0
        # Strum chord on beat 0 and 2.5
        chord_strike = beat_in_bar % 2.0
        piano_env = math.exp(-chord_strike * 1.5)
        for f in current_chord:
            piano_sample += math.sin(2 * math.pi * (f + vibrato) * t) * 0.3
            piano_sample += math.sin(4 * math.pi * (f + vibrato) * t) * 0.08
        piano_sample = piano_sample * piano_env * 0.35
        
        # Mellow acoustic/sub bass
        sub_frac = beat % 2.0
        bass_env = math.exp(-sub_frac * 2.0)
        bass_f = current_chord[0] / 2.0
        bass_sample = math.sin(2 * math.pi * bass_f * t) * bass_env * 0.4
        
        # Dusty Lo-fi Hip Hop Beat (Kick on 0 and 2.2, Snare on 1 and 3)
        kick_sample = 0.0
        k_time = beat % 2.0
        if k_time < 0.3:
            k_env = math.exp(-k_time * 18.0)
            kick_sample = math.sin(2 * math.pi * (80.0 * math.exp(-k_time * 20.0) + 38.0) * k_time) * k_env * 0.5
            
        snare_sample = 0.0
        s_time = (beat + 1.0) % 2.0
        if s_time < 0.4:
            s_env = math.exp(-s_time * 10.0)
            snare_sample = (random.random() * 2.0 - 1.0) * s_env * 0.22
            
        hat_time = (beat * 2.0) % 1.0
        hat_sample = (random.random() * 2.0 - 1.0) * math.exp(-hat_time * 30.0) * 0.07
        
        mix = piano_sample + bass_sample + kick_sample + snare_sample + hat_sample + crackle
        mix = math.tanh(mix * 0.85)
        
        if t > duration - 2.0:
            fade = (duration - t) / 2.0
            mix *= max(0.0, fade)
            
        sample_int = int(mix * 32767.0)
        sample_int = max(-32767, min(32767, sample_int))
        data.extend(struct.pack('<h', sample_int))
        
    with wave.open(filename, 'w') as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(SAMPLE_RATE)
        wf.writeframes(data)
    print(f"Generated {filename}")

def generate_track_ambient(filename, duration=35.0):
    total_samples = int(SAMPLE_RATE * duration)
    # Ethereal celestial drone in Eb lydian
    freqs = [155.56, 233.08, 311.13, 392.00, 466.16, 622.25]
    data = bytearray()
    
    for i in range(total_samples):
        t = i / SAMPLE_RATE
        
        sample = 0.0
        for idx, f in enumerate(freqs):
            # Slow LFO modulation for each frequency
            lfo = 0.5 + 0.5 * math.sin(2 * math.pi * (0.15 + idx * 0.04) * t)
            detune = math.sin(2 * math.pi * 0.05 * t + idx) * 0.5
            sample += math.sin(2 * math.pi * (f + detune) * t) * lfo * 0.2
            
        # Shimmer harmonics
        shimmer = math.sin(2 * math.pi * (freqs[-1] * 2.0) * t) * (0.5 + 0.5 * math.sin(2 * math.pi * 0.3 * t)) * 0.08
        
        # Deep sub drone
        sub = math.sin(2 * math.pi * 77.78 * t) * 0.35
        
        mix = math.tanh((sample + shimmer + sub) * 0.7)
        if t > duration - 2.0:
            fade = (duration - t) / 2.0
            mix *= max(0.0, fade)
            
        sample_int = int(mix * 32767.0)
        sample_int = max(-32767, min(32767, sample_int))
        data.extend(struct.pack('<h', sample_int))
        
    with wave.open(filename, 'w') as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(SAMPLE_RATE)
        wf.writeframes(data)
    print(f"Generated {filename}")

if __name__ == '__main__':
    generate_track_synthwave('assets/audio/neon_horizon.wav')
    generate_track_lofi('assets/audio/midnight_session.wav')
    generate_track_ambient('assets/audio/celestial_mirage.wav')
