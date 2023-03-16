import cn from 'classnames';
import { format } from 'date-fns';
import { FooterProps } from './Footer.props';

import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.wrapper)} {...props} >
			<div>
				OwlTop © 2022 - {format(new Date(), 'yyyy')} All right reserved
			</div>
			<a href='#' target='_blank' rel='noopener noreferrer'>User Agreement</a>
			<a href='#' target='_blank' rel='noopener noreferrer'>Private Policy</a>
		</footer>
	);
};