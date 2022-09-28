import * as Tone from 'tone'
import { createRoot } from 'react-dom/client'
const synth = new Tone.Synth().toDestination();
        
let notes = ['c4', 'c#4', 'd4' , 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 
             'c5', 'c#5', 'd5' , 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5', 'b5',]
let notesKeys = {'a': 'c4' , 's':'d4', 'd':'e4', 'f':'f4', 
                     'g':'g4', 'h':'a4', 'j':'b4', 'k':'c5'}
function noteSound(event){
    synth.triggerAttackRelease(notesKeys[event.key.toLowerCase()], "8n")
}

document.getElementById('body').addEventListener('keydown', noteSound)

function PianoKey(props){
    return <button 
            className={props.note.length===2?'white':'black'}
            onClick={() => synth.triggerAttackRelease(props.note, "8n")} id={props.note}>
            {props.note}
           </button>
}

function PianoKeys(){
    return notes.map( note =>  <PianoKey key={note} note={note} />   ) 
}
// Siempre es así
const root = createRoot(document.getElementById('root'))
root.render(<PianoKeys />) // jsx 