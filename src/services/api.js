import axios from "axios";

export const fetchGallery = async () => {
  const { data } = await axios.get(
    "https://api.unsplash.com/photos/?client_id=_tql8dGSzW0XHhzwEGiK026GpEHa7HoEg3bQVG5DpFs"
  );

  return data;
};
