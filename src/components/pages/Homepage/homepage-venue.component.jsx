import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import "./content.styles.css";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

class HomepageVenuePanel extends Component {
    state = {
        center: [13.744439970661537, 100.56397459831895],
        zoom: 14,
    };

    render() {
        return (
            <div
                style={{
                        width: "100%",
                        backgroundColor: "#000810",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "rgba(37, 34, 82, 1)",
                        textAlign: "center",
                    }}
                >
                    <p className="section-heading dark-section-text">Venue</p>
                    <p className="section-sub-heading dark-section-text">
                        Srinakharinwirot University, Bangkok
                    </p>
                    <p className="section-content-text dark-section-text" style={{textAlign:'center',}}>
                    114 Soi Sukhumvit 23, Khlong Toei Nuea, <br /> 
                    Watthana, Bangkok 10110
                    </p>
                </div>
                <div style={{ padding: 40, zIndex: 1 }}>
                    <MapContainer center={this.state.center} zoom={this.state.zoom}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={this.state.center}>
                            <Popup>
                                <h3 style={{color:'darkred'}}>Srinakharinwirot University, Bangkok</h3> <br /> 
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

export { HomepageVenuePanel };
