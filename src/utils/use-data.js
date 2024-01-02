import { useEffect, useState } from "react";

export function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (url) {
      let ignore = false;
      console.log("use data fetch", url);
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setData(json);
          }
        })
        .catch((e) => console.log(`Error useData ${url} \n${e}`));
      return () => {
        ignore = true;
      };
    }
  }, [url]);
  return data;
}
