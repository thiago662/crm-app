import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  // leads: any;
  newLeadForm = new FormGroup({
    // Contact
    name: new FormControl(''),
    cell: new FormControl(''),
    email: new FormControl(''),
    user_code: new FormControl(''),
    account_id: new FormControl(''),
    // Interest
    description: new FormControl(''),
    user_id: new FormControl(''),
    origin_id: new FormControl(''),
    contact_id: new FormControl(''),
  });

  constructor(
    private router: Router,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    // this.getLeads();
  }

  // getLeads() {
  //   this.leadService.getLeads()
  //     .then((data: any) => {
  //       this.leads = data;
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //     });
  // }

  onSubmit(): void {
    console.log(this.newLeadForm.value);
    this.newLeadForm.reset();
  }

  openNewLeadModal() {
    this.modalService.open(this.contentCreate, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
      // scrollable: true
    });
    console.log('CRIAR');
  }

  openEditModal() {
    this.modalService.open(this.contentEdit, {ariaLabelledBy: 'modal-basic-title'});
    console.log('EDITAR');
  }

  openDeleteModal() {
    this.modalService.open(this.contentDelete, {ariaLabelledBy: 'modal-basic-title'});
    console.log('DELETAR');
  }

  reload() {
    this.ngOnInit();
    console.log('recarregou');
  }
}
