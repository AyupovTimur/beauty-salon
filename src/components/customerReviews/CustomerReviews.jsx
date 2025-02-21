import { NavLink } from "react-router";
import "./customerReviews.scss";

const reviews = [
  {
    id: 1,
    name: "Анастасия Егорова",
    photo:
      "https://sun1-17.userapi.com/s/v1/ig2/Q6XvoJA55tOawh_T78AsGel-kOsllqzUC8Jk7dVUY3HmK7rmd3BbF2WF94X_5C-jYNgVqa7eWdOa1QMho_fkjZMG.jpg?size=400x400&quality=95&crop=0,0,1080,1080&ava=1", // Замените на реальную ссылку
    text: "Наталья большой профессионал своего дела, рекомендую",
    rating: 5,
  },
  {
    id: 2,
    name: "Мария Петрова",
    photo:
      "https://i.pinimg.com/280x280_RS/1a/b7/40/1ab7403953b8233eaf86d20e23d46157.jpg",
    text: "Очень довольна результатом. Спасибо за профессионализм!",
    rating: 5,
  },
  {
    id: 3,
    name: "Людмила Иванова",
    photo:
      "https://static5.vivoo.ru/datas/photos/800x800/98/73/9fb4fa0bca01a4d3aefdb62ed81f.jpg?1",
    text: "Огромное спасибо Наталье, что сделала все на высоком уровне",
    rating: 5,
  },
];

const CustomerReviews = () => {
  return (
    <div className="customer__reviews">
      <h2>Отзывы клиентов</h2>
      <div className="reviews__list">
        {reviews.map((review) => (
          <div key={review.id} className="review__card">
            <div className="review__header">
              <img
                src={review.photo}
                alt={review.name}
                className="review__photo"
              />
              <div className="review__info">
                <h3>{review.name}</h3>
                <div className="review__rating">
                  {"★".repeat(review.rating).padEnd(5, "☆")}
                </div>
              </div>
            </div>
            <p className="review__text">{review.text}</p>
          </div>
        ))}
      </div>
      <button className="review__otherfeedback">
        Ознакомится со всеми отзывами
        <a href="#"></a>
      </button>
    </div>
  );
};

export default CustomerReviews;
