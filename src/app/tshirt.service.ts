import { Injectable } from '@angular/core';
import { Tshirt } from './tshirt.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TshirtService {
  tshirts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.tshirts = database.list('tshirts');
}

  getTshirts(){
    return this.tshirts;
  }

  addTshirt(newTshirt: Tshirt) {
   this.tshirts.push(newTshirt);
 }

  getTshirtById(tshirtId: string){
  return this.database.object('tshirts/' + tshirtId);
  }

  updateTshirt(localUpdatedTshirt){
    var tshirtEntryInFirebase = this.getTshirtById(localUpdatedTshirt.$key);
    tshirtEntryInFirebase.update({brand: localUpdatedTshirt.brand,
                                color: localUpdatedTshirt.color,
                                size: localUpdatedTshirt.size,
                                price: localUpdatedTshirt.price});
  }

  deleteTshirt(localTshirtToDelete){
    let tshirtEntryInFirebase = this.getTshirtById(localTshirtToDelete.$key);
    tshirtEntryInFirebase.remove();
  }
}
