import { useEffect, useState } from "react"

function useEstateData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async() => {
      const response = await fetch('/estateData.json');
      const userData = await response.json();
      setData(userData);
    })()
  },[])
  return { data };
}

export default useEstateData