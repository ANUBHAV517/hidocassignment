import './App.css';

import Header from './component/header';
import DrugData from './component/drugdata';
import { useEffect, useState } from 'react';
import Explore from './component/explore';
import Footer from './component/footer';
function App() {
  const [drugData, setDrugData] = useState();
  const url = 'https://hidocdr.com/api/hidoc-us/drug/getDrugList';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Specify content type if sending JSON
    },
  };
  useEffect(() => {
    // Fetch data only once when component mounts
    console.log(drugData, 'drugData154');
    fetchData();

    // Cleanup function (optional)
    return () => {
      // Unsubscribe, remove event listeners, etc. here if needed
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const fetchData = () => {
    // Simulating data fetch
    setTimeout(() => {
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse response as JSON
        })
        .then((data) => {
          // Handle the fetched data
          setDrugData(data?.data);
        });
    }, 1000);
  };
  return (
    <>
      {drugData ? (
        <div class="App">
          <Header />
          <DrugData drugData={drugData?.drugData} />
          <Explore drugData={drugData?.exploreMore} />
          <Footer />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
