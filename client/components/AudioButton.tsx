import { useState } from "react";
import { Audio } from "../../models/Audio";
import { usePlayer } from "../player";

interface Props {
    audio: Audio
}

export default function AudioButton(props: Props) {
    const [playToggle, setPlayToggle] = useState(false)

    const player = usePlayer()
    console.log(playToggle)
    return (
        <>
            <div key={props.audio.id} className='pb-2 placeholder-blue-200'>
              <p className="text-gray-800">{`/api/uploads/${props.audio.filepath}`}</p>

              {!player.isPlaying() ? <button onClick={
                async () => {await player.load([`/api/uploads/${props.audio.filepath}`]); player.play(); setPlayToggle(true)}}
                 className='w-24 h-12 rounded-md shadow-md hover:scale-105 bg-slate-100'>play</button> : <button className='w-24 h-12 rounded-md shadow-md hover:scale-105 bg-slate-100' onClick={() => {player.pause(); setPlayToggle(false)}}>Stop</button>}
              
            </div>
        
        </>
    )

}