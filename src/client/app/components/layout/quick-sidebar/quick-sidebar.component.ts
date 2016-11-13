import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'quick-sidebar',
  templateUrl: 'quick-sidebar.component.html',
  styleUrls: ['quick-sidebar.component.css'],
})
export class QuickSidebarComponent {

  constructor(
    private router: Router) { }

}
