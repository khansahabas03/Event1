// Audio controller: optional user-provided licensed track with the original ambient fallback.
let weddingAudioContext = null;
let weddingAudioMaster = null;
let weddingAudioNodes = [];
let weddingAudioLfo = null;
let weddingMusicPlaying = false;
let weddingMelodyTimer = null;

function playWeddingNote(frequency, duration = 1.8, volume = 0.05) {
  if (!weddingAudioContext || !weddingAudioMaster) return;
  const now = weddingAudioContext.currentTime;
  const osc = weddingAudioContext.createOscillator();
  const gain = weddingAudioContext.createGain();
  const filter = weddingAudioContext.createBiquadFilter();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(frequency, now);
  filter.type = "lowpass";
  filter.frequency.value = 1800;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(weddingAudioMaster);
  osc.start(now);
  osc.stop(now + duration + 0.05);
  weddingAudioNodes.push(osc);
}

function startSynthWeddingMusic() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return false;
    if (!weddingAudioContext) {
      weddingAudioContext = new AudioContextClass();
      weddingAudioMaster = weddingAudioContext.createGain();
      weddingAudioMaster.gain.value = 0.0001;
      weddingAudioMaster.connect(weddingAudioContext.destination);

      // Soft drone inspired by Indian romantic instrumental arrangements.
      [130.81, 196.00, 261.63].forEach((frequency, index) => {
        const osc = weddingAudioContext.createOscillator();
        const voiceGain = weddingAudioContext.createGain();
        osc.type = index === 0 ? "sine" : "triangle";
        osc.frequency.value = frequency;
        voiceGain.gain.value = index === 0 ? 0.10 : 0.035;
        osc.connect(voiceGain);
        voiceGain.connect(weddingAudioMaster);
        osc.start();
        weddingAudioNodes.push(osc);
      });
      weddingAudioMaster.gain.setValueAtTime(0.0001, weddingAudioContext.currentTime);
    }
    weddingAudioContext.resume();
    weddingAudioMaster.gain.cancelScheduledValues(weddingAudioContext.currentTime);
    weddingAudioMaster.gain.setTargetAtTime(0.55, weddingAudioContext.currentTime, 1.1);

    if (!weddingMusicPlaying) {
      // Original short melodic phrase; no commercial Bollywood recording is bundled.
      const melody = [
        [392.00, 0.00], [440.00, 0.55], [493.88, 1.10], [440.00, 1.75],
        [392.00, 2.35], [329.63, 3.05], [349.23, 3.70], [392.00, 4.35],
        [440.00, 5.10], [392.00, 5.80], [349.23, 6.50], [329.63, 7.25],
        [293.66, 8.00], [329.63, 8.70], [392.00, 9.40], [349.23, 10.10]
      ];
      const playPhrase = () => {
        if (!weddingMusicPlaying) return;
        melody.forEach(([frequency, offset], index) => {
          window.setTimeout(() => {
            if (weddingMusicPlaying) playWeddingNote(frequency, index % 4 === 0 ? 1.25 : 0.9, 0.055);
          }, offset * 1000);
        });
      };
      weddingMusicPlaying = true;
      playPhrase();
      weddingMelodyTimer = window.setInterval(playPhrase, 11200);
    }
    weddingMusicPlaying = true;
    window.dispatchEvent(new CustomEvent("wedding-music-state", { detail: true }));
    return true;
  } catch (error) {
    console.warn("Ambient audio is unavailable in this browser.", error);
    return false;
  }
}

// Optional licensed track: place your legally licensed file at public/music/heartbeats.mp3.
// If the file is not present or cannot play, the original generated ambient soundtrack is used.
let licensedWeddingAudio = null;
function startWeddingMusic() {
  try {
    if (!licensedWeddingAudio) {
      licensedWeddingAudio = new Audio("/music/heartbeats.mp3");
      licensedWeddingAudio.loop = true;
      licensedWeddingAudio.volume = 0.42;
      licensedWeddingAudio.preload = "none";
    }
    const playPromise = licensedWeddingAudio.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.then(() => {
        if (weddingAudioContext && weddingMusicPlaying) {
          weddingAudioMaster.gain.setTargetAtTime(0.0001, weddingAudioContext.currentTime, 0.15);
        }
        if (weddingMelodyTimer) { window.clearInterval(weddingMelodyTimer); weddingMelodyTimer = null; }
        weddingMusicPlaying = true;
        window.dispatchEvent(new CustomEvent("wedding-music-state", { detail: true }));
      }).catch(() => {
        licensedWeddingAudio = null;
        startSynthWeddingMusic();
      });
    }
    return true;
  } catch (error) {
    licensedWeddingAudio = null;
    return startSynthWeddingMusic();
  }
}

function pauseWeddingMusic() {
  if (weddingMelodyTimer) { window.clearInterval(weddingMelodyTimer); weddingMelodyTimer = null; }
  if (licensedWeddingAudio) licensedWeddingAudio.pause();
  if (weddingAudioContext && weddingAudioMaster) {
    weddingAudioMaster.gain.cancelScheduledValues(weddingAudioContext.currentTime);
    weddingAudioMaster.gain.setTargetAtTime(0.0001, weddingAudioContext.currentTime, 0.25);
  }
  if (weddingMusicPlaying) {
    weddingMusicPlaying = false;
    window.dispatchEvent(new CustomEvent("wedding-music-state", { detail: false }));
  }
}

export { startWeddingMusic, pauseWeddingMusic, startSynthWeddingMusic };
export const isWeddingMusicPlaying = () => weddingMusicPlaying;
