// Review.js
import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Review = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/reviews/', {
        product: productId,
        rating,
        comment,
      });
      console.log('Review submitted:', response.data);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-8 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-700">Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your review here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

Review.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default Review;
