import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components-elements/Header';
import { fetchReviewById } from '../Utils/apis';

const Review = () => {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState({});
  console.log(review_id);

  useEffect(() => {
    return fetchReviewById(review_id).then((response) => {
      setCurrentReview(response);
    });
  }, [review_id]);

  return (
    <div>
      <Header />
      <section className="review-item-title">
        <p>{currentReview.category}</p>
        <h1>{currentReview.title}</h1>
        <p>Review by {currentReview.owner}</p>
      </section>
    </div>
  );
};

export default Review;
