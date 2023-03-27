import cn from 'classnames';
import { ReviewFormProps } from './ReviewForm.props';

import styles from './ReviewForm.module.css';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';


export const ReviewForm = ({ productId, className, ...props}: ReviewFormProps): JSX.Element => {
	return (
		<div className={cn(styles.reviewForm, className)}
		{...props}>
			<Input placeholder='Имя' />
			<Input placeholder='Заголовок отзыва' className={styles.title}/>
			<div className={styles.rating}>
				<span>Оценка:</span>
				<Rating rating={0} isEditable/>
			</div>
			<Textarea placeholder='Текст отзыва' className={styles.description} />
			<div className={styles.submit}>
				<Button appearance='primary'>Отправить</Button>
				<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
			</div>
		</div>
	);
};
