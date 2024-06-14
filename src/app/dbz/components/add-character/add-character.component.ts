import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id:"",
    name: "",
    power: 0
  };

  public emitCharacter(): void {
    //debugger;
    this.onNewCharacter.emit(this.character);
    //this.character.name = "";
    //this.character.power = 0;
    this.character = {id:"", name: "", power: 0 };
  }

}
