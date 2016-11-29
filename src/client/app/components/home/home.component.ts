// libs
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
// app
import { BaseComponent, RouterExtensions } from '../../frameworks/core/index';
import { LoginService } from '../../shared/services/login.service';
//import { IAppState, getNames } from '../../frameworks/ngrx/index';
import { IAppState } from '../../frameworks/ngrx/index';
import * as nameList from '../../frameworks/sample/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  public names$: Observable<Array<string>>;
  public newName: string = '';

  constructor(private loginService: LoginService, private store: Store<IAppState>, public routerext: RouterExtensions, private _router: Router) {
    //this.names$ = store.let(<any>getNames);
  }

  ngOnInit() {
    if (!this.loginService.isAuthenticated()) {
      this._router.navigate(['/login']);
    } else {
      if (window['App']) {
        window['App'].init();
        window['Layout'].init();
        window['Demo'].init();
        //window['QuickSidebar'].init();
      }
    }
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.store.dispatch(new nameList.AddAction(this.newName));
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
