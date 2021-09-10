import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController(); // need to study more about AbortCntroller

    // used timeout to mimic the fetch from api
    setTimeout(() => {
      /*const fetchData =*/ (async () => {
        try {
          const res = await fetch(url, { signal: abortCont.signal });
          const data = await res.json().then((data) => data);
          setData(data);
          setIsLoading(false);
        } catch (e) {
          if (e.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            alert(e);
          }
        }
      })();
    }, 1000);
    // fetchData();
    return () => abortCont.abort(); // has some doubt about cleanup functions
  }, [url]);
  return { data, isLoading };
};

export default useFetch;
