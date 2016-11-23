/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../../framework.ref';

@BaseComponent({
  moduleId: module.id,
  selector: 'top-navigation-bar',
  templateUrl: 'top-navigation-bar.component.html',
  styleUrls: ['top-navigation-bar.component.css'],
})
export class TopNavigationBarComponent implements OnInit {

  constructor(private router: Router, private logService: LogService) {
    this.logService.debug('TopNavigationBarComponent : constructor');
  }

  ngOnInit(): void {
    this.logService.debug('TopNavigationBarComponent : ngOnInit');
  }
}
