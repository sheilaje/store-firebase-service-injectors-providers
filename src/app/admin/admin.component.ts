import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { TshirtService } from '../tshirt.service'
import { Album } from '../album.model';
import { Tshirt } from '../tshirt.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService, TshirtService]
})
export class AdminComponent implements OnInit {

  constructor(private albumService: AlbumService, private tshirtService: TshirtService) { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string){
    var newAlbum: Album = new Album(title, artist, description);
    this.albumService.addAlbum(newAlbum);
  }

  submitTshirtForm(brand: string, color: string, size: string, price: number){
    var newTshirt: Tshirt = new Tshirt(brand, color, size, price);
    this.tshirtService.addTshirt(newTshirt);
  }

}
