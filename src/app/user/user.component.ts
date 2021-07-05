import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @ViewChild("contentCreate") contentCreate: any;
  @ViewChild("contentEdit") contentEdit: any;
  @ViewChild("contentDelete") contentDelete: any;
  isCollapsed = true;
  users: any;
  newUserForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    cell: new FormControl(''),
    status: new FormControl(''),
    role_id: new FormControl(''),
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .then((data: any) => {
        this.users = data;
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
      });
  }

  onSubmit(): void {
    console.log(this.newUserForm.value);
    this.newUserForm.reset();
  }

  openNewUserModal() {
    this.modalService.open(this.contentCreate, {ariaLabelledBy: 'modal-basic-title'});
    console.log('CRIAR');
  }

  openEditModal(user: any) {
    this.modalService.open(this.contentEdit, {ariaLabelledBy: 'modal-basic-title'});
    console.log('EDITAR', user);
  }

  openDeleteModal(user: any) {
    this.modalService.open(this.contentDelete, {ariaLabelledBy: 'modal-basic-title'});
    console.log('DELETAR', user);
  }

  reload() {
    this.ngOnInit();
    console.log('recarregou');
  }
}
