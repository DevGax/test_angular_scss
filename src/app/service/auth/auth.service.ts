import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  visible: boolean;
  constructor() { this.visible = false; }
  hide() { this.visible = false; }
  show() { this.visible = true; }
  toggle() { this.visible = !this.visible; }
}
