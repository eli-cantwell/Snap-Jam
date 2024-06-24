import { createContext, useContext, ReactNode }  from 'react'



const PlayerContext = createContext(createPlayer())

export interface Player {
  pause(): void,
  load(url: string[]): Promise<void>
  play(): void
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
let isPlaying = false
function init() {
  if(ctx != undefined){
    return
  }
  ctx = new AudioContext
  gain = ctx.createGain()
  gain.connect(ctx.destination)
}
function pause() { //call this stop?
  init()
  const now = ctx.currentTime
  for(const source of sources ){
    source.stop(now)
  }
  isPlaying = false
}
function play() {
  init()
  
  const now = ctx.currentTime
  for(const source of sources ){
    source.start(now)
  }
isPlaying = true
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
return {pause, play, load}
}


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