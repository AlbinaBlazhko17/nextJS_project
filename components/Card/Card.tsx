import cn from 'classnames';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { CardProps } from './Card.props';

import styles from './Card.module.css';

export const Card = motion(forwardRef<HTMLDivElement, CardProps>(function Card({color = 'white', children, className, ...props}: CardProps, ref): JSX.Element {
	return (
		<div className={cn(styles.card, className, {
				[styles.blue]: color = 'blue',
			})}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	);
}));
