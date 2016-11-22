/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Other Module Dependencies */
import * as _ from 'lodash';

/** Framework Dependencies */
import { BaseComponent } from '../views/base-component';

import { FeatureService } from '../../services/feature.service';
import { Feature } from '../../entity/feature';

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
    nextId: number;
    errorMessage: any;
    constructor(private featureService: FeatureService) {
        this.isAddEdit = false;
        this.feature = new Feature(0, '');
        // this.featureList = [{
        //     id: 1,
        //     name: 'TimeSheet',
        // },
        // {
        //     id: 2,
        //     name: 'Corporate',
        // },
        // ];
        this.nextId = 2;
    }
    ngOnInit() {
        this.getFeature();
    }
    onSave() {
        if (this.feature.id === 0) {
            this.featureService.addFeature(this.feature)
                .subscribe(
                results => {
                    this.getFeature();
                },
                error => this.errorMessage = <any>error);
        } else {
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
         this.featureService.deleteFeature(feature)
            .subscribe(
            results => {
                this.getFeature();
            },
            error => this.errorMessage = <any>error);
        // let featureTobeEditIndex = _.findIndex(this.featureList, function (item) {
        //     return item.id === feature.id;
        // });
        // this.featureList.splice(featureTobeEditIndex, 1);
    }
}

