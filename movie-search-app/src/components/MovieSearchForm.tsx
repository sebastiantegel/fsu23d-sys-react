import { useState, ChangeEvent, FormEvent } from "react";

interface IMovieSearchFormProps {
  search: (text: string) => void;
}

export const MovieSearchForm = (props: IMovieSearchFormProps) => {
  const [userSearchText, setUserSearchText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserSearchText(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.search(userSearchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={userSearchText} onChange={handleChange} />
      <button>Sök</button>
    </form>
  );
};
