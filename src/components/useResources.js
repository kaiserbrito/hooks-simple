import { useState, useEffect } from "react";
import axios from "axios";

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  // Defined a function and call it right away instead of creating another function to be called
  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
