import { useState, useEffect } from 'react';

import portfolioData from '../assets/Portfolio.json'; 

/**
 * Custom hook to load and manage portfolio data.
 * @returns {Array} The loaded portfolio items.
 */
const usePortfolioData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    try {
      // 1. **Check Data Integrity (Optional but recommended)**
      if (!Array.isArray(portfolioData)) {
        throw new Error("Portfolio data is not an array.");
      }
      

      
      setData(portfolioData);

    } catch (err) {
      console.error("Failed to load portfolio data:", err);
      setError(err.message);
    } finally {
      // 3. **Indicate that loading is complete**
      setLoading(false);
    }
  }, []); 


  return { data, loading, error };
};

export default usePortfolioData;