/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

/** Other Module Dependencies */

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
    role: Role;
    errorMessage: any;
    params: number;
    permissionList: any;
    filteredPermissionList: any;
    selectedPermission:Object;
    rolePermissionList:Array<Object>;
    constructor(private roleService: RoleService,
        private permissionService: PermissionService,
        private route: ActivatedRoute, private router: Router) {
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
                this.getAllPermissions();
                this.getPermissionsByRole();
            }
        });
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
     private getPermissionsByRole() {
          this.permissionService.getPermissionsByRole(this.params)
            .subscribe(
            results => {
                this.rolePermissionList = <any>results;
            },
            error => this.errorMessage = <any>error);
    }
    private  getAllPermissions() {
        this.permissionService.getAllPermission()
            .subscribe(
            results => {
                this.permissionList = <any>results;
            },
            error => this.errorMessage = <any>error);
    }
}

