import Header from '../Components-elements/Header';
import { fetchReviews } from '../Utils/apis';
import { useEffect, useState } from 'react';
import heart from '../Images/heart-icon.svg';
import arrow from '../Images/forward-arrow-icon.svg';
import comments from '../Images/message-icon.svg';

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    return fetchReviews().then((response) => {
      setReviews(response);
      console.log(response);
    });
  }, []);

  return (
    <div>
      <Header />
      <section className="reviews-title">
        <h2>Filter Reviews by Category</h2>
      </section>
      <section className="reviews-all">
        {reviews.map((review) => {
          return (
            <div
              key={review.review_id}
              className="review-block"
              style={{
                backgroundImage: `url(${review.review_img_url})`,
                backgroundSize: `cover`,
              }}
            >
              <div className="review-overlay"></div>
              <div className="review-block-title">
                <h3>{review.title}</h3>
                <p>
                  {review.owner} | {review.created_at}
                </p>
              </div>
              <img src={heart} alt="" className="review-heart"></img>
              <img src={comments} alt="" className="review-comments"></img>
              <img src={arrow} alt="" className="review-arrow"></img>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
