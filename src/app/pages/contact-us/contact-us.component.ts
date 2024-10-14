import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

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
