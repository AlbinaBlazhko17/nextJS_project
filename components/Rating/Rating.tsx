import cn from 'classnames';
import { forwardRef, useEffect, useState } from 'react';

import { RatingProps } from "./Rating.props";

import StarIcon from './star.svg';

import styles from './Rating.module.css';


export const Rating = forwardRef<HTMLDivElement, RatingProps>(function Rating ({isEditable = false, rating, setRating, className, ...props}: RatingProps, ref): JSX.Element {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(null));

	useEffect(() => {
		constructRating(Math.round(rating));
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

	const changeDisplay = (i: number): void => {
		if(!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onClick = (i: number): void => {
		if(!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	return(
		<div className={className} ref={ref} {...props}>
			{ratingArray.map((r: JSX.Element, i: number) => (<span key={i}>{r}</span>))}
		</div>
	);
});