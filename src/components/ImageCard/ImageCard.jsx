import s from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <div className={s.img}>
      <img src={image.urls.small} alt={image.alt_description} width="50"></img>
    </div>
  );
};

export default ImageCard;
