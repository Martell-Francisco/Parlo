"use client"
import style from "./component.module.css"
export default function Speak({text}) {

    console.log("Speech Text: " +text)

    function talk(){
    const utterance = new SpeechSynthesisUtterance(text);
    
    let voicesArray = speechSynthesis.getVoices();
    utterance.voice = voicesArray[22];
    utterance.rate= .7;
    speechSynthesis.speak(utterance);

  };

  return (
    <button onClick={talk} className={style.speakButton}>
        </button>
  );
}
