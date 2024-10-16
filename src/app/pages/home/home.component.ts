import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule
            , CommonModule
            , CardModule
            , RippleModule
            , ToastModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private messageService: MessageService) {}
  
  show() {
    this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Message Content' });
}
}
