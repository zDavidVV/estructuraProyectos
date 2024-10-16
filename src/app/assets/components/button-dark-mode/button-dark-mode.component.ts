import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-dark-mode',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './button-dark-mode.component.html',
  styleUrl: './button-dark-mode.component.scss'
})
export class ButtonDarkModeComponent {
  isDarkTheme: boolean = false; // Por defecto, tema claro

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    let data = document.getElementById('theme-css') as HTMLLinkElement 
    data.href = this.isDarkTheme ? 'dark.css' : 'light.css';
    console.log('Clase actual del body:', data);
  }
}
