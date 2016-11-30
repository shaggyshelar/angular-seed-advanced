/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Other Module Dependencies */
import * as _ from 'lodash';

/** Third Party Dependencies */
import { Store } from '@ngrx/store';

/** Framework Dependencies */
import { BaseComponent } from '../../../framework.ref';
import { ADMIN_ACTIONS } from '../../services/admin.actions';

import { FeatureService } from '../../services/feature/feature.service';
import { Feature } from '../../models/feature';
import { AdminState } from '../../models/admin.state';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'admin-feature',
    templateUrl: 'feature.component.html',
    styleUrls: ['feature.component.css']
})

export class FeatureComponent implements OnInit {
    featureList: Array<Feature>;
    feature: Feature;
    isAddEdit: boolean;
    errorMessage: any;
    constructor(private store: Store<any>,private featureService: FeatureService) {
        this.isAddEdit = false;
        this.feature = new Feature(0, '');
    }
    ngOnInit() {
        //this.getFeature();
        this.store.dispatch({ type: ADMIN_ACTIONS.FEATURE_INIT });
        this.store.select('admin').subscribe((admin: AdminState) => {
            if (admin && admin.featureList) {
                this.featureList = admin.featureList;
            }
        });
    }
    onSave() {
        if (this.feature.id === 0) {
              this.store.dispatch({ type: ADMIN_ACTIONS.FEATURE_ADD, payload: this.feature });
            // this.featureService.addFeature(this.feature)
            //     .subscribe(
            //     results => {
            //         this.getFeature();
            //     },
            //     error => this.errorMessage = <any>error);
        } else {
            this.store.dispatch({ type: ADMIN_ACTIONS.FEATURE_EDIT, payload: this.feature });
            // this.featureService.editFeature(this.feature)
            //     .subscribe(
            //     results => {
            //         this.getFeature();
            //     },
            //     error => this.errorMessage = <any>error);
        }
        this.feature = new Feature(0, '');
        this.isAddEdit = false;
    }

    getFeature() {
        this.featureService.getFeatures()
            .subscribe(
            results => {
                this.featureList = results;
            },
            error => this.errorMessage = <any>error);
    }
    onCancel() {
        this.feature = new Feature(0, '');
        this.isAddEdit = false;
    }
    onEditClick(feature: Feature) {
        this.feature = _.cloneDeep(feature);
        this.isAddEdit = true;
    }
    onDelete(feature: Feature) {
        this.store.dispatch({ type: ADMIN_ACTIONS.FEATURE_DELETE, payload: this.feature.id });
        // this.featureService.deleteFeature(feature)
        //     .subscribe(
        //     results => {
        //         this.getFeature();
        //     },
        //     error => this.errorMessage = <any>error);
    }
}

