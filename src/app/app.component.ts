import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  counter = 0;

  onBeforeSend(event) {
    console.log(event, event.xhr);
  }
}
