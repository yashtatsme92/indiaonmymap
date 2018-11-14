import React, {Component} from 'react';

import { Map, TileLayer, ImageOverlay } from 'react-leaflet'

class MapArea extends Component {

    state = {
        banners : [
            {
                bounds: [[20.136, 74.77], [21.62, 76.43]],
                imgUrl: "/assets/images/Jalgoan_Dwarka.png",
                targetUrl: "http://dwarkaindustries.in/"
                
            },
            {
                bounds: [[18.01, 73.21], [19.50, 75]],
                imgUrl: "/assets/images/Poona_BombayDyeing.png",
                targetUrl: "http://bombaydyeing.com"
            },
            {
                bounds: [[19.01, 72.56], [20.27, 73.89]],
                imgUrl: "/assets/images/Thane_Lodha.png",
                targetUrl: "https://www.lodhagroup.com"
            },
            {
                bounds: [[14.847, 73.636], [15.845, 74.39]],
                imgUrl: "/assets/images/TRE_goa-1.png",
                targetUrl: ""
            },
        ],
        center: [22, 80],
        zoom : 5
    }

    render() {
        
        const ImageOverlays = this.state.banners.map((banner,index) => (
            <ImageOverlay
                key={index}
                interactive
                url={banner.imgUrl}
                bounds={banner.bounds}
                onClick={()=> (banner.targetUrl) ? window.open(banner.targetUrl, "_blank"): null}
            />
        ));

        return (
            <Map 
                center={this.state.center}
                zoom={this.state.zoom}
            >
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    // url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieWFzaHRhdHNtZSIsImEiOiJjamxrcGl5N2EwbjRrM3JwaTBkOWhwbTFuIn0.OOY_LwKhHqNm_mDGPWNRxQ"
                    // url="https://api.mapbox.com/styles/v1/yashtatsme/cjlkqn4l91izt2rmtf5m0ler4/wmts?access_token=pk.eyJ1IjoieWFzaHRhdHNtZSIsImEiOiJjamxrcGl5N2EwbjRrM3JwaTBkOWhwbTFuIn0.OOY_LwKhHqNm_mDGPWNRxQ"
                    // id='mapbox.streets'
                />
                {ImageOverlays}
            </Map>
        )
      }
}

export default MapArea;