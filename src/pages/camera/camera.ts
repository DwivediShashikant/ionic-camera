import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  imgSrc : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _camera : Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  takeSnapShot(){

    let options : CameraOptions = {
      destinationType : this._camera.DestinationType.FILE_URI,
      sourceType : this._camera.PictureSourceType.CAMERA,
      encodingType : this._camera.EncodingType.PNG,
      targetHeight : 500,
      targetWidth : 500,
      saveToPhotoAlbum : false
    }
    this._camera.getPicture ( options ).then( (imgSrc) => {
      this.imgSrc = imgSrc;
    })
  }

}
