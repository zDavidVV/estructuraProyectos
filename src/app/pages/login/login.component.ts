import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,CardModule, PasswordModule, InputTextModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  onSubmit() {
    // Here you would typically call an authentication service
    console.log('Login attempt', this.username, this.password);
    // For demo purposes, let's just log to the console
    if (this.username === 'admin' && this.password === 'password') {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  }
}
