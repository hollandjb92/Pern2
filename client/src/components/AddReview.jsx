import React, { useState } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { useParams } from 'react-router-dom';

const AddReview = () => {
	const {id} = useParams();

	const [name, setName] = useState("");
	const [rating, setRating] = useState("Rating");
	const [reviewText, setReviewText] = useState("");

	const handleSubmitReview = async event => {
		event.preventDefault();
		try {
			const response = await RestaurantFinder.post(`/${id}/addReview`, {
				name,
				rating,
				review: reviewText
			});
			
		} catch (err) {
			console.error(err);
		}

		window.location.reload(true);
	};

	return (
		<div className="mb-2">
			<form>
				<div className="form-row">
					<div className="form-group col-8">
						<label htmlFor="name">Name</label>
						<input value={name} onChange={e => setName(e.target.value)}type="text" id="name" placeholder="Name" className="form-control"/>
					</div>
					<div className="form-group col-4">
						<label htmlFor="rating">Rating</label>
						<select value={rating}  onChange={e => setRating(e.target.value)} id="rating" className="custom-select">
							<option disabled>Rating</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="review">Review</label>
					<textarea value={reviewText}  onChange={e => setReviewText(e.target.value)} id="review" className="form-control">This is a Review</textarea>
				</div>
				<div type="submit" onClick ={handleSubmitReview} className="btn btn-primary">Submit</div>
			</form>
			
		</div>
	)
}

export default AddReview
