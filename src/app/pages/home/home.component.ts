import { Component } from '@angular/core';
import { AdviceService } from '../../services';
import { Observable } from 'rxjs';
import { AdvicesResponse } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  advices$!: Observable<AdvicesResponse>;

  advicesData: AdvicesResponse | undefined;

  isLoading = false;

  constructor(advices: AdviceService) {
    this.advices$ = advices.getAdvices();
    this.getData();
  }

  getData() {
    this.isLoading = true;
    this.advices$.subscribe((value) => {
      this.advicesData = value;
      this.isLoading = false;
    });
  }
}
