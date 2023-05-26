import { useEffect, useState } from "react";

const useCustomFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const customFetch = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((e) => {
          setError(e);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    setTimeout(() => {
      if (url) customFetch();
    }, 1000);
  }, [url]);

  return [data, error, loading];
};

export default useCustomFetch;
