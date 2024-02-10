import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeService} from "../../services/employee/employee.service";
import {RoleService} from "../../services/role/role.service";
import {getBase64} from "../../utils/upload-image.util";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit{

  form: any = {
    name: null,
    email: null,
    password: "1234",
    phone: null,
    photo: null,
    role: null
  };

  roles: any = [];

  dragAreaClass: string = "dragarea";
  onFileChange(event: any) {
    let files: FileList = event.target.files;
    getBase64(files[0]).then((base64) => {
      this.form.photo = base64;
    });
  }

  constructor( private employeeService: EmployeeService, private roleService: RoleService, private router: Router) {
  }

  onSubmit(): void {
    const { name, email, password, phone, photo, role } = this.form;
    this.employeeService.create({name, email, password, phone, photo, role}, () => {
      this.router.navigate(['/employe']);
    });

  }

  ngOnInit(): void {
    this.roleService.getAll(data => {
      this.roles = data;
    });
    this.dragAreaClass = "dragarea";
  }

  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      getBase64(files[0]).then((base64) => {
        this.form.photo = base64;
      });

    }
  }
}
