import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions} from  '@ionic-native/camera'

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  imgSrc : any;

  constructor
  (
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private camera : Camera) {
  }

  takeSnapShot(){

    let options : CameraOptions = {
      destinationType : this.camera.DestinationType.FILE_URI,
      sourceType : this.camera.PictureSourceType.CAMERA,
      encodingType : this.camera.EncodingType.PNG,
      targetHeight : 500,
      targetWidth : 500,
      saveToPhotoAlbum : false
    }

    this.camera.getPicture( options).then( (imgSrc) => {
      this.imgSrc = imgSrc;
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}