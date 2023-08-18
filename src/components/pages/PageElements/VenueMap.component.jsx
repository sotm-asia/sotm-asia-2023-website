import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import "./PageElement.styles.css";
import "../Homepage/content.styles.css";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

class VenueMap extends Component {
    state = {
        center: [13.744439970661537, 100.56397459831895],
        zoom: 14,
    };

    render() {
        return (
            <div style={{ width: "100%" }}>
                <div style={{ padding: 40 }}>
                    <MapContainer style={{width:'80vw'}} center={this.state.center} zoom={this.state.zoom}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={this.state.center}>
                            <Popup>
                                <h3 style={{ color: "darkred" }}>Srinakharinwirot University, Bangkok</h3> <br />
                                114 Soi Sukhumvit 23, Khlong Toei Nuea, <br />
                                Watthana, Bangkok 10110
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        );
    }
}

export { VenueMap };
