import cn from 'classnames';
import axios from 'axios';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { ReviewFormProps } from './ReviewForm.props';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { IReviewForm, IReviewSendResponce } from './ReviewForm.interface';
import { API } from '@/helpers/api';

import CloseIcon from './close.svg';

import styles from './ReviewForm.module.css';


export const ReviewForm = ({ productId, className, ...props}: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [isError, setIsError] = useState<string>();

	const onSubmit = async (formData: IReviewForm): Promise<void> => {
		try {
			const { data } = await axios.post<IReviewSendResponce>(API.review.createDemo, {
				...formData,
				productId
			});
			console.log(data.message);
			if(data.message) {
				setIsSuccess(true);
				reset();
			}
			else setIsError('Smth went wrong');
		} catch (e) {
			if(e instanceof Error) setIsError(e.message);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} >
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
			{isSuccess && 
				<div className={cn(styles.success, styles.panel)}>
					<div className={styles.successTitle}>Ваш отзыв отправлен</div>
					<div>
						Спасибо, ваш отзыв будет опубликован после закрытия
					</div>
					<CloseIcon className={styles.closeSuccess} onClick={():void => setIsSuccess(false)} />
				</div>
			}

			{isError && 
				<div className={cn(styles.error, styles.panel)}>
					Что-то пошло не так, обновите страницу
					<CloseIcon className={styles.closeError} onClick={():void => setIsError(undefined)} />
				</div>
			}
		</form>
	);
};
