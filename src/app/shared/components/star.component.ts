import { Input, Component } from '@angular/core';

@Component({
    selector:    'ma-star',
    template: `
    <div class='stars'>
    <span class='star star-enabled' *ngIf="num > 0">&#9733;</span>
    <span class='star star-enabled' *ngIf="num > 2">&#9733;</span>
    <span class='star star-enabled' *ngIf="num > 4">&#9733;</span>
    <span class='star star-enabled' *ngIf="num > 6">&#9733;</span>
    <span class='star star-enabled' *ngIf="num > 8">&#9733;</span>
    <span class='star star-disabled' *ngIf="num == 0">&#9734;</span>
    <span class='star star-disabled' *ngIf="num <= 2">&#9734;</span>
    <span class='star star-disabled' *ngIf="num <= 4">&#9734;</span>
    <span class='star star-disabled' *ngIf="num <= 6">&#9734;</span>
    <span class='star star-disabled' *ngIf="num <= 8">&#9734;</span>
</div>
    `
  })
  export class StarComponent {
    @Input() num: number;
  }