import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productDetails:any;
categoryName:any;
  constructor(private apiservice:ApiserviceService) { }

  ngOnInit(): void {
    this.getProductList();
  }


  getProductList()
  {
    this.apiservice.getProductList().subscribe((data) =>
    {
      this.productDetails=data.products;
      this.categoryName = data.categoryName;
    })
  }
}
