import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  screenAtTop = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.scrollY > 250) {
      this.screenAtTop = true;
    } else {
      this.screenAtTop = false;
    }
  }

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({ top: 0 });
  }

}
