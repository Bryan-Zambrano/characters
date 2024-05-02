import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman'
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void {
    this.name = "spiderman";
  }

  public changeAge(): void {
    this.age = 99;
  }

  public reset(): void {
    this.name = "ironman";
    this.age = 45;
  }

}
