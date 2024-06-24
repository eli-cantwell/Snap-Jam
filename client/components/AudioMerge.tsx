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

  const startTime = ctx.currentTime
  const duration = 60 // a minute //audio file.length?

  for (const source of bufferSources) {
    source.start(startTime)
    source.stop(startTime + duration)
  }
}
