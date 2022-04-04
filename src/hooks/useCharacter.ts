import { useState } from "react";

// Types
import { CharacterSides } from "../types/CharacterSides";

// Data
import { mapSpots } from "../data/mapSpots";

// O Personagem e seus movimentos
export const useCharacter = (propName: string) => {

  const [name, setName] = useState(propName);

  const [position, setPosition] = useState({ x: 3, y: 5 });

  const [side, setSide] = useState<CharacterSides>('down');

  const moveLeft = () => {
    setPosition(position => ({
      x: canMove(position.x - 1, position.y) ? position.x - 1 : position.x,
      y: position.y
    }));
    setSide('left');
  }

  const moveRight = () => {
    setPosition(position => ({
      x: canMove(position.x + 1, position.y) ? position.x + 1 : position.x,
      y: position.y
    }));
    setSide('right');
  }
  const moveDown = () => {
    setPosition(position => ({
      x: position.x,
      y: canMove(position.x, position.y + 1) ? position.y + 1 : position.y
    }));
    setSide('down');
  }
  const moveUp = () => {
    setPosition(position => ({
      x: position.x,
      y: canMove(position.x, position.y - 1) ? position.y - 1 : position.y
    }));
    setSide('up');
  }

  // Monitora o personagem se pode ou não se movimentar para uma posição
  const canMove = (x: number, y: number) => {

    // Captura a posição que pode andar, e retorna true, se for false, ele bloquea para sair do mapa
    if (mapSpots[y] !== undefined && mapSpots[x] !== undefined) {
      return (mapSpots[y][x] === 1);
    }

    return false;
  }

  return {
    name,
    x: position.x,
    y: position.y,
    side,
    moveLeft,
    moveRight,
    moveDown,
    moveUp
  };
}