import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // ✅ Fix: Use "styleUrls" (array) instead of "styleUrl"
})
export class AppComponent {
  title = "Welcome to BridgeLabz";
  message: string = "Hello From BridgeLabz";
  bridgeLabzLogo: string = "assets/bridgelabz_com_logo.jpg";  // ✅ Make sure the path is correct

  // ===========================UC3====================================
  url="https://www.bridgelabz.com";
  onClick(event: Event): void {
    console.log("Button Clicked:", event);
    window.open(this.url, "_blank");
  }

}
