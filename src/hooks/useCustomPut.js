import { useEffect, useState } from "react";

const useCustomPut = (url, id, body) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const customPut = async () => {
      await fetch(url + id, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
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
      if (url && id && body) customPut();
    }, 1000);
  }, [body, id, url]);

  return [data, error, loading];
};

export default useCustomPut;
