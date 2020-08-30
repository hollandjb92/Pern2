import React from 'react'
import StarRating from './StarRating'

const Reviews = () => {
	return (
		<div className="row row-cols-3 mb-2">
			<div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
				<div className="card-header d-flex justify-content-between">
					<span>Jordan</span>
					<span><StarRating rating={3}/></span>
				</div>
				<div className="card-body">
					<p className="card-text">This restaurant was pretty good</p>
				</div>
			</div>
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
			</div>
		</div>
	)
}

export default Reviews
