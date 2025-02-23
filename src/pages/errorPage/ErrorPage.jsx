import Error from "../../components/error/Error";
import "./errorPage.scss";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h2 className="errorPage__title">Упс! Такой страницы не существует</h2>
      <Error />
    </div>
  );
};

export default ErrorPage;
