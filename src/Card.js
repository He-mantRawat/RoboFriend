import React, { Component } from 'react';


const Card = (props) => {
	const { name, email, id } = props;
	return (
		<div className='bg-light-green dib br3 pa3 margin grow bw2 shadow-5'>
			<img alt='robots' src='https://robohash.org/${id}'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;