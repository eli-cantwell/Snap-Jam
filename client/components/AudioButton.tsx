import { useState } from "react";
import { Audio } from "../../models/Audio";
import { usePlayer } from "../player";

interface Props {
    audio: Audio
}

export default function AudioButton(props: Props) {
    const [playToggle, setPlayToggle] = useState(false)

    const player = usePlayer()

    return (
        <>
            <div key={props.audio.id} className='pb-2 placeholder-blue-200'>
              <p className="text-gray-800 text-lg font-medium pb-2">{`${props.audio.created_by}'s track:`}</p>

              {!playToggle ? <button onClick={
                async () => {await player.load([`/api/uploads/${props.audio.filepath}`]); player.play(); setPlayToggle(true)}}
                 className='w-24 h-12 rounded-md shadow-md hover:scale-105 bg-slate-100'>play</button> : <button className='w-24 h-12 rounded-md shadow-md hover:scale-105 bg-slate-100' onClick={() => {player.pause(); setPlayToggle(false)}}>Stop</button>}
              
            </div>
        
        </>
    )

}