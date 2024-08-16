import React from 'react';
import '../index.css';

const Home = () => (
  <div className="home">
    <h1>Welcome to the Real Estate Management System</h1>
    <p>Manage properties and clients with ease.</p>
  </div>
);

export default Home;


// import React, { useEffect, useState } from 'react';
// import '../styles.css';
// import mockApi from '../mockApi';
// import PropertyCard from '../components/PropertyCard';

// function Home() {
//     const [properties, setProperties] = useState([]);
  
//     useEffect(() => {
//       const fetchProperties = async () => {
//         const response = await mockApi.getProperties(); // Use mockApi to get properties
//         setProperties(response);
//       };
//       fetchProperties();
//     }, []);


//   return (
//     <div className="home-container">
//       <h1>Find Your Dream Home</h1>
//        <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
//             setSearchTerm(event.target.value);
//           }} />
//       <div className="property-list">
//         {properties.map((property) => (
//          <PropertyCard key={property.id} property={property} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;


