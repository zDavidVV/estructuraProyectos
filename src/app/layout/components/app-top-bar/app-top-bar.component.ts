import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonDarkModeComponent } from '../../../assets/components/button-dark-mode/button-dark-mode.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonDarkModeComponent],
  templateUrl: './app-top-bar.component.html'
})
export class AppTopBarComponent {

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) { }
}