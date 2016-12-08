/** Angular Dependencies */
import { OnInit, Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
/** Other Module Dependencies */
import * as _ from 'lodash';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';

import { FeatureService } from '../../services/feature.service';
import { Feature } from '../../models/feature';
import { MessageService } from '../../../core/shared/services/message.service';
/** Component Declaration */
@Component({
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
    constructor(private messageService: MessageService, private formBuilder: FormBuilder, private featureService: FeatureService) {
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
        if (value.id === 0 || value.id === null) {
            this.featureService.addFeature(value)
                .subscribe(
                results => {
                    this.messageService.addMessage({ severity: 'success', summary: 'Success', detail: 'Record Saved' });
                    this.getFeature();
                });
        } else {
            this.featureService.editFeature(value)
                .subscribe(
                results => {
                    this.getFeature();
                    this.messageService.addMessage({ severity: 'success', summary: 'Success', detail: 'Record Updated' });
                });
        }
        this.isAddEdit = false;
        this.featureForm.reset();
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
                this.messageService.addMessage({ severity: 'success', summary: 'Success', detail: 'Record Deleted' });
            });
    }
}

