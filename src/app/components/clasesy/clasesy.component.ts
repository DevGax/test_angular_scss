import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-clasesy',
  templateUrl: './clasesy.component.html',
  styleUrls: ['./clasesy.component.scss']
})
export class ClasesyComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.show();
  }

}
