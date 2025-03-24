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

  // ===========================UC4====================================
  url="https://www.bridgelabz.com";
  onClick(event: Event): void {
    console.log("Button Clicked:", event);
    window.open(this.url, "_blank");
  }

  // +++++++++++++++++++UC4++++++++++++++++++++++
  userName: string = "";

  // ====================UC6===========================
  errorMessage: string = "";  // ✅ Declare errorMessage
  validateUserName(): void {
    const regex = /^[A-Z][a-z]{2,}$/; 
    if (this.userName && !regex.test(this.userName)) {
      this.errorMessage = 'Name should start with a capital letter and be at least 3 characters long.';
    } else {
      this.errorMessage = '';
    }
  }
}
