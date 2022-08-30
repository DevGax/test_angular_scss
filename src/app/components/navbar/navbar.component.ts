import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  pathImgLogo : string = "/src/assets/img/test.jpg";

  constructor(private elementRef : ElementRef){}
  ngAfterViewInit(){
    const navbarToggler = this.elementRef.nativeElement.querySelector('.button-menu')
    const navWrapper = this.elementRef.nativeElement.querySelector('.main-nav');
    navbarToggler.addEventListener('click', () => {
      navbarToggler.classList.toggle('close');
      navWrapper.classList.toggle('show');
    });

    navWrapper.addEventListener('click', (element:MouseEvent) => {
      console.log((element.target as Element).id);
      if((element.target as Element).id === 'nav' || (element.target as Element).className === "link-item"){
        navWrapper.classList.remove('show');
        navbarToggler.classList.remove('close');
      }
    })
  }
}
