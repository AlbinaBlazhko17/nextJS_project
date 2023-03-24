import { ProductProps } from './Product.props';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { priceUa } from '@/helpers/helpers';
import { Divider } from '../Divider/Divider';

import styles from './Product.module.css';




export const Product = ({ product, ...props }: ProductProps): JSX.Element => {
	return (
		<Card className={styles.product}>
			<div className={styles.logo}>
				<img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
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
			<div className={styles.tag}>{product.categories.map(c => (<Tag key={c} color='ghost' className={styles.category}>{c}</Tag>))}</div>
			<div className={styles.priceTitle}>цена</div>
			<div className={styles.creditTitle}>в кредит</div>
			<div className={styles.rateTitle}>{product.reviewCount + ' '}отзывов</div>
			<Divider className={styles.hr} />
			<div className={styles.description}>{product.description}</div>
			<div className={styles.features}>Features</div>
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
			<Divider className={styles.hr} />
			<div className={styles.actions}>
				<Button appearance='primary'>Узнать подробнее</Button>
				<Button appearance='ghost' arrow='right' className={styles.reviewButton}>Читать отзывы</Button>
			</div>
		</Card>
	);
};