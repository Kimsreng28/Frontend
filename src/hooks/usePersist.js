import { useEffect, useState } from "react";

const usePersist = () => {
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem("persist")) || false
  );

  useEffect(() => {
    localStorage.setItem("presist", JSON.stringify(persist));
  }, [persist]);

  return [persist, setPersist];
};

export default usePersist;
