/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
/** Framework Dependencies */
import { BaseComponent } from '../../views/base-component';

/** Third Party Dependencies */
import { SelectItem } from 'primeng/primeng';

/** Module Level Dependencies */

/** Component Declaration */
@BaseComponent({
  moduleId: module.id,
  selector: 'manage-ticket',
  templateUrl: 'manage-ticket.component.html'
})
export class ManageTicketComponent implements OnInit {
  departments: SelectItem[];
  priorities: SelectItem[];
  concerns: SelectItem[];
  constructor(
    private router: Router) {

  }
  ngOnInit(): void {

    this.departments = [];
    this.departments.push({ label: 'Select Department', value: null });
    this.departments.push({ label: 'IT', value: { id: 1, name: 'project1' } });
    this.departments.push({ label: 'Admin', value: { id: 2, name: 'project2' } });

    this.priorities = [];
    this.priorities.push({ label: 'Select Priority', value: null });
    this.priorities.push({ label: 'Low', value: { id: 1, name: 'Low' } });
    this.priorities.push({ label: 'High', value: { id: 2, name: 'High' } });

    this.concerns = [];
    this.concerns.push({ label: 'Select Concerns', value: null });
    this.concerns.push({ label: 'Soft install', value: { id: 1, name: 'Soft install' } });
    this.concerns.push({ label: 'Hardware req', value: { id: 2, name: 'Hardware req' } });

  }

  cancel() {
    this.router.navigate(['/log-ticket']);
  }
}
