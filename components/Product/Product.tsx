import Image from 'next/image';
import cn from 'classnames';
import { forwardRef, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ProductProps } from './Product.props';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfNum, priceUa } from '@/helpers/helpers';
import { Divider } from '../Divider/Divider';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';

import styles from './Product.module.css';


export const Product = motion(forwardRef<HTMLDivElement, ProductProps>(function Product({ product, className, ...props }: ProductProps, ref): JSX.Element {
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
	const reviewRef = useRef<HTMLDivElement>(null);

	const variants = {
		visible: {
			marginTop: -30,
			opacity: 1,
			height: 'auto',
			transition: {
				height: {
					duration: 0.4,
				},
				opacity: {
					duration: 0.25,
					delay: 0.15,
				}
			}
		},
		hidden: {
			marginTop: 0,
			opacity: 0,
			height: 0
		},
	};

	const scrollToReview = (): void => {
		setIsReviewOpened(true);
		reviewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	return (
		<div className={className} {...props} ref={ref}>
			<Card className={styles.product}>
				<div className={styles.logo}>
					<Image
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						alt={product.title}
						width={70}
						height={70}
					/>
				</div>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>
					{priceUa(product.price)}
					{product.oldPrice && <Tag color='green' className={styles.oldPrice}>{priceUa(product.price - product.oldPrice)}</Tag>}
				</div>
				<div className={styles.credit}>
					{priceUa(product.credit) + ' '}<span className={styles.month}>/мес</span>
				</div>
				<div className={styles.rating}><Rating rating={product.initialRating} /></div>
				<div className={styles.tags}>{product.categories.map(c => (<Tag key={c} color='ghost' className={styles.category}>{c}</Tag>))}</div>
				<div className={styles.priceTitle}>цена</div>
				<div className={styles.creditTitle}>в кредит</div>
				<div className={styles.rateTitle}><a href="#ref" onClick={scrollToReview}>{product.reviewCount + ' '} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])} </a></div>
				<Divider className={styles.hr} />
				<div className={styles.description}>{product.description}</div>
				<div className={styles.features}>
					{product.characteristics.map(c => (
						<div className={styles.characteristics} key={c.name}>
							<span className={styles.characteristicsName}>{c.name}</span>
							<span className={styles.characteristicsDots}></span>
							<span className={styles.characteristicsValue}>{c.value}</span>
						</div>
					))}
				</div>
				<div className={styles.advBlock}>
					{product.advantages && <div className={styles.advantages}>
						<div className={styles.advTitle}>Преимущества</div>
						<div>{product.advantages}</div>
					</div>}
					{product.disAdvantages && <div className={styles.disadvantages}>
						<div className={styles.advTitle}>Недостатки</div>
						<div>{product.disAdvantages}</div>
					</div>}
				</div>
				<Divider className={cn(styles.hr, styles.hr2)} />
				<div className={styles.actions}>
					<Button appearance='primary'>Узнать подробнее</Button>
					<Button
						appearance='ghost'
						arrow={isReviewOpened? 'down': 'right'}
						className={styles.reviewButton}
						onClick={():void => setIsReviewOpened(!isReviewOpened)}
					>
						Читать отзывы</Button>
				</div>
			</Card>
			<motion.div
				variants={variants}
				initial={'hidden'}
				animate={isReviewOpened? 'visible' : 'hidden'}
			>
				<AnimatePresence mode="wait">
					{isReviewOpened && (
						<Card
							color={'blue'}
							className={styles.reviews}
						>
							{product.reviews.map(r => (
								<div key={r._id}>
									<Review review={r}/>
									<Divider />
								</div>
							))}
							<ReviewForm productId={product._id} /> 
						</Card>)
					}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}));