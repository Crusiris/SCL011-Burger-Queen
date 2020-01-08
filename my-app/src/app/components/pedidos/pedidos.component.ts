import { Component, OnInit } from '@angular/core';
import {WaiqueenService} from '../../services/waiqueen.service';
import { orderfireModel } from '../../models/orderfire.model';



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
order:orderfireModel[]=[]

  constructor(private waiqueenservice:WaiqueenService) { }

  ngOnInit() {

    this.waiqueenservice.getOrder().subscribe((resp: any)=>{
      this.order = resp;
      console.log(this.order);
    })
  }

}
