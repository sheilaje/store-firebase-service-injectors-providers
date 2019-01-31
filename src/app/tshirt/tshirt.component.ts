import { Component, OnInit} from '@angular/core';
import { Tshirt } from '../tshirt.model';
import { Router } from '@angular/router';
import { TshirtService } from '../tshirt.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.css'],
  providers: [TshirtService]
})
export class TshirtComponent implements OnInit {
tshirts: FirebaseListObservable<any[]>;
currentRoute: string = this.router.url;

constructor(private router: Router, private tshirtService: TshirtService) { }

ngOnInit() {
    this.tshirts = this.tshirtService.getTshirts();
}
goToDetailPage(clickedTshirt) {
   this.router.navigate(['tshirts', clickedTshirt.$key]);
   console.log(this.router);
 };
}
