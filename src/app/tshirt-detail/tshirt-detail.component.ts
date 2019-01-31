import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Tshirt } from '../tshirt.model';
import { TshirtService } from '../tshirt.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-tshirt-detail',
  templateUrl: './tshirt-detail.component.html',
  styleUrls: ['./tshirt-detail.component.css'],
  providers: [TshirtService]
})
export class TshirtDetailComponent implements OnInit {
  tshirtId: string;
  tshirtToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private tshirtService: TshirtService) { }

//newThis = this;

ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.tshirtId = urlParameters['id'];
    });
    this.tshirtToDisplay = this.tshirtService.getTshirtById(this.tshirtId);
  }
}
