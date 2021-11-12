import { useEffect } from 'react';
import * as C from './App.styles';

// Components
import { Character } from './components/Character';

// Hooks 
import { useCharacter } from './hooks/useCharacter';

// Icones
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleUp,
  HiOutlineArrowCircleDown
} from 'react-icons/hi';

import { CgLoadbar } from 'react-icons/cg';


const App = () => {

  // Criando um Hook
  const char = useCharacter('Jailson');
  const char2 = useCharacter('Murílio');

  // Monitoramento do personagem
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, []);

  // Monitora as teclas que estão sendo precioadas na tela
  const handleKeyDown = (e: KeyboardEvent) => {
    //console.log(`Apertou: ${e.code}`);
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
        break;

      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
        break;

      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
        break;

      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
        break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} />
        <Character x={char2.x} y={char2.y} side={char2.side} />
      </C.Map>

      <C.ButtonArea>
        <C.Button className="b-left" onClick={() => char2.moveLeft()}><HiOutlineArrowCircleLeft size={30} /></C.Button>
        <C.Button className="b-right" onClick={() => char2.moveRight()}><HiOutlineArrowCircleRight size={30} /></C.Button>
        <C.Button className="b-up" onClick={() => char2.moveUp()}><HiOutlineArrowCircleUp size={30} /></C.Button>
        <C.Button className="b-down" onClick={() => char2.moveDown()} ><HiOutlineArrowCircleDown size={30} /></C.Button>

        <C.Button className="b-select"> <CgLoadbar size={40} /> </C.Button>
        <C.Button className="b-start"> <CgLoadbar size={40} /> </C.Button>

        <C.Button className="b-y"> Y </C.Button>
        <C.Button className="b-x"> X </C.Button>
        <C.Button className="b-a"> A </C.Button>
        <C.Button className="b-b"> B </C.Button>

      </C.ButtonArea>
    </C.Container>
  );
}

export default App;