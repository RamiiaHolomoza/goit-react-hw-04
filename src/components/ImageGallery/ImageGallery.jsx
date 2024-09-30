import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.cardList}>
      {images.map((image) => {
        return (
          <li className={s.card} key={image.id}>
            <ImageCard image={image}></ImageCard>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
