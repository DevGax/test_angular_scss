import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  urlRegister : string = window.location.href;
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    this.auth.hide();
  }
}
