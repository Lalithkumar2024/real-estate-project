// import React from 'react';
// import '../index.css';
// // import Footer from './Footer';
// import Search from './Search';

// const Home = () => (
//   <div className="home">
//     <h1>Welcome to the Real Estate Management System</h1>
//     <p>Manage properties and clients with ease.</p>
//     
//   </div>
 
// );

// export default Home;

import React, { useState } from 'react';
import templatedata from '../TemplateData.json';
import SearchBar from './SearchBar';
import HouseList from './HouseList';
import HouseDetail from './HouseDetail';  // Your CSS file

const Home = () => {
    const [filteredData, setFilteredData] = useState(templatedata);
    const [selectedHouse, setSelectedHouse] = useState(null);

    return (
        <div className="home">
            <SearchBar
                data={templatedata}
                setFilteredData={setFilteredData}
                setSelectedHouse={setSelectedHouse}
            />
            {selectedHouse ? (
                <HouseDetail house={selectedHouse} />
            ) : (
                <HouseList
                    filteredData={filteredData}
                    setSelectedHouse={setSelectedHouse}
                />
            )}
        </div>
    );
};

export default Home;