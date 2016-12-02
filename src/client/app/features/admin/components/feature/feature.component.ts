/** Angular Dependencies */
import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
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
    featureList: Observable<Feature[]>;
    isAddEdit: boolean;
    errorMessage: any;
    featureForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private featureService: FeatureService) {
        this.isAddEdit = false;
    }
    ngOnInit() {
        this.getFeature();
        this.featureForm = this.formBuilder.group({
            id: [0],
            name: ['', [Validators.required]],
        });
    }
    onSubmit({ value, valid }: { value: Feature, valid: boolean }) {
        if (value.id === 0) {
            this.featureService.addFeature(value)
                .subscribe(
                results => {
                    this.getFeature();
                },
                error => this.errorMessage = <any>error);
        } else {
            this.featureService.editFeature(value)
                .subscribe(
                results => {
                    this.getFeature();
                },
                error => this.errorMessage = <any>error);
        }
        this.featureForm.reset();
        this.isAddEdit = false;
    }

    getFeature() {
        this.featureList = this.featureService.getFeatures();
    }
    onCancel() {
        this.featureForm.reset();
        this.isAddEdit = false;
    }
    onEditClick(feature: Feature) {
        let selectedFeature = _.cloneDeep(feature);
        this.featureForm.setValue({
            id: selectedFeature.id,
            name: selectedFeature.name
        });
        this.isAddEdit = true;
    }
    onDelete(feature: Feature) {
        this.featureService.deleteFeature(feature.id)
            .subscribe(
            results => {
                this.getFeature();
            },
            error => this.errorMessage = <any>error);
    }
}

