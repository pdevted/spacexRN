import React, { useCallback, useEffect, useState } from 'react';
import { allLaunches } from '../../../apis/launches';
import LaunchesPresenter from './LaunchesPresenter';

function LaunchesContainer() {
  const [loading, setLoading] = useState(true);
  const [launchesError, setLaunchesError] = useState(null);
  const [launches, setLaunches] = useState([]);
  
  const getLaunches = useCallback(async () => {
    try {
      const launches = await allLaunches();
      setLaunches(launches);
      setLoading(false);
    } catch (error) {
      setLaunchesError(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getLaunches();
  }, []);

  return (
    <LaunchesPresenter
      loading={loading}
      launches={launches}
      error={launchesError}
    />
  );
}

export default LaunchesContainer;
