import React, { useEffect, useState } from 'react';

const Drugdata = ({ drugData }) => {
  const [activeDrugData, setActiveDrugData] = useState(0);
  const services = [
    'Anesthesia',
    'Cardiology',
    'Critical Care',
    'Dentistry',
    'Dermatology',
    'Diabetolgy',
  ];
  const [activeService, setActiveService] = useState('Critical Care');
  return (
    <div class="drugmain-container">
      <div class="first-container">
        <div class="content">
          <p>
            {' '}
            Dailymed Drug Database : The DailyMed database contains 143072
            labeling submitted to the Food and Drug Administration (FDA) by
            companies. DailyMed does not contain a complete Listing of labeling
            for FDA - regulated products ( e.g, labeling that is not submitted
            to the FDA)
          </p>
        </div>
        <div class={`services`}>
          {services?.map((items, index) => {
            return (
              <div
                class={`items ${
                  activeService == items ? 'service-active' : ''
                }`}
                key={index}
                onClick={() => setActiveService(items)}
              >
                {items}
              </div>
            );
          })}
        </div>
      </div>
      {drugData && (
        <div class="second-container">
          <div class="table-containeer-first">
            <div class="table-heading">
              <h2>Drug Data</h2>
            </div>
            <div class="table-body">
              {drugData?.map((drugitem, index) => {
                return (
                  <div
                    class={activeDrugData == index ? 'active-drug-data' : ''}
                    onClick={() => setActiveDrugData(index)}
                  >
                    <p>{drugitem?.drugName}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="table-containeer-second">
            <div class="table-heading">
              <h2>Drug Details</h2>
            </div>
            <div class="table-body">
              <div class={'Selected-drug'}>
                <h3>{drugData?.[activeDrugData]?.drugName}</h3>
              </div>
              <div class="Selected-drug-detail">
                <p>{drugData?.[activeDrugData]?.drugDetails}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drugdata;
