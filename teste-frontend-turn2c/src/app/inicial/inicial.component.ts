import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../dog-api.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  dogs: any[] = [];

  constructor(private dogApiService: DogApiService) { }

  ngOnInit(): void {
    this.fetchDogImages();
  }

  fetchDogImages(): void {
    this.dogApiService.getDogImages().subscribe(
      (data: any[]) => {
        this.dogs = data;
      },
      (error) => {
        console.error('Error fetching dog images', error);
      }
    );
  }
}

