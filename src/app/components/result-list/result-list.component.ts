import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.sass']
})
export class ResultListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  result;

  ngOnInit() {
    this.loadData();
    
  }

  async loadData(){
    let res : any= await this.apiService.getData();
    console.log(res);
    this.result=res.default.offers;
    
    console.log(this.result);
  }

}
