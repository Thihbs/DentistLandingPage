import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;
  
  zoom = 13;

  center: google.maps.LatLngLiteral = { lat: -23.5964366, lng: -46.8518606 };

  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    maxZoom: 15,
    minZoom: 8,
  };

  markers: any[] = [];

  infoContent ='<div id="iw-container">' +
  '<div class="iw-title"><h1>Clinica Thais Yamamoto</h1></div>' +
  '<div class="iw-content">' +
    '<div class="iw-subTitle"></div>' +
    '<br><div class="iw-subTitle">Contato</div>' +
    '<hr>'+
    '<p style="margin-top: 5em" >Granja Viana, SP'+
    '<br>Telefone. +11973346931<br>e-mail: drthaisyamamoto@gmail.com<br>www.drthaisyamamoto.com.br</p>'+
    '<br><hr>'+
    '<br><a href="https://www.google.com/maps/place/Thais+Yamamoto+Odontologia/@-23.5964366,-46.8518606,17z/data=!3m1!4b1!4m6!3m5!1s0x94cfab3b17e801fb:0xada92aa6bcb780cb!8m2!3d-23.5964415!4d-46.8492803!16s%2Fg%2F11v0llyps4?entry=ttu" target="_blank">Ver no Google Maps</a>'+
  '</div>' +
  '<div class="iw-bottom-gradient"></div>' +
'</div>';
  ngOnInit() {
    this.addMarker();
  }

  mapClick(event: google.maps.MapMouseEvent) {
    console.log(event.latLng);
  }


  addMarker() {
    this.markers.push({
      position: {
        lat:  -23.5964366,
        lng:  -46.8518606,
      },
      label: {
        color: 'red',
      },
      title: 'Clinica Thais Yamamoto ' + (this.markers.length + 1),
      info: this.infoContent,
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });

    const latestMarker = this.markers[this.markers.length - 1];
    this.openInfo(latestMarker, latestMarker.info);
  }

  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content;
    this.info.open(marker);
  }
}
