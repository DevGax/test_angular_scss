import { Component, OnInit, HostListener, ElementRef, AfterViewInit, ViewChild  } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-clasesy',
  templateUrl: './clasesy.component.html',
  styleUrls: ['./clasesy.component.scss']
})
export class ClasesyComponent implements OnInit, AfterViewInit {
  @ViewChild('pp') pp!: ElementRef;
  @ViewChild('kk') kk!: ElementRef;
  @ViewChild('lista') lista!: ElementRef;
  ngAfterViewInit(){
    console.log(this.pp.nativeElement);
    console.log(this.kk.nativeElement);
    console.log(this.lista.nativeElement);
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.show();
  }

  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll($event:Event){
    if(window.pageYOffset > 150){
      this.lista.nativeElement.setAttribute('style', 'color: white; background: red');
    }
    if(window.pageYOffset > 1500){
      this.kk.nativeElement.style.backgroundColor = "white";
    }
  }
}
