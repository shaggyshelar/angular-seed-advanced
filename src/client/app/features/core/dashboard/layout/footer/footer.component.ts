/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Framework Dependencies */
import { BaseComponent, LogService } from '../../../../framework.ref';

/** Component Definition */
@BaseComponent({
  moduleId: module.id,
  selector: 'layout-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, private logService: LogService) {
    this.logService.debug('FooterComponent : constructor');
  }

  ngOnInit(): void {
    this.logService.debug('FooterComponent : ngOnInit');
  }
}
