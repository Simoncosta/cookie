import { useState } from 'react';
import "./style.css";

import biscoito from "./asset/biscoito.png";

interface ButtonProps{
  name: string;
  action: () => void;
}

function App() {
  const [textPhrase, setTextPhrase] = useState("");

  function breakCookie() {
   const numberRandom = Math.floor(Math.random() * phrases.length)

   setTextPhrase(phrases[numberRandom]);
  }

  const phrases = [
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ];

  return (
    <div className='container'>
      <img src={biscoito} alt="Break Cookie" className='img' />
      <Button name="Abrir Biscoito" action={breakCookie} />
      <h3 className='textPhrase'>'{textPhrase}'</h3>
    </div>
  )
}

const Button = (props: ButtonProps) => {
  return <button onClick={props.action}>{props.name}</button>;
}

export default App
