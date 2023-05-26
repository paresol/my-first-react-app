import { useEffect, useState } from "react";

const useCustomPost = (url, body) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const customPost = async () => {
      await fetch(url, {
        method: "POST",
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
      if (url && body) customPost();
    }, 1000);
  }, [body, url]);

  return [data, error, loading];
};

export default useCustomPost;
