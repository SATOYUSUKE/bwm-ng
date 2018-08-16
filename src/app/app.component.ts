import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentTitle = "私は日本人だ";

  clickHandler() {
    alert("無事に押されました");
  }
}
