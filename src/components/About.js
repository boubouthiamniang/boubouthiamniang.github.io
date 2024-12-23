import React from 'react';
import './css/About.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// List of visited cities/countries with their coordinates
const visitedLocations = [
    { name: "Paris", lat: 48.8566, lon: 2.3522 },      // Paris, France
    { name: "Rome", lat: 41.9028, lon: 12.4964 },      // Rome, Italy
    { name: "Milan", lat: 45.4642, lon: 9.1900 },      // Milan, Italy
    { name: "Venice", lat: 45.4408, lon: 12.3155 },    // Venice, Italy
    { name: "Ljubljana", lat: 46.0511, lon: 14.5051 }, // Ljubljana, Slovenia
    { name: "Zagreb", lat: 45.8131, lon: 15.978} ,     // Zagreb, Croatia
    { name: "Bratislava", lat: 48.1482, lon: 17.1067 }, // Bratislava, Slovakia
    { name: "Vienna", lat: 48.2082, lon: 16.3738 },    // Vienna, Austria
    { name: "Budapest", lat: 47.4979, lon: 19.0402 },  // Budapest, Hungary
    { name: "Prague", lat: 50.0755, lon: 14.4378 },    // Prague, Czech Republic
    { name: "Berlin", lat: 52.5200, lon: 13.4050 },    // Berlin, Germany
    { name: "Kraków", lat: 50.0647, lon: 19.9450 },    // Kraków, Poland
    { name: "Lisbon", lat: 38.7223, lon: -9.1393 },    // Lisbon, Portugal
    { name: "Barcelona", lat: 41.3784, lon: 2.1925 },  // Barcelona, Spain
    { name: "Novi Sad", lat: 45.2671, lon: 19.8335 },  // Novi Sad, Serbia
    { name: "Bamako", lat: 12.6392, lon: -8.0029 },    // Bamako, Mali
    { name: "Parc National du Mercantour", lat: 44.2000, lon: 7.5000 }, // Parc National du Mercantour, France
  ];

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <ul>
        <li>
          <strong>Professional Expertise</strong>
          <p>
          I am an R&D engineer with a PhD in software engineering, specializing in systems interoperability. My area of expertise focuses on the design and implementation of scalable data pipelines for complex information systems. I have hands-on experience with asynchronous messaging tools such as Kafka, Apache Camel, RabbitMQ and ActiveMQ, and am also familiar with model-driven engineering and software product line approaches.
                        I have good experience of web development, particularly with frameworks such as Spring Boot, Struts and JSF.
                        <br/><br/>
                        As an R&D engineer at Berger-Levrault, I'm working on Green IT projects, exploring how software energy consumption can be reduced. I'm also involved in the development of AI-assisted tools for software creation and business rules management systems.
                        <br/><br/>
                        In addition to my research work, I teach computer science part-time at IUT Lumière Lyon 2, covering topics such as object-oriented programming, algorithms, web data collection, database design and system interoperability.
          </p>
        </li>
        <li>
          <strong>Personal Interests</strong>
          <p>
            When I am not working on tech projects, I enjoy exploring the outdoors and discovering new places.
          </p>
        </li>
        {/* World Map with Visited Cities */}
        <li>
          <strong>Visited Locations</strong>
          <MapContainer center={[20, 0]} zoom={2} style={{ width: '100%', height: '400px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Render markers for each visited location */}
            {visitedLocations.map((location, index) => (
              <Marker
                key={index}
                position={[location.lat, location.lon]}
                icon={new L.Icon({
                  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', // You can use a custom icon
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  shadowSize: [41, 41],
                })}
              >
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </li>
      </ul>
    </section>
  );
};

export default About;
