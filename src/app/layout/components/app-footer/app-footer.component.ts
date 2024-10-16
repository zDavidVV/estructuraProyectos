import { Component } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {
  constructor(public layoutService: LayoutService) { }

}
