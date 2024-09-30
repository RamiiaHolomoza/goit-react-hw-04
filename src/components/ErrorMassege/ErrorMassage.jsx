import s from "./ErrorMassage.module.css";

export default function ErrorMessage() {
  return (
    <p className={s.error}>
      Error: Opps... Something go wrong. Please check your input and try again!
    </p>
  );
}
