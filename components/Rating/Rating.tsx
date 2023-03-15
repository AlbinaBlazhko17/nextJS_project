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
				<span key={i}
					className={cn(styles.star, className, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable,
					})}
					onMouseEnter={(): void => changeDisplay(i + 1)}
					onMouseLeave={(): void => changeDisplay(rating)}
					onClick={():void => onClick(i + 1)}
				>
					<StarIcon key={i} />
				</span>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number): undefined | void => {
		if(!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onClick = (i: number): undefined | void => {
		if(!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	return(
		<div {...props}>
			{ratingArray.map((r: JSX.Element, i: number) => (<span key={i}>{r}</span>))}
		</div>
	);
};