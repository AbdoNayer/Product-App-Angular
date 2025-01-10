import { Component } from '@angular/core';
import { ServicesService } from '../../../core/services/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  valueCartItem: any = 0;

  constructor(private servicesService: ServicesService) {
    this.servicesService.counter.subscribe((res: any) => {
      this.valueCartItem = res;
    });
  }
}
