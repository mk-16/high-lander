import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {
  private _geolocation = inject(DOCUMENT).defaultView?.navigator.geolocation;
  constructor() { }


  private positionCallbackHandler(this: (position: GeolocationPosition) => void, position: GeolocationPosition) {
    this(position);
  }

  private positionErrorCallbackHandler(error: GeolocationPositionError | null) {
    if (!error)
      console.log("browser cannot access device geolocation");
    else
      console.log("browser cannot access device geolocation", { message: error.message });
    throw error;
  }

  getCurrentPosition(callbackFunction: (position: GeolocationPosition) => void) {
    if (!this._geolocation)
      throw new Error("document default view does not exist")

    this._geolocation.getCurrentPosition(this.positionCallbackHandler.bind(callbackFunction), this.positionErrorCallbackHandler)
  }
}
