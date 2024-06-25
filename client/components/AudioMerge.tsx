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
export async function whatever(urls: string[]) {
  const ctx = new AudioContext()
  const buffers = await Promise.all(
    urls.map((url) => createAudioSourceNode(ctx, url)),
  )
  const gain = ctx.createGain()
  const bufferSources = buffers.map((buffer) => {
    const node = ctx.createBufferSource()
    node.buffer = buffer
    node.connect(gain)
    return node
  })

  gain.connect(ctx.destination)
  const duration = Math.max(...buffers.map(_ => _.duration)) //"don't name your things this" Gerard
  // const duration = Math.min(...buffers.map(_ => _.duration)) would play to the min song length

  const startTime = ctx.currentTime
  

  for (const source of bufferSources) {
    source.start(startTime)
    source.stop(startTime + duration)
  }
}
