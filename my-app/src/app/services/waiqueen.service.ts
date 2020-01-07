import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { map} from "rxjs/operators";
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { TablsModel } from '../models/mesa.model';
import { menuModel } from '../models/menu.model';
import { orderfireModel } from '../models/orderfire.model';








@Injectable({
  providedIn: 'root'
})

export class WaiqueenService {

//variables para coleccion
 private tablsCollection: AngularFirestoreCollection<TablsModel>
 private menuCollection: AngularFirestoreCollection<menuModel>
 private orderCollection: AngularFirestoreCollection<orderfireModel>

//Variable para arrays
 arrayTabls: Observable<TablsModel[]>;
 arraymens: Observable<menuModel[]>;
 arrayburguer:Observable<menuModel[]>;
 arrayOrder:Observable<orderfireModel[]>;

constructor(private afs: AngularFirestore) {

//------------------------------ Mesas -------------------------------------------------//
   
//Peticion de coleccion de mesas
       this.tablsCollection = afs.collection<TablsModel>('mesas');
    //Guardo coleccion en array
       this.arrayTabls = this.tablsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as TablsModel;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );


//------------------------------ Menu -------------------------------------------------//
    //Peticion de coleccion menu
    this.menuCollection = afs.collection<menuModel>('menu');
     //Guardo coleccion en array
     this.arraymens = this.menuCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as menuModel;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );


    //------------------------------ Ordenes -------------------------------------------------//

    //Peticion de coleccion Ordenes
    this.orderCollection = afs.collection<orderfireModel>('order');
     //Guardo coleccion en array
     this.arrayOrder = this.orderCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as orderfireModel;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
//------------------------------ Menu -------------------------------------------------//
 
    //Funcion que retorna la data de menu en un array
    getmens(){
      return this.arraymens
    }

//------------------------------ Mesas -------------------------------------------------//

 //Funcion que retorna la data de mesa en un array
 getTabls(){
  console.log('retornara la data');
  return this.arrayTabls;
}


addItem(mesas:TablsModel) {
  this.tablsCollection.add(mesas);
  
}

//-------------------------------Ordenes----------------------------------//

//Funcion que retorna la data de ordenes en un array
getOrder(){
  return this.arrayOrder;
}

addOrder(order:orderfireModel) {
  this.orderCollection.add(order);
}
}


