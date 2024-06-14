import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbMainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DbMainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DbMainPageComponent
  ]
})
export class DbzModule { }
