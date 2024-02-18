import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../services/service/service.service";
import {getBase64} from "../../utils/upload-image.util";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrl: './edit-service.component.scss'
})
export class EditServiceComponent implements OnInit{

  id: string = '';
  form: any = {
    name: null,
    price: null,
    duration: null,
    commission: null,
    photos: []
  };

  dragAreaClass: string = "dragarea";
  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.getFile(files);
  }
  constructor(private router:ActivatedRoute,private serviceService: ServiceService,private route: Router) {
  }
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')!;
    this.serviceService.get(this.id, data => {
      this.form = data;
    });
  }

  onSubmit(): void {
    const { name, price, duration, commission, photos } = this.form;
    this.serviceService.update(this.id, {name, price, duration, commission, photos}, () => {
      this.route.navigate(['/service']);
    })
  }


  getFile(files: FileList) {
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.match(/image\/*/) == null) {
          return;
        }
        getBase64(files[i]).then((base64) => {
          this.form.photos.push(base64);
        });
      }
    }
  }

  removePhoto(photo: string) {
    const index = this.form.photos.indexOf(photo);
    if (index > -1) {
      this.form.photos.splice(index, 1);
    }
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
      this.getFile(files);

    }
  }

}
