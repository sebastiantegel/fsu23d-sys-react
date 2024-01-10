export const Button = () => {
  let inputValue = "qwerty";

  const handleClick = () => {
    console.log("Klickat");
    inputValue = (document.getElementById("input1") as HTMLInputElement).value;
    console.log(inputValue);
  };

  return (
    <>
      <input type="text" id="input1" />
      <button onClick={handleClick}>Klicka här</button>
      <p>{inputValue}</p>
    </>
  );
};
