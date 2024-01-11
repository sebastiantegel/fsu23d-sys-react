export const ConditionalRendering = () => {
  const age = 44;

  let html = <></>;
  if (age >= 20) {
    html = <div>Lorem ipsum</div>;
  } else {
    html = <h2>Du får inte se detta</h2>;
  }

  const numbers: number[] = [1, 1, 2, 3, 5, 8, 13];

  const loading = true;

  return (
    <>
      <div>{html}</div>
      <div>{numbers.length > 5 ? <p>Oj, det var många tal</p> : <></>}</div>
      <div>{loading && <div>Spinner</div>}</div>
    </>
  );
};
