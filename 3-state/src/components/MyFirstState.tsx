import { useState } from "react";

export const MyFirstState = () => {
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setLoading(!loading);
  };

  console.log(loading);

  return (
    <>
      {loading ? <div>Spinner</div> : <span>Datat är hämtat</span>}
      <div>
        <button onClick={handleClick}>Toggla loading</button>
      </div>
    </>
  );
};

// export function MyFirstState() {

// }
