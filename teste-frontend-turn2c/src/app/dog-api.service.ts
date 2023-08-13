import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {

  private apiKey = 'live_RYstjMwEmxJWYomYkTjYatJerSQAuyjTkkVjVPOEiTebCCmHSfJT2ZOCeiijGBep';
  private apiUrl = 'https://api.thedogapi.com/v1';

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<any[]> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get<any[]>(`${this.apiUrl}/breeds?limit=10`, { headers });
  }

  getDogImages(): Observable<any[]> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get<any[]>(`${this.apiUrl}/images/search?limit=8`, { headers });
  }

  getDogsByBreed(breedId: number): Observable<any[]> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get<any[]>(`${this.apiUrl}/images/search?breed_ids=${breedId}&limit=8`, { headers });
  }

  getNextPageImages(page: number): Observable<any[]> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get<any[]>(`${this.apiUrl}/images/search?limit=8&page=${page}`, { headers });
  }

  getPreviousPageImages(page: number): Observable<any[]> {
    if (page <= 0) {
      page = 0;
    }

    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get<any[]>(`${this.apiUrl}/images/search?limit=8&page=${page}`, { headers });
  }

  getUserUploadedImages(): Observable<any[]> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get<any[]>(`${this.apiUrl}/images/?limit=10&page=0`, { headers });
  }

  uploadDogImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.post<any>(`${this.apiUrl}/images/upload`, formData, { headers });
  }
}



