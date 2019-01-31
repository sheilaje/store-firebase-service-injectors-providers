import { Component, Input, OnInit } from '@angular/core';
import { Tshirt } from '../tshirt.model';
import { TshirtService } from '../tshirt.service';

@Component({
  selector: 'app-edit-tshirt',
  templateUrl: './edit-tshirt.component.html',
  styleUrls: ['./edit-tshirt.component.css'],
  providers: [TshirtService]
})
export class EditTshirtComponent implements OnInit {
  @Input() selectedTshirt;
  editTshirt = null;

  constructor(private tshirtService: TshirtService) { }

  ngOnInit() {
  }

  beginUpdatingTshirt(tshirtToUpdate){
    this.tshirtService.updateTshirt(tshirtToUpdate);
  }

  beginDeletingTshirt(tshirtToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.tshirtService.deleteTshirt(tshirtToDelete);
    }
  }

  editSpecificTshirt(){
    this.editTshirt = "true";
  }

}
