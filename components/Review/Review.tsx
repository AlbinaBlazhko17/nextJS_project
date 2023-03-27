import cn from 'classnames';
import { ru } from 'date-fns/locale';
import { format } from 'date-fns';

import { ReviewProps } from './Review.props';
import { Rating } from '../Rating/Rating';

import UserIcon from './user.svg';

import styles from './Review.module.css';


export const Review = ({ review, className, ...props}: ReviewProps): JSX.Element => {
	const {name, title, createdAt, rating, description} = review;

	return (
		<div className={cn(styles.review, className)}
			{...props}
		>
			<UserIcon className={styles.img} />
			<div className={styles.title}>
				<span className={styles.name}>{name}:</span>&nbsp;&nbsp;
				<span>{title}</span>
			</div>
			<div className={styles.date}>
				{format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
			</div>
			<div className={styles.rating}>
				<Rating rating={rating} />
			</div>
			<div className={styles.description}>{description}</div>
		</div>
	);
};
