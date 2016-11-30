/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Other Module Dependencies */
import * as _ from 'lodash';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
/** Framework Dependencies */
import { BaseComponent } from '../../../framework.ref';

import { FeatureService } from '../../services/feature.service';
import { Feature } from '../../models/feature';

/** Component Declaration */
@BaseComponent({
    moduleId: module.id,
    selector: 'admin-feature',
    templateUrl: 'feature.component.html',
    styleUrls: ['feature.component.css']
})

export class FeatureComponent implements OnInit {
    featureList:Observable<Feature[]>;
    feature: Feature;
    isAddEdit: boolean;
    errorMessage: any;
    constructor(private featureService: FeatureService) {
        this.isAddEdit = false;
        this.feature = new Feature(0, '');
    }
    ngOnInit() {
        this.getFeature();
    }
    onSave() {
        if (this.feature.id === 0) {
             // this.store.dispatch({ type: ADMIN_ACTIONS.FEATURE_ADD, payload: this.feature });
            this.featureService.addFeature(this.feature)
                .subscribe(
                results => {
                    this.getFeature();
                },
                error => this.errorMessage = <any>error);
        } else {
            //this.store.dispatch({ type: ADMIN_ACTIONS.FEATURE_EDIT, payload: this.feature });
            this.featureService.editFeature(this.feature)
                .subscribe(
                results => {
                    this.getFeature();
                },
                error => this.errorMessage = <any>error);
        }
        this.feature = new Feature(0, '');
        this.isAddEdit = false;
    }

    getFeature() {
        this.featureList= this.featureService.getFeatures();
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
        //this.store.dispatch({ type: ADMIN_ACTIONS.FEATURE_DELETE, payload: this.feature.id });
        this.featureService.deleteFeature(feature.id)
            .subscribe(
            results => {
                this.getFeature();
            },
            error => this.errorMessage = <any>error);
    }
}

