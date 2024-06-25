import { createContext, useContext, ReactNode }  from 'react'



const PlayerContext = createContext(createPlayer())

// const PlayerContext = createContext<Player | undefined>(undefined);

// export function usePlayer(): Player {
//   const player = useContext(PlayerContext);
//   if (!player) {
//     throw new Error('usePlayer must be used within a PlayerProvider');
//   }
//   return player;
// }

// export interface PlayerProviderProps {
//   children: ReactNode;
//   player: Player;
// }

// export function PlayerProvider({ children, player }: PlayerProviderProps) {
//   return <PlayerContext.Provider value={player}>{children}</PlayerContext.Provider>;
// }

export interface Player {
  pause(): void,
  load(url: string[]): Promise<void>
  play(): void
  isPlaying(): boolean;
  setVolume(volume: number): void; // New method to set volume
  getVolume(): number; // New method to get current volume

}

async function createAudioSourceNode(
  audioContext: AudioContext,
  audioUrl: string,
) {
  const response = await fetch(audioUrl)
  const arrayBuffer = await response.arrayBuffer()
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
  // const sourceNode = audioContext.createBufferSource()
  // sourceNode.buffer = audioBuffer

  return audioBuffer
}




export function createPlayer ():Player {
let sources = [] as AudioBufferSourceNode[]
let ctx: AudioContext
let gain: GainNode
let playState = false
let currentVolume = 0.5; // Initial volume set to 50%
function init() {
  if(ctx != undefined){
    return
  }
  ctx = new AudioContext
  gain = ctx.createGain()
  gain.connect(ctx.destination)
  gain.gain.value = currentVolume; // Set initial volume

}
function pause() { //call this stop?
  init()
  const now = ctx.currentTime
  for(const source of sources ){
    source.stop(now)
  }
  playState = false
}
function play() {
  init()
  
  const now = ctx.currentTime
  for(const source of sources ){
    source.start(now)
  }
playState = true
}
async function load (urls: string[]) {
  init()
  const buffers = await Promise.all(
    urls.map((url) => createAudioSourceNode(ctx, url)),
  )
  for(const source of sources){
    source.disconnect()
  }
    sources = buffers.map((buffer) => {
    const node = ctx.createBufferSource()
    node.buffer = buffer
    node.connect(gain)
    return node
  })
}
function isPlaying() {
  return playState
}

function setVolume(volume: number) {
  if (gain) {
    gain.gain.value = volume;
    currentVolume = volume;
  }
}

function getVolume() {
  return currentVolume;
}


 return {pause, play, load, isPlaying, setVolume, getVolume}
}


// async function createAudioSourceNode(audioContext: AudioContext, audioUrl: string) {
//   const response = await fetch(audioUrl);
//   const arrayBuffer = await response.arrayBuffer();
//   const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//   return audioBuffer;
// }

//Hook
export function usePlayer ():Player {
  return useContext(PlayerContext)!
}

export interface PlayerProviderProps {
  children:ReactNode
  player:Player
}



export function PlayerProvider({children, player}:PlayerProviderProps) {
return <PlayerContext.Provider value={player}>
{children}
</PlayerContext.Provider >
}