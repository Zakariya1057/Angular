import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
