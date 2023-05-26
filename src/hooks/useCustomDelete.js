import { useEffect, useState } from "react";

const useCustomDelete = (url, id, body) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const customDelete = async () => {
      await fetch(url + id, {
        method: "DELETE",
        body: JSON.stringify(body),
      })
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
      if (url && id) customDelete();
    }, 1000);
  }, [body, id, url]);

  return [data, error, loading];
};

export default useCustomDelete;
