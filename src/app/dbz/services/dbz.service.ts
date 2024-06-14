import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krilin",
      power: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9999
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 6790
    }
  ];

  public addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  public deleteCharacterById(id: string) {
    this.characters= this.characters.filter((character) => character.id !== id);
    //this.characters.splice(index, 1);
  }

}
