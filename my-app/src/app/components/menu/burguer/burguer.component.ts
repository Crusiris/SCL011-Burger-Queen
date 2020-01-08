import { Component, OnInit, Input } from '@angular/core';
import { menuModel } from '../../../models/menu.model';
import { WaiqueenService} from '../../../services/waiqueen.service';
import { orderModel } from '../../../models/order.model';
import { orderfireModel } from '../../../models/orderfire.model';


@Component({
  selector: 'app-burguer',
  templateUrl: './burguer.component.html',
  styleUrls: ['./burguer.component.css']
})


export class BurguerComponent implements OnInit {
  @Input() tableNumber: number = 0;
 //Variable que almacena el total
 total:number = 0;
 //Variable de tipo objeto para almacenar la orden final que se enviara finalmente a firebase
 objOrderF:orderfireModel = {
  burguer:'',
  filling:'',
  acomp:'',
  drinks:'',
  total: 0,
  mesa: 0

 };
 //Variable para almacenar orden
 arrayOrder: Array<orderModel> = [];
 objOrder: orderModel = { 
                         categoria: '',
                         name: '', 
                         price: 0,
                          id:''
                       };

  //Varible para almacenar lo que retorna la funcion que esta alojada en el servicio
  menus: menuModel[]=[];
  //Variables de almacenamiento segun el filtrado
  burguer:menuModel[]=[]; 
  drinks:menuModel[]=[];
  filling:menuModel[]=[];
  bFast:menuModel[]=[];
  accom:menuModel[]=[];
  

  //inyecto mi servicion
  constructor(private waiqueenservice:WaiqueenService) { 
    console.log('Servicio activo');
  }

  ngOnInit() { 
  //Filtrado de data segun categoria
    const filter = (array, type) => {
      const result = array.filter((element=>{
        if(type === 'burguer'){
          return element['categoria'] === 'Hamburguesas'
        }else 
        if(type === 'drinks'){
          return element['categoria'] === 'Bebidas'
        }else 
        if(type === 'accom'){
        return element['categoria'] === 'Acompañamientos'
        }
        if(type === 'bFast'){
          return element['categoria'] === 'Desayuno'
        } else 
        if(type === 'filling'){
          return element['categoria'] === 'Relleno'
        }
        }))
        return result;
    }
  
   this.waiqueenservice.getmens()
        .subscribe( (resp: any) => {
          this.menus = resp;
          console.log('entro');
         console.log(this.menus);
          this.burguer =  filter(this.menus, 'burguer')
          this.drinks =  filter(this.menus, 'drinks')
          this.bFast =  filter(this.menus, 'bFast')
          this.filling =  filter(this.menus, 'filling')
          this.accom =  filter(this.menus, 'accom')
         
        })
  }
  addItem(name:string, price:number ,categoria:string){
    
     this.objOrder.categoria = categoria;
     this.objOrder.name = name;
     this.objOrder.price = price;
     this.total += this.objOrder.price;
     this.arrayOrder.push(this.objOrder);
     this.objOrder = {id:'', categoria: '', name: '',  price: 0}

   }
 


  //Funcion que elimina el Item
  deleteItem(i, price){
    //Obtengo el indice del objeto
    this.arrayOrder.splice(i, 1);
    this.total -= price; 
    
 }
  
     addOrderfire(){
      
     this.arrayOrder.forEach(element => {
          switch (element.categoria) {
            case 'Hamburguesas':
             this.objOrderF['burguer'] =  element.name
              break;
              case 'Relleno':
               this.objOrderF['filling'] =  element.name
               break;
               case 'Bebidas':
                 this.objOrderF['drinks'] =  element.name
                 break;
                 case 'Acompañamientos':
                   this.objOrderF['acomp'] =  element.name
                  break;
        };
      this.objOrderF['total']= this.total  
      
    })
    // return this.objOrderF;
    this.waiqueenservice.addOrder(this.objOrderF)
    this.objOrderF = {burguer:'', filling: '', acomp: '',  drinks:'', total: 0, mesa: 0}
    this.arrayOrder = [];
    this.total=0;
  }



}


