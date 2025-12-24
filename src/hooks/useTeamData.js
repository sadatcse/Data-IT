import { useState, useEffect } from 'react';

import teamData from '../assets/Team.json';

/**
 * Custom hook to load and manage team data.
 * @returns {Object} The loaded team members, loading state, and error.
 */
const useTeamData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // 1. Check Data Integrity
      if (!Array.isArray(teamData)) {
        throw new Error('Team data is not an array.');
      }

      setData(teamData);
    } catch (err) {
      console.error('Failed to load team data:', err);
      setError(err.message);
    } finally {
      // 2. Loading complete
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};

export default useTeamData;
