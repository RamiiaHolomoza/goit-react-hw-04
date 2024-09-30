import { useState, useEffect } from "react";
import "./App.css";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import { fetchGallery } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessege/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalImage, setModalImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (inputValue.trim() === "") {
      return;
    }

    async function getGallery() {
      try {
        setError(false);
        setLoader(true);
        const newGallery = await fetchGallery(inputValue, page);
        console.log(newGallery);
        if (newGallery.images.length === 0) {
          return toast.error(`No results found for request "${inputValue}"`);
        }
        setImages((prevGallery) => [...prevGallery, ...newGallery.images]);
        setTotalPages(newGallery.totalPages);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getGallery();
  }, [page, inputValue]);

  const handleSearch = (newValue) => {
    setInputValue(newValue);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleClickImg = (image) => {
    setModalImage({ regularUrl: image.regularUrl });
    handleOpenModal();
  };

  return (
    <>
      <Toaster />

      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onModalImg={handleClickImg} />
      )}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {!loader && images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isOpen && (
        <ImageModal modalImage={modalImage} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
