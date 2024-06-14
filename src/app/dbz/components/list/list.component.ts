import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public charactersList: Character[] = [
    {
      id:"",
      name: "Trunks",
      power: 40
    }
  ];

  @Output()
  public onCharacterDeleted: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id: string): void {
    this.onCharacterDeleted.emit(id);
  }


}
