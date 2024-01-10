export const Interpolation = () => {
  const name = "Sebastian";
  const age = 44;
  const isMarried = true;

  return (
    <>
      <h3>{name}</h3>
      <p>{age}</p>
      <input type="checkbox" checked={isMarried} />
    </>
  );
};
