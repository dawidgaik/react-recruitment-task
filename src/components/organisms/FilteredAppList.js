import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppList from 'components/molecules/AppList/AppList';
import FilterNav from 'components/molecules/FilterNav/FilterNav';
import { Wrapper } from './FilteredAppList.styles';

const FilteredAppList = () => {
  //set state for all data from API
  const [APIData, setAPIData] = useState([]);
  //set state for filtered data
  const [filteredApps, setFilteredApps] = useState([]);

  //get data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('data.json');
        setAPIData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  //get unique types
  const filterButtons = [
    ...new Set(APIData.map((item) => item.type).filter((item) => item)),
  ];

  //set the first type as default
  useEffect(() => {
    setFilteredApps(filterApps(filterButtons[0]));
  }, [APIData]);

  //filter apps list by type
  const filterApps = (appType) => {
    return APIData.filter((item) => item.type === appType);
  };

  //filter data by version
  const matureApp = filteredApps.filter((item) => parseInt(item.version) >= 1);
  const betaApp = filteredApps.filter((item) => parseInt(item.version) < 1);

  const updateAppsList = (e) => {
    let typeApp = e.target.value;
    setFilteredApps(filterApps(typeApp));
  };

  if (!filteredApps.length > 0) return null;

  return (
    <>
      <Wrapper>
        <h2>List of applications</h2>
        <FilterNav
          filterButtons={filterButtons}
          updateAppsList={updateAppsList}
        />
        <AppList matureApp={matureApp} betaApp={betaApp} />
      </Wrapper>
    </>
  );
};

export default FilteredAppList;
