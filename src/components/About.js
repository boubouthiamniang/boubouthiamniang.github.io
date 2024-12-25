import React, { useRef, useEffect } from 'react';
import './css/About.css';  // Importing the external CSS file
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Style, Circle, Fill, Stroke } from 'ol/style';
import Overlay from 'ol/Overlay';

// List of visited locations with their coordinates
const visitedLocations = [
  { name: "Rome, Italy", lat: 41.9028, lon: 12.4964 },
  { name: "Milan, Italy", lat: 45.4642, lon: 9.1900 },
  { name: "Venice, Italy", lat: 45.4408, lon: 12.3155 },
  { name: "Vatican City", lat: 41.9029, lon: 12.4534 },
  { name: "Ljubljana, Slovenia", lat: 46.0511, lon: 14.5051 },
  { name: "Zagreb, Croatia", lat: 45.8131, lon: 15.978 },
  { name: "Bratislava, Slovakia", lat: 48.1482, lon: 17.1067 },
  { name: "Vienna, Austria", lat: 48.2082, lon: 16.3738 },
  { name: "Budapest, Hungary", lat: 47.4979, lon: 19.0402 },
  { name: "Prague, Czech Republic", lat: 50.0755, lon: 14.4378 },
  { name: "Berlin, Germany", lat: 52.5200, lon: 13.4050 },
  { name: "Kraków, Poland", lat: 50.0647, lon: 19.9450 },
  { name: "Geneva, Switzerland", lat: 46.2044, lon: 6.1432 },
  { name: "Lisbon, Portugal", lat: 38.7223, lon: -9.1393 },
  { name: "Barcelona, Spain", lat: 41.3784, lon: 2.1925 },
  { name: "Novi Sad, Serbia", lat: 45.2671, lon: 19.8335 },
  { name: "Bamako, Mali", lat: 12.6392, lon: -8.0029 },
  //Natural regions
  { name: "Gorges de l'Ardèche, France", lat: 44.3751, lon: 4.4804 },
  { name: "Parc national du Mercantour, France", lat: 44.1667, lon: 6.8333 },
  { name: "Parc national des Calanques, France", lat: 43.2172, lon: 5.4328 },
  { name: "Mont Gerbier de Jonc, France", lat: 44.8417, lon: 4.2236 },
  { name: "Gorges de Daluis, France", lat: 44.0764, lon: 6.8161 },
  { name: "Plitvice Lakes National Park, Croatia", lat: 44.8593, lon: 15.5954 },
  { name: "Réserve de Camargue, France", lat: 43.5269, lon: 4.6244 },
  { name: "Parc national des Pyrénées, France", lat: 42.7953, lon: -0.3561 },
  { name: "Parc national des Écrins, France", lat: 44.8504, lon: 6.4207 },
  { name: "Parc national de la Vanoise, France", lat: 45.4567, lon: 6.8424 },
  { name: "Parc national de Port-Cros, France", lat: 43.0025, lon: 6.4308 },
  { name: "Parc national des Cévennes, France", lat: 44.2981, lon: 3.8704 },
  { name: "Parc national de Forêts, France", lat: 48.0481, lon: 4.6575 },
  { name: "Le Colorado Provençal, France", lat: 43.9064, lon: 5.4793 },
];

// Green locations for the map
const greenLocations = [
  "Gorges de l'Ardèche, France",
  "Parc national du Mercantour, France",
  "Parc national des Calanques, France",
  "Mont Gerbier de Jonc, France",
  "Gorges de Daluis, France",
  "Plitvice Lakes National Park, Croatia",
  "Réserve de Camargue, France",
  "Le Colorado Provençal, France",
];

// Locations to see (for green empty circle markers)
const greenLocationsToSee = [
  "Parc national des Pyrénées, France",
  "Parc national des Écrins, France",
  "Parc national de la Vanoise, France",
  "Parc national de Port-Cros, France",
  "Parc national des Cévennes, France",
  "Parc national des Forêts, France",
  "Parc national de Forêts, France",
];

const About = () => {
  const mapRef = useRef();
  const popupRef = useRef();

  useEffect(() => {
    // Create the map
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([0, 20]), // Adjusted to a better initial center
        zoom: 2,
      }),
    });

    // Create vector source and layer for markers
    const vectorSource = new VectorSource();
    visitedLocations.forEach((location) => {
      const marker = new Feature({
        geometry: new Point(fromLonLat([location.lon, location.lat])), // Correct coordinate order
        name: location.name, // Attach the name to the feature
      });

      // Check if the location is in the greenLocations list
      let markerStyle;
      if (greenLocations.includes(location.name)) {
        // Green circle marker
        markerStyle = new Style({
          image: new Circle({
            radius: 8, // Adjust size of the circle
            fill: new Fill({
              color: 'green', // Green color
            }),
            stroke: new Stroke({
              color: 'darkgreen', // Darker border for the circle
              width: 2,
            }),
          }),
        });
      } else if (greenLocationsToSee.includes(location.name)) {
        // Green empty circle for locations to see
        markerStyle = new Style({
          image: new Circle({
            radius: 8, // Slightly bigger radius for visibility
            fill: new Fill({
              color: 'transparent', // Empty center
            }),
            stroke: new Stroke({
              color: 'green', // Green border
              width: 3,
            }),
          }),
        });
      } else {
        // Default marker (you can customize this as needed)
        markerStyle = new Style({
          image: new Circle({
            radius: 8,
            fill: new Fill({
              color: 'blue', // Default blue color for other locations
            }),
            stroke: new Stroke({
              color: 'black',
              width: 2,
            }),
          }),
        });
      }

      marker.setStyle(markerStyle);
      vectorSource.addFeature(marker);
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    map.addLayer(vectorLayer);

    // Create a popup overlay
    const popup = new Overlay({
      element: popupRef.current,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -10],
    });

    map.addOverlay(popup);

    // Add click event listener to display popup
    map.on('click', (event) => {
      const feature = map.forEachFeatureAtPixel(event.pixel, (feat) => feat);
      if (feature) {
        const coordinates = feature.getGeometry().getCoordinates();
        const name = feature.get('name'); // Get the name property
        popup.setPosition(coordinates);
        popupRef.current.innerHTML = name;
        popupRef.current.style.display = 'block';
      } else {
        popupRef.current.style.display = 'none'; // Hide popup if no marker is clicked
      }
    });

    return () => map.setTarget(null); // Cleanup on unmount
  }, []);

  return (
    <section className="about">
      <h2>About Me</h2>
      <ul>
        <li className="about-item">
          <strong>Professional Expertise</strong>
          <p>
            I am an R&D engineer with a PhD in software engineering, specializing in systems interoperability. My area of expertise focuses on the design and implementation of scalable data pipelines for complex information systems. I have hands-on experience with asynchronous messaging tools such as Kafka, Apache Camel, RabbitMQ, and ActiveMQ, and am also familiar with model-driven engineering and software product line approaches.
            <br /><br />
            As an R&D engineer at Berger-Levrault, I'm working on Green IT projects, exploring how software energy consumption can be reduced. I'm also involved in the development of AI-assisted tools for software creation and business rules management systems.
            <br /><br />
            In addition to my research work, I teach computer science part-time at IUT Lumière Lyon 2, covering topics such as object-oriented programming, algorithms, web data collection, database design, and system interoperability.
          </p>
        </li>
        <li className="about-item">
          <strong>Personal Interests</strong>
          <p>
            When I am not working on tech projects, I enjoy exploring the outdoors and discovering new places.
          </p>
        </li>
        {/* World Map with Visited Cities */}
        <li className="about-item">
          <strong>Visited Countries, Cities, and Notable Natural Regions</strong>
          <div
            ref={mapRef}
            style={{ width: '100%', height: '400px', borderRadius: '12px' }}
          ></div>
          {/* Popup element */}
          <div
            ref={popupRef}
            className="popup"
          ></div>
        </li>
        <li className="about-item">
            <strong>Legend</strong>
            {/* Legend */}
            <div className="legend">
                <div className="legend-item">
                <div className="blue-circle"></div>
                <span>Visited Country/City</span>
                </div>
                <div className="legend-item">
                <div className="green-circle"></div>
                <span>Visited Notable Natural Location</span>
                </div>
                <div className="legend-item">
                <div className="green-empty-circle"></div>
                <span>Natural Locations to Visit</span>
                </div>
            </div>
        </li>
      </ul>
    </section>
  );
};

export default About;