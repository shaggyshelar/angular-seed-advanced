/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
/** Other Module Dependencies */
import { Observable } from 'rxjs/Rx';
/** Framework Dependencies */
import { BaseComponent } from '../../../../framework.ref';

import { RoleService } from '../../../services/role.service';
import { PermissionService } from '../../../services/permission.service';
import { Role } from '../../../models/role';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'role-add-edit',
    templateUrl: 'role-add-edit.component.html',
})

export class RoleAddEditComponent implements OnInit {
    errorMessage: any;
    params: number;
    permissionList: any;
    filteredPermissionList: any;
    selectedPermission: any;
    rolePermissionList: Observable<any>;
    roleForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private roleService: RoleService,
        private permissionService: PermissionService,
        private route: ActivatedRoute, private router: Router) {
    }
    ngOnInit() {
        this.roleForm = this.formBuilder.group({
            id: [0],
            name: ['', [Validators.required]],
        });
        this.route.params.forEach((params: Params) => {
            this.params = params['roleId'];
            if (this.params) {
                this.roleService.getRoleById(this.params)
                    .subscribe(
                    results => {
                        this.roleForm.setValue({
                            id: results.id,
                            name: results.name
                        });
                    },
                    error => this.errorMessage = <any>error);
                this.getAllPermissions();
                this.getPermissionsByRole();
            }
        });
    }

    onSubmit({ value, valid }: { value: Role, valid: boolean }) {
        if (this.params) {
            this.roleService.editRole(value)
                .subscribe(
                results => {
                    this.router.navigate(['/admin/role']);
                },
                error => this.errorMessage = <any>error);
        } else {
            this.roleService.addRole(value)
                .subscribe(
                results => {
                    this.router.navigate(['/admin/role']);
                },
                error => this.errorMessage = <any>error);
        }
    }


    onAddPermission() {
        this.selectedPermission.RoleId = this.params;
        this.permissionService.addPermissionToRole(this.selectedPermission)
            .subscribe(
            results => {
                this.getPermissionsByRole();
                this.selectedPermission = null;
            },
            error => this.errorMessage = <any>error);
    }

    filterPermission(event: any) {
        let query = event.query;
        this.filteredPermissionList = [];
        for (let i = 0; i < this.permissionList.length; i++) {
            let permission = this.permissionList[i];
            if (permission.Text.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
                this.filteredPermissionList.push(permission);
            }
        }
    }
    revokePermission(permission) {
        permission.RoleId = this.params;
        this.permissionService.revokePermission(permission)
            .subscribe(
            results => {
                this.getPermissionsByRole();
            },
            error => this.errorMessage = <any>error);
    }
    private getPermissionsByRole() {
        this.rolePermissionList = this.permissionService.getPermissionsByRole(this.params);
    }
    private getAllPermissions() {
        this.permissionService.getAllPermission()
            .subscribe(
            results => {
                this.permissionList = <any>results;
            },
            error => this.errorMessage = <any>error);
    }
}

