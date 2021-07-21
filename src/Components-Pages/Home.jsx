import Header from '../Components-elements/Header';
import { fetchReviews } from '../Utils/apis';
import { useEffect, useState } from 'react';
import heart from '../Images/heart-icon.svg';
import arrow from '../Images/forward-arrow-icon.svg';
import comments from '../Images/message-icon.svg';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    return fetchReviews().then((response) => {
      setReviews(response);
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
            <Link to={`/reviews/${review.review_id}`} key={review.review_id}>
              <div
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
                    {review.owner} |{' '}
                    {moment(review.created_at).format('Do MMM YY')}
                  </p>
                </div>
                <p className="review-votes">{review.votes}</p>
                <img src={heart} alt="" className="review-heart"></img>
                <p className="review-comment-count">{review.comment_count}</p>
                <img src={comments} alt="" className="review-comments"></img>
                <img src={arrow} alt="" className="review-arrow"></img>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
