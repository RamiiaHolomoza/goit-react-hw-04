import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onModalImg }) => {
  return (
    <ul className={s.cardList}>
      {images.map((image) => {
        return (
          <li className={s.card} key={image.id}>
            <ImageCard image={image} onModalImg={onModalImg}></ImageCard>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
