import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LeadService } from './lead.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {
  @ViewChild("contentCreate") contentCreate: any;
  @ViewChild("contentEdit") contentEdit: any;
  @ViewChild("contentDelete") contentDelete: any;
  isCollapsed = true;
  leads: any;
  users: any;
  origins: any;
  interests: any;
  newLeadForm = new FormGroup({
    // Contact
    name: new FormControl(''),
    cell: new FormControl(''),
    email: new FormControl(''),
    user_code: new FormControl(''),
    origin_id: new FormControl(''),
    user_id: new FormControl(''),
    interest_id: new FormControl(''),
  });

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private leadService: LeadService,
  ) { }

  ngOnInit(): void {
    this.getLeads();
    this.getUsersOptions();
    this.getOriginsOptions();
    this.getInterestsOptions();
  }

  getLeads() {
    this.leadService.getLeads()
      .then((data: any) => {
        this.leads = data;
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
      });
  }

  getUsersOptions() {
    this.leadService.getUsersOptions()
    .then((data: any) => {
      this.users = data;
    })
    .catch((error: any) => {
      console.log(error);
    })
    .finally(() => {
    });
  }

  getOriginsOptions() {
    this.leadService.getOriginsOptions()
    .then((data: any) => {
      this.origins = data;
    })
    .catch((error: any) => {
      console.log(error);
    })
    .finally(() => {
    });
  }

  getInterestsOptions() {
    this.leadService.getInterestsOptions()
    .then((data: any) => {
      this.interests = data;
    })
    .catch((error: any) => {
      console.log(error);
    })
    .finally(() => {
    });
  }

  onSubmit(): void {
    this.leadService.createLead(this.newLeadForm.value)
      .then((data: any) => {
        this.newLeadForm.reset();
        this.reload();
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
      });
  }

  openNewLeadModal() {
    this.modalService.open(this.contentCreate, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
      // scrollable: true
    });
  }

  openEditModal() {
    this.modalService.open(this.contentEdit, {ariaLabelledBy: 'modal-basic-title'});
  }

  openDeleteModal() {
    this.modalService.open(this.contentDelete, {ariaLabelledBy: 'modal-basic-title'});
  }

  reload() {
    this.ngOnInit();
  }
}
