import React from 'react'
import StarRating from './StarRating'

const Reviews = ({reviews}) => {
	return (
		<div  className="row row-cols-3 mb-2">
			{reviews.map(review => {return (
				<div key={review.id} className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
				<div className="card-header d-flex justify-content-between">
			<span>{review.name}</span>
					<span><StarRating rating={review.rating}/></span>
				</div>
				<div className="card-body">
					<p className="card-text">{review.review}</p>
				</div>
			</div>
			)		
			})}
			{/* 
			<div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
				<div className="card-header d-flex justify-content-between">
					<span>Julie</span>
					<span><StarRating rating={5}/></span>
				</div>
				<div className="card-body">
					<p className="card-text">I love this place!!!</p>
				</div>
			</div>
			<div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
				<div className="card-header d-flex justify-content-between">
					<span>Amanda</span>
					<span><StarRating rating={2}/></span>
				</div>
				<div className="card-body">
					<p className="card-text">Crappy service</p>
				</div>
			</div>
			<div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
				<div className="card-header d-flex justify-content-between">
					<span>Steve</span>
					<span><StarRating rating={5}/></span>
				</div>
				<div className="card-body">
					<p className="card-text">My go to restaurant</p>
				</div>
			</div> */}
		</div>
	)
}

export default Reviews
