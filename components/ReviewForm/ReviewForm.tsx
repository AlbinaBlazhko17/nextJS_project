import cn from 'classnames';
import { Controller, useForm } from 'react-hook-form';

import { ReviewFormProps } from './ReviewForm.props';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { IReviewForm } from './ReviewForm.interface';

import CloseIcon from './close.svg';

import styles from './ReviewForm.module.css';



export const ReviewForm = ({ productId, className, ...props}: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

	const onSubmit = (data: IReviewForm): void => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)}
				{...props}
			>
				<Input
					{...register('name', {required: { value: true, message: 'Заполните имя' }})}
					placeholder='Имя'
					error={errors.name}
				/>
				<Input
					{...register('title', {required: { value: true, message: 'Заполните заголовок'}})} placeholder='Заголовок отзыва'
					className={styles.title}
					error={errors.title}
				/>
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						rules={{required: { value: true, message: 'Укажите рейтинг'}}}
						name='rating'
						render={({ field }): JSX.Element => (
							<Rating
								rating={field.value}
								ref={field.ref}
								error={errors.rating}
								isEditable
								setRating={field.onChange}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description', {required: { value: true, message: 'Заполните текст'}})}
					placeholder='Текст отзыва'
					error={errors.description}
					className={styles.description}
				/>
				<div className={styles.submit}>
					<Button appearance='primary'>Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>
			<div className={styles.success}>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>
					Спасибо, ваш отзыв будет опубликован после закрытия
				</div>
				<CloseIcon className={styles.close} />
			</div>
		</form>
	);
};
