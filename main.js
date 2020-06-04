import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import TileWMS from 'ol/source/TileWMS';

new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    }),
    new TileLayer({
      source: new TileWMS({
        projection: 'EPSG:4326', // HERE IS THE DATA SOURCE PROJECTION
        url: 'http://localhost:5000/wms',
        params: {
          'LAYERS': 'tp'
        }
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
