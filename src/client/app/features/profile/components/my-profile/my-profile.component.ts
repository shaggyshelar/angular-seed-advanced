/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

/** Module Level Dependencies */

/** Component Declaration */
@Component({
  moduleId: module.id,
  selector: 'my-profile',
  templateUrl: 'my-profile.component.html',
  styleUrls: ['my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  isEdit: boolean;

  constructor(
    private router: Router) {
    this.isEdit = false;
  }

  ngOnInit(): void {
    //
  }

  edit () {
    this.isEdit = true;
  }
  upload () {
    this.isEdit = false;
  }
  cancel () {
    this.isEdit = false;
  }
}
