import { Circles } from "react-loader-spinner";

export default function Loader() {
  return (
    <Circles
      height="80"
      width="80"
      color="rgb(236, 115, 131)"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
