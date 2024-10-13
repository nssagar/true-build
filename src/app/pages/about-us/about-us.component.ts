import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

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
