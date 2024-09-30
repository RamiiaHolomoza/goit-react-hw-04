import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

// import fetchGallery from "../../services/api.js";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const value = e.target.searchName.value;
    if (value.trim() === "") {
      toast.error("Please enter text to search");
      return;
    }
    onSubmit(value);

    e.target.reset();
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          name="searchName"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
