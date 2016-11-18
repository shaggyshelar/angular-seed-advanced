/** Angular Dependencies */
import { OnInit } from '@angular/core';

/** Framework Dependencies */
import {BaseComponent} from '../views/base-component';

/** Module Level Dependencies */

/** Other Module Dependencies */
import * as _ from 'lodash';

/** Component Declaration */
@BaseComponent({
  moduleId: module.id,
  selector: 'personal-info',
  templateUrl: 'personal-info.component.html',
  styleUrls: ['personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  profile: any;
  profileInfo: any;
  isAddContactNo: boolean;
  isEditContactNo: boolean;
  isAddPreviousPfNo: boolean;
  isEditPreviousPfNo: boolean;
  isAddEsplPfNo: boolean;
  isEditEsplPfNo: boolean;
  isAddCareerStartDate: boolean;
  isEditCareerStartDate: boolean;
  isAddLastWorkingDay: boolean;
  isEditLastWorkingDay: boolean;
  isAddEmergencyContactName: boolean;
  isEditEmergencyContactName: boolean;
  isAddBloodGroup: boolean;
  isEditBloodGroup: boolean;
  isAddEmergencyContact: boolean;
  isEditEmergencyContact: boolean;
  isAddSkypeID: boolean;
  isEditSkypeID: boolean;

  constructor() {
    this.profile = {};
    this.profileInfo = {};
    this.isAddContactNo = false;
    this.isEditContactNo = false;
    this.isAddEsplPfNo = false;
    this.isEditEsplPfNo = false;
    this.isAddPreviousPfNo = false;
    this.isEditPreviousPfNo = false;
    this.isAddCareerStartDate = false;
    this.isEditCareerStartDate = false;
    this.isAddLastWorkingDay = false;
    this.isEditLastWorkingDay = false;
    this.isAddEmergencyContactName = false;
    this.isEditEmergencyContactName = false;
    this.isAddBloodGroup = false;
    this.isEditBloodGroup = false;
    this.isAddEmergencyContact = false;
    this.isEditEmergencyContact = false;
    this.isAddSkypeID = false;
    this.isEditSkypeID = false;
  }

  ngOnInit(): void {
    this.profile = {
      employeeID: 1,
      employeeName: 'Nick',
      currentAddress: 'currentAddress',
      contactNo: '',
      email: 'email@anc.com',
      dateOfBirth: '01/01/1993',
      esplPfNo: '',
      previousPfNo: '',
      careerStartDate: '',
      lastWorkingDay: '',
      emergencyContactName: '',
      bloodGroup: '',
      emergencyContactNo: '',
      skypeID: ''
    };
    this.profileInfo = _.cloneDeep(this.profile);
  }

  addBloodGroup() {
    this.isAddBloodGroup = true;
    this.isEditBloodGroup = true;
  }
  editBloodGroup() {
    this.isEditBloodGroup = true;
  }

  saveBloodGroup() {
    if (!_.isEmpty(this.profileInfo.bloodGroup)) {
      this.isEditBloodGroup = false;
      this.profile.bloodGroup = this.profileInfo.bloodGroup;
    }
  }

  cancelBloodGroup() {
    this.isEditBloodGroup = false;
    this.profileInfo.bloodGroup = this.profile.bloodGroup;
    this.isAddBloodGroup = false;
  }

  addEmergencyContactName() {
    this.isAddEmergencyContactName = true;
    this.isEditEmergencyContactName = true;
  }
  editEmergencyContactName() {
    this.isEditEmergencyContactName = true;
  }

  saveEmergencyContactName() {
    if (!_.isEmpty(this.profileInfo.emergencyContactName)) {
      this.isEditEmergencyContactName = false;
      this.profile.emergencyContactName = this.profileInfo.emergencyContactName;
    }
  }

  cancelEmergencyContactName() {
    this.isEditEmergencyContactName = false;
    this.profileInfo.emergencyContactName = this.profile.emergencyContactName;
    this.isAddEmergencyContactName = false;
  }

  addLastWorkingDay() {
    this.isAddLastWorkingDay = true;
    this.isEditLastWorkingDay = true;
  }
  editLastWorkingDay() {
    this.isEditLastWorkingDay = true;
  }

  saveLastWorkingDay() {
    if (!_.isEmpty(this.profileInfo.lastWorkingDay)) {
      this.isEditLastWorkingDay = false;
      this.profile.lastWorkingDay = this.profileInfo.lastWorkingDay;
    }
  }

  cancelLastWorkingDay() {
    this.isEditLastWorkingDay = false;
    this.profileInfo.lastWorkingDay = this.profile.lastWorkingDay;
    this.isAddLastWorkingDay = false;
  }

  addCareerStartDate() {
    this.isAddCareerStartDate = true;
    this.isEditCareerStartDate = true;
  }
  editCareerStartDate() {
    this.isEditCareerStartDate = true;
  }

  saveCareerStartDate() {
    if (!_.isEmpty(this.profileInfo.careerStartDate)) {
      this.isEditCareerStartDate = false;
      this.profile.careerStartDate = this.profileInfo.careerStartDate;
    }
  }

  cancelCareerStartDate() {
    this.isEditCareerStartDate = false;
    this.profileInfo.careerStartDate = this.profile.careerStartDate;
    this.isAddCareerStartDate = false;
  }

  addEsplPfNo() {
    this.isAddEsplPfNo = true;
    this.isEditEsplPfNo = true;
  }
  editEsplPfNo() {
    this.isEditEsplPfNo = true;
  }

  saveEsplPfNo() {
    if (!_.isEmpty(this.profileInfo.esplPfNo)) {
      this.isEditEsplPfNo = false;
      this.profile.esplPfNo = this.profileInfo.esplPfNo;
    }
  }

  cancelEsplPfNo() {
    this.isEditEsplPfNo = false;
    this.profileInfo.esplPfNo = this.profile.esplPfNo;
    this.isAddEsplPfNo = false;
  }

  addPreviousPfNo() {
    this.isAddPreviousPfNo = true;
    this.isEditPreviousPfNo = true;
  }
  editPreviousPfNo() {
    this.isEditPreviousPfNo = true;
  }

  savePreviousPfNo() {
    if (!_.isEmpty(this.profileInfo.previousPfNo)) {
      this.isEditPreviousPfNo = false;
      this.profile.previousPfNo = this.profileInfo.previousPfNo;
    }
  }

  cancelPreviousPfNo() {
    this.isEditPreviousPfNo = false;
    this.profileInfo.previousPfNo = this.profile.previousPfNo;
    this.isAddPreviousPfNo = false;
  }

  addContactNo() {
    this.isAddContactNo = true;
    this.isEditContactNo = true;
  }
  editContactNo() {
    this.isEditContactNo = true;
  }

  saveContactNo() {
    if (!_.isEmpty(this.profileInfo.contactNo)) {
      this.isEditContactNo = false;
      this.profile.contactNo = this.profileInfo.contactNo;
    }
  }

  cancelContactNo() {
    this.isEditContactNo = false;
    this.profileInfo.contactNo = this.profile.contactNo;
    this.isAddContactNo = false;
  }

  addEmergencyContactNo() {
    this.isAddEmergencyContact = true;
    this.isEditEmergencyContact = true;
  }
  editEmergencyContactNo() {
    this.isEditEmergencyContact = true;
  }

  saveEmergencyContactNo() {
    if (!_.isEmpty(this.profileInfo.emergencyContactNo)) {
      this.isEditEmergencyContact = false;
      this.profile.emergencyContactNo = this.profileInfo.emergencyContactNo;
    }
  }

  cancelEmergencyContactNo() {
    this.isEditEmergencyContact = false;
    this.profileInfo.emergencyContactNo = this.profile.emergencyContactNo;
    this.isAddEmergencyContact = false;
  }

  addSkypeID() {
    this.isAddSkypeID = true;
    this.isEditSkypeID = true;
  }
  editSkypeID() {
    this.isEditSkypeID = true;
  }

  saveSkypeID() {
    if (!_.isEmpty(this.profileInfo.skypeID)) {
      this.isEditSkypeID = false;
      this.profile.skypeID = this.profileInfo.skypeID;
    }
  }

  cancelSkypeID() {
    this.isEditSkypeID = false;
    this.profileInfo.skypeID = this.profile.skypeID;
    this.isAddSkypeID = false;
  }
}
