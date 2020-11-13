import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public pageRoute = '/';
  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.pageRoute = event.urlAfterRedirects;
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }

  isActive(link: string) {
    return this.pageRoute.includes(link);
  }

}
