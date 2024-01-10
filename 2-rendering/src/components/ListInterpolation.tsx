export const ListInterpolation = () => {
  const numbers: number[] = [1, 1, 2, 3, 5, 8, 13];

  // for-loop
  //   const lis: JSX.Element[] = [];

  //   for (let i = 0; i < numbers.length; i++) {
  //     lis.push(<li>{numbers[i]}</li>);
  //   }

  // map
  //   const lis = numbers.map((value, i) => {
  //     return <li key={i}>{value}</li>;
  //   });

  //   return <ul>{lis}</ul>;

  // map i html
  return (
    <ul>
      {numbers.map((value, i) => (
        <li key={i}>{value}</li>
      ))}
    </ul>
  );
};
