import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DbMainPageComponent {

  constructor(private _dbzService: DbzService) { }

  get characters(): Character[] {
    return [...this._dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this._dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this._dbzService.addCharacter(character);
  }


}
