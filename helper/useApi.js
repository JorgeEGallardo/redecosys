import { useState, useEffect } from 'react';

function useApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const fetchData = async (url, options) => {
      try {
        fetch(url, options).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(dataRes => {
                setData(dataRes);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
            });
      } catch (error) {
        console.log(error);

      }
    };

  return { data, loading, error, fetchData };
}

export default useApi;