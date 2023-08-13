import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../dog-api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  userUploadedImages: any[] = [];
  selectedImage: File | null = null;

  constructor(private dogApiService: DogApiService) { }

  ngOnInit(): void {
    this.fetchUserUploadedImages();
  }

  fetchUserUploadedImages(): void {
    this.dogApiService.getUserUploadedImages().subscribe(
      (data: any[]) => {
        this.userUploadedImages = data;
      },
      (error) => {
        console.error('Error fetching user uploaded images', error);
      }
    );
  }

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
  }

  uploadImage(): void {
    if (this.selectedImage) {
      this.dogApiService.uploadDogImage(this.selectedImage).subscribe(
        (response) => {
          console.log('Image uploaded successfully', response);
          // Refresh the list of user uploaded images
          this.fetchUserUploadedImages();
        },
        (error) => {
          console.error('Error uploading image', error);
        }
      );
    }
  }
}

