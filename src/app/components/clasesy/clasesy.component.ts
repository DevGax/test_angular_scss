import { Component, OnInit, HostListener, ElementRef, AfterViewInit, ViewChild  } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-clasesy',
  templateUrl: './clasesy.component.html',
  styleUrls: ['./clasesy.component.scss']
})
export class ClasesyComponent implements OnInit, AfterViewInit {
  @ViewChild('pp') pp : ElementRef;

  ngAfterViewInit(){
    console.log(this.pp.nativeElement);
    
  }

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.show();
  }

  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll($event:Event){
    if(window.pageYOffset > 1500){
      this.pp.nativeElement.lastChild.clientHeight = 50;
    }
  }
}
