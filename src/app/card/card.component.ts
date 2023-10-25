import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass],
  selector: 'app-card',
  template: `<div class="card" [ngClass]="type">
    <h3 *ngIf="title">{{ title }}</h3>
    <p *ngIf="text">{{ text }}</p>
    <div class="image-container">
      <img *ngIf="imagePath" [src]="imagePath" />
    </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() text: string | undefined;
  @Input() title: string | undefined;
  @Input() type: 'primary' | 'secondary' | 'warning' | 'danger' = 'primary';
  @Input() imagePath: string | undefined;
}
