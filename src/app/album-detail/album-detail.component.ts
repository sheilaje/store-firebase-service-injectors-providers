import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumId: number;
  albumToDisplay: Album;

  constructor(private route: ActivatedRoute, private location: Location, private albumService: AlbumService) { }

//newThis = this;

ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
      console.log(this.albumId);
    });
    this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }
}