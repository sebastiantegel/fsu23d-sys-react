import { useEffect, useState } from "react";

export const Effect = () => {
  const [dummy, setDummy] = useState(false);

  useEffect(() => {
    console.log("Hej");
    // setDummy(!dummy);
  });

  return <button onClick={() => setDummy(!dummy)}>Klicka</button>;
};
