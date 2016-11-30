/** Angular Dependencies */
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';

/** Other Module Dependencies */

/** Framework Dependencies */
import { BaseComponent } from '../../../../framework.ref';

import { RoleService } from '../../../services/role.service';
import { Role } from '../../../models/role';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'admin-role-list',
    templateUrl: 'role-list.component.html',
    styleUrls: ['role-list.component.css']
})

export class RoleListComponent implements OnInit {
    roleList: Array<Role>;
    role: Role;
    errorMessage: any;
    constructor(private roleService: RoleService,private router: Router) {
        this.role = new Role(0, '');
    }
    ngOnInit() {
        this.getRole();
    }

    getRole() {
        this.roleService.getRoles()
            .subscribe(
            results => {
                this.roleList = results;
            },
            error => this.errorMessage = <any>error);
    }
    // onCancel() {
    //     this.feature = new Feature(0, '');
    //     this.isAddEdit = false;
    // }
    onEditClick(role:Role) {
         this.router.navigate(['/admin/role/edit',role.id]);
    }
    // onDelete(feature: Feature) {
    //      this.featureService.deleteFeature(feature)
    //         .subscribe(
    //         results => {
    //             this.getFeature();
    //         },
    //         error => this.errorMessage = <any>error);
    // }
}

