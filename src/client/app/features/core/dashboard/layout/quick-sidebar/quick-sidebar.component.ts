/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../../framework.ref';

/** Component Definition */
@BaseComponent({
  moduleId: module.id,
  selector: 'quick-sidebar',
  templateUrl: 'quick-sidebar.component.html',
  styleUrls: ['quick-sidebar.component.css'],
})
export class QuickSidebarComponent implements OnInit {

  // constructor(private logService: LogService) {
  //   this.logService.debug('QuickSidebarComponent :  constructor');
  // }

  ngOnInit(): void {
    //this.logService.debug('QuickSidebarComponent : ngOnInit');
  }
}
