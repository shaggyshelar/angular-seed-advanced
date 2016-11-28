/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

/** Other Module Dependencies */

/** Framework Dependencies */
import { BaseComponent } from  '../../../../framework.ref';

import { RoleService } from '../../../services/role.service';
import { Role } from '../../../models/role';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'role-add-edit',
    templateUrl: 'role-add-edit.component.html',
})

export class RoleAddEditComponent implements OnInit {
    roleList: Array<Role>;
    role: Role;
    errorMessage: any;
    params: number;
    constructor(private roleService: RoleService, private route: ActivatedRoute, private router: Router) {
        this.role = new Role(0, '');
    }
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.params = params['roleId'];
            if (this.params) {
                this.roleService.getRoleById(this.params)
                    .subscribe(
                    results => {
                        this.role = <any>results;
                    },
                    error => this.errorMessage = <any>error);
            }
        });
    }

    getRole() {
        this.roleService.getRoles()
            .subscribe(
            results => {
                this.roleList = results;
            },
            error => this.errorMessage = <any>error);
    }
    onSave() {
        if (this.params) {
            this.roleService.editRole(this.role)
                .subscribe(
                results => {
                    this.router.navigate(['/admin/role']);
                },
                error => this.errorMessage = <any>error);
        } else {
            this.roleService.addRole(this.role)
                .subscribe(
                results => {
                    this.router.navigate(['/admin/role']);
                },
                error => this.errorMessage = <any>error);
        }
    }
}

