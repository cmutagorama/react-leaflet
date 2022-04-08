import React from 'react'
import { MapContainer, SVGOverlay, TileLayer as TL } from 'react-leaflet3'
import { Map, TileLayer } from 'react-leaflet';
import { GeoJSONFillable, Patterns} from 'react-leaflet-geojson-patterns';
import './App.css';

const position = [51.505, -0.09]
const bounds = [
  [51.49, -0.08],
  [51.5, -0.06],
]

function App() {
	return (
		<>
			<Map center={[47.9, -71.4]} zoom={10} style={{ height: "50vh" }}>
				<TileLayer
					attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<GeoJSONFillable
					data={{
						type: "FeatureCollection",
						features: [
							{
								type: "Feature",
								properties: {
									style: "stripe",
									name: "Loisirs Lavoie et St-Jean-Baptiste"
								},
								geometry: {
									type: "Polygon",
									coordinates: [
										[
											[-71.729270299794578, 48.010418784700107],
											[-71.291070323784993, 48.004374022337799],
											[-71.291070323784993, 47.777183877693901],
											[-71.729270299794578, 47.786290622064854],
											[-71.729270299794578, 48.010418784700107]
										]
									]
								}
							}
						]
					}}
					style={feature => ({
						color: "red",
						fillPattern: Patterns.CirclePattern({
							x: 7,
							y: 7,
							radius: 5,
							fill: true,
							width: 15,
							height: 15,
							color: "red",
							key: "circle"
						})
					})}
				/>
			</Map>

			<MapContainer center={position} zoom={13}>
      <TL
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
        <rect x="0" y="0" width="100%" height="100%" fill="blue" />
        <circle r="5" cx="10" cy="10" fill="red" />
        <text x="50%" y="50%" stroke="white">
          text
        </text>
      </SVGOverlay>
    </MapContainer>
		</>
  );
}

export default App;
