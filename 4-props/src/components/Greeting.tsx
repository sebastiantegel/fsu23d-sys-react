interface IGreetingProps {
  greeting: string;
}

export const Greeting = ({ greeting }: IGreetingProps) => {
  return (
    <div>
      <q>{greeting}</q>
    </div>
  );
};
