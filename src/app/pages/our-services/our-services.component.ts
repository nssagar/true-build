import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {

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
