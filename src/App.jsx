import { useState, useEffect } from "react";
import "./App.css";
import { fetchGallery } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMassege/ErrorMassage";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [gallery, setGallery] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchGallery();
    };
    getData();
  });
  const handleSearch = async () => {
    try {
      setGallery([]);
      setError(false);
      setLoading(true);
      const data = await fetchGallery();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {gallery.length > 0 && <ImageGallery items={gallery} />}
    </div>
  );
}

export default App;
