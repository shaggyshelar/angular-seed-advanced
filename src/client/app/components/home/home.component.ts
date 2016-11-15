// libs
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
// app
import { BaseComponent, RouterExtensions } from '../../frameworks/core/index';
import { NAME_LIST_ACTIONS } from '../../frameworks/sample/index';
import { LoginService } from '../../shared/services/login.service';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  public names$: Observable<any>;
  public newName: string = '';

  constructor(private loginService: LoginService, private store: Store<any>, public routerext: RouterExtensions, private _router: Router) {
    this.names$ = store.select('names');
  }

  ngOnInit() {
    // if (!this.loginService.isAuthenticated()) {
    //  this._router.navigate(['/login']);
    // }
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.store.dispatch({ type: NAME_LIST_ACTIONS.ADD, payload: this.newName });
    this.newName = '';
    return false;
  }

  readAbout() {
    // Try this in the {N} app
    // {N} can use these animation options
    this.routerext.navigate(['/about'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
