import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerrosService } from '../../services/perros.service';
@Component({
  selector: 'app-adoptar',
  templateUrl: './adoptar.page.html',
  styleUrls: ['./adoptar.page.scss'],
})
export class AdoptarPage implements OnInit {
  data: any;
  perros:any;
  constructor(private route :ActivatedRoute,private DataService:PerrosService) {
    this.route.queryParams.subscribe(params=>{
      if (params && params.perro) {
        this.data = JSON.parse(params.perro);
      }
    })
   
   }
  
  ngOnInit() {}
    
  }
