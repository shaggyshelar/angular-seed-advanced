/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../../framework.ref';

/** Component Definition */
@BaseComponent({
  moduleId: module.id,
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private logService: LogService) {
    this.logService.debug('SidebarComponent : constructor');
  }

  ngOnInit(): void {
    this.logService.debug('SidebarComponent : ngOnInit');
  }
}
