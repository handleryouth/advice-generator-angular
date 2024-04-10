import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdvicesResponse } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  constructor(private httpClient: HttpClient) {}

  getAdvices() {
    return this.httpClient.get<AdvicesResponse>(
      'https://api.adviceslip.com/advice'
    );
  }
}
