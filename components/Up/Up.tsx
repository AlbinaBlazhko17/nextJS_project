import cn from 'classnames';

import UpIcon from './up.svg';

import styles from './Up.module.css';

export const Up = (): JSX.Element => {
	const scrollToTop = (): void => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<button className={styles.up} onClick={scrollToTop}>
			<UpIcon/>
		</button>
	);
};