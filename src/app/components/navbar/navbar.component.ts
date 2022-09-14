import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  //styles:['.ocultar {display:none;}']
})
export class NavbarComponent implements OnInit {

  pathImgLogo : string = "/src/assets/img/test.jpg";

  comprobarUrl : boolean = false;

  isLoggedIn$: Observable<boolean> = new Observable();

  constructor(private elementRef : ElementRef, public auth: AuthService) {
    
  }
  ngAfterViewInit(){
    if(this.auth.visible){

      const navbarToggler = this.elementRef.nativeElement.querySelector('.button-menu')
      const navWrapper = this.elementRef.nativeElement.querySelector('.main-nav');
      navbarToggler.addEventListener('click', () => {
        
        navbarToggler.classList.toggle('close');
        navWrapper.classList.toggle('show');
      });
  
      navWrapper.addEventListener('click', (element:MouseEvent) => {
        //console.log((element.target as Element).id);
        if((element.target as Element).id === 'nav' || (element.target as Element).className === "link-item"){
          navWrapper.classList.remove('show');
          navbarToggler.classList.remove('close');
        }
      })
    }
  }

  ngOnInit() {
  }
  
}
