import { useState, useEffect } from "react";
import blogData from "../assets/Blog.json";

/**
 * Custom hook to load, sort, and manage blog data.
 * @param {number} limit - Number of blog items to return (optional)
 * @returns {Object} The loaded blog posts (sorted newest first), loading state, and error.
 */
const useBlogData = (limit = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // 1. Check Data Integrity
      if (!Array.isArray(blogData)) {
        throw new Error("Blog data is not an array.");
      }

      // 2. Sort by publish_date (Newest First)
      // We create a copy using [...blogData] to avoid mutating the original import
      const sortedData = [...blogData].sort((a, b) => {
        return new Date(b.publish_date) - new Date(a.publish_date);
      });

      // 3. Apply limit if provided (on the sorted data)
      const finalData = limit ? sortedData.slice(0, limit) : sortedData;

      setData(finalData);
    } catch (err) {
      console.error("Failed to load blog data:", err);
      setError(err.message);
    } finally {
      // 4. Loading complete
      setLoading(false);
    }
  }, [limit]);

  return { data, loading, error };
};

export default useBlogData;