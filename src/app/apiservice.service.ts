import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
let headers = new HttpHeaders()
headers=headers.set('content-type','application/json')
headers=headers.set('Access-Control-Allow-Origin', '*');
headers=headers.set('x-rapidapi-host','asos2.p.rapidapi.com'), 
headers=headers.set('x-rapidapi-key','25837bd125msh355938ca8157613p139742jsn28ab6a561ae5')
console.log(headers)

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  

  constructor(private http: HttpClient) { }

  apiUrl = 'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US';



getProductList(): Observable<any> {
  return this.http.get<any>(this.apiUrl,{ headers: headers }).pipe(
    map((productList) => {
      return productList;
    })
  );
}
}
