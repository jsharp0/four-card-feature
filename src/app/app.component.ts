import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="main-content">
    <h1 class="light">Reliable, efficient delivery</h1>
    <h1>Powered by Technology</h1>
    <p>
      Our Artificial Intelligence powered tools use millions of project data
      points to ensure that your project is successful
    </p>
    <div class="container">
      <app-card
        class="row-2"
        title="Supervisor"
        text="Monitors activity to identify project roadblocks"
        imagePath="assets/icon-supervisor.svg"
        type="secondary"
      ></app-card>
      <div>
        <app-card
          title="Team Builder"
          text="Scans our talent network to create the optimal team for your project"
          imagePath="assets/icon-team-builder.svg"
          type="danger"
        ></app-card>
        <app-card
          title="Karma"
          text="Regularly evaluates our talent to ensure quality"
          imagePath="assets/icon-karma.svg"
          type="warning"
        ></app-card>
      </div>
      <app-card
        title="Calculator"
        text="Uses data from past projects to provide better delivery estimates"
        imagePath="assets/icon-calculator.svg"
        type="primary"
      ></app-card>
    </div>
  </div>`,
})
export class AppComponent {
  title = 'four-card-feature';
}
