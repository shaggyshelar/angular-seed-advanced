/** Angular Dependencies */
import { OnInit, Component } from '@angular/core';

/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';

/** Module Level Dependencies */
import { ProfileService } from '../../services/profile.service';
import { User } from '../../models/user';
import { MessageService } from '../../../core/shared/services/message.service';

/** Other Module Dependencies */
import * as _ from 'lodash';

/** Component Declaration */
@Component({
  moduleId: module.id,
  selector: 'personal-info',
  templateUrl: 'personal-info.component.html',
  styleUrls: ['personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  public profileInfoObs: Observable<any>;
  public profileObj: Observable<User>;
  profile: any;
  profileInfo: User;
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

  constructor( private profileService : ProfileService) {
    this.profile = {};
   // this.profileInfo = {};
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
    var ProfileID = 1;
     this.profileObj = this.profileService.getProfile(ProfileID);
     this.profileObj.subscribe(result => {
      this.profile = result ? result : {};
      this.profileInfo = _.cloneDeep(this.profile);
     })
  }

  addBloodGroup() {
    this.isAddBloodGroup = true;
    this.isEditBloodGroup = true;
  }
  editBloodGroup() {
    this.isEditBloodGroup = true;
  }

  saveBloodGroup() {
    if (!_.isEmpty(this.profileInfo.BloodGroup)) {
      this.isEditBloodGroup = false;
      this.profile.bloodGroup = this.profileInfo.BloodGroup;
    }
  }

  cancelBloodGroup() {
    this.isEditBloodGroup = false;
    this.profileInfo.BloodGroup = this.profile.bloodGroup;
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
    if (!_.isEmpty(this.profileInfo.Contact.Name)) {
      this.isEditEmergencyContactName = false;
      this.profile.emergencyContactName = this.profileInfo.Contact.Name;
    }
  }

  cancelEmergencyContactName() {
    this.isEditEmergencyContactName = false;
    this.profileInfo.Contact.Name = this.profile.emergencyContactName;
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
    if (!_.isEmpty(this.profileInfo.LastWorkingDayOfPrevEmployer)) {
      this.isEditLastWorkingDay = false;
      this.profile.lastWorkingDay = this.profileInfo.LastWorkingDayOfPrevEmployer;
    }
  }

  cancelLastWorkingDay() {
    this.isEditLastWorkingDay = false;
    this.profileInfo.LastWorkingDayOfPrevEmployer = this.profile.lastWorkingDay;
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
    if (!_.isEmpty(this.profileInfo.CareerStartDate)) {
      this.isEditCareerStartDate = false;
      this.profile.careerStartDate = this.profileInfo.CareerStartDate;
    }
  }

  cancelCareerStartDate() {
    this.isEditCareerStartDate = false;
    this.profileInfo.CareerStartDate = this.profile.careerStartDate;
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
    if (!_.isEmpty(this.profileInfo.PF.CurrentOrgPFNumber)) {
      this.isEditEsplPfNo = false;
      this.profile.esplPfNo = this.profileInfo.CurrentOrgPFNumber;
    }
  }

  cancelEsplPfNo() {
    this.isEditEsplPfNo = false;
    this.profileInfo.CurrentOrgPFNumber = this.profile.esplPfNo;
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
    if (!_.isEmpty(this.profileInfo.PF.PreviousOrgPFNumber)) {
      this.isEditPreviousPfNo = false;
      this.profile.previousPfNo = this.profileInfo.PF.PreviousOrgPFNumber;
    }
  }

  cancelPreviousPfNo() {
    this.isEditPreviousPfNo = false;
    this.profileInfo.PF.PreviousOrgPFNumber = this.profile.previousPfNo;
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
    if (!_.isEmpty(this.profileInfo.ContactNo)) {
      this.isEditContactNo = false;
      this.profile.contactNo = this.profileInfo.ContactNo;
    }
  }

  cancelContactNo() {
    this.isEditContactNo = false;
    this.profileInfo.ContactNo = this.profile.contactNo;
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
    if (!_.isEmpty(this.profileInfo.Contact.Number)) {
      this.isEditEmergencyContact = false;
      this.profile.emergencyContactNo = this.profileInfo.Contact.Number;
    }
  }

  cancelEmergencyContactNo() {
    this.isEditEmergencyContact = false;
    this.profileInfo.Contact.Number = this.profile.emergencyContactNo;
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
    if (!_.isEmpty(this.profileInfo.SkypeID)) {
      this.isEditSkypeID = false;
      this.profile.skypeID = this.profileInfo.SkypeID;
    }
  }

  cancelSkypeID() {
    this.isEditSkypeID = false;
    this.profileInfo.SkypeID = this.profile.skypeID;
    this.isAddSkypeID = false;
  }
}
