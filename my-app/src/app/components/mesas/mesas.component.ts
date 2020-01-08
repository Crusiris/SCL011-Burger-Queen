import { Component, OnInit   } from '@angular/core';
import { TablsModel } from '../../models/mesa.model';
import { WaiqueenService } from '../../services/waiqueen.service';




@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit  {
  
  //Variable para manejar el icono de cargando
  loading:boolean;
  //json donde guardo la informacion que viene en el formulario
  table:any={
    nametable:'',
    numbertable:''
  };
   
  
  // Declarando variable donde se almacena resp del getTabls para poder pintarla en la interfaz
  tables: TablsModel[] = [];
  

  //Inyecto mi servicio dentro del contructor para que la data cargue antes de la interfaz
  constructor(private waiqueenService:WaiqueenService) {
    this.loading=false;
    //Llamo el metodo getTabls creado en el services y me suscribo al evento
  }
 //Funcion Obtener data del servicio

  ngOnInit() {
     this.loading= true;
         this.waiqueenService.getTabls()
        .subscribe( resp =>{
          console.log('entro a asignar la data');
           this.tables = resp;
           this.loading=false;
          });
   
  }

  //Funcion obtener numero de mesa
  getTable(tableNumber:number){
    console.log(tableNumber)
    return tableNumber;
  }

  addtabls(){
    this.waiqueenService.addItem(this.table);
    console.log(this.table);
    this.table=" ";
    
  
  }
}
