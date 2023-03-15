import cn from 'classnames';
import { RatingProps } from "./Rating.props";
import StarIcon from './star.svg';

import styles from './Rating.module.css';
import { useEffect, useState } from 'react';

export const Rating = ({isEditable = false, rating, setRating, className, ...props}: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number): void => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) =>{
			return (
				<StarIcon key={i} className={cn(styles.star, className, {
					[styles.filled]: i < currentRating,
				})}/>
			);
		});
		setRatingArray(updatedArray);
	};

	return(
		<div {...props}>
			{ratingArray.map((r: JSX.Element, i: number) => (<span key={i}>{r}</span>))}
		</div>
	);
};