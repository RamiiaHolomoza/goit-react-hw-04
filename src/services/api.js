import axios from "axios";

export const fetchGallery = async (inputValue, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    params: {
      query: inputValue,
      page: page,
      per_page: 24,
      client_id: "_tql8dGSzW0XHhzwEGiK026GpEHa7HoEg3bQVG5DpFs",
    },
  });

  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
};
