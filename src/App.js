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
      'Content-Type': 'application/json',
    },
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setTimeout(() => {
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
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
