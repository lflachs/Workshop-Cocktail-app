import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((results) => {
        setResult(results);
        setLoading(false);
      })
      .catch((err) => {
        setErrors(true);
        setLoading(false);
      });
  }, []);

  return [result, loading, errors];
};
export default useFetch;
