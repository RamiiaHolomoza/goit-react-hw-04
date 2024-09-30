import s from "./ImageCard.module.css";

const ImageCard = ({ image, onModalImg }) => {
  return (
    <div>
      <img
        className={s.img}
        src={image.urls.small}
        alt={image.alt_description}
        width="50"
        onClick={() => {
          onModalImg({
            regularUrl: image.urls.regular,
          });
        }}
      ></img>
    </div>
  );
};

export default ImageCard;
