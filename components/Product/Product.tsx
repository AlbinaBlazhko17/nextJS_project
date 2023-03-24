import { ProductProps } from './Product.props';

import styles from './Product.module.css';

export const Product = ({ product, ...props }: ProductProps): JSX.Element => {
	return (
		<div>
			{product.title}
		</div>
	);
};