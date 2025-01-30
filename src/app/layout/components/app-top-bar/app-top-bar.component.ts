import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './app-top-bar.component.html'
})
export class AppTopBarComponent {

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) { }

  isDarkTheme: boolean = false; // Por defecto, tema claro

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    let data = document.getElementById('theme-css') as HTMLLinkElement 
    data.href = this.isDarkTheme ? 'dark.css' : 'light.css';
  }
}