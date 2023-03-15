import cn from 'classnames';
import { PProps } from './P.props'; 

import styles from './P.module.css';

export const P = ({textSize = 'M', children, className, ...props}: PProps): JSX.Element => {
	return (
		<p className={cn(styles.p, className ,{
			[styles.small]: textSize === 'S',
			[styles.medium]: textSize === 'M',
			[styles.large]: textSize === 'L',
		})}
		{...props}>
			{children}
		</p>
	);
};