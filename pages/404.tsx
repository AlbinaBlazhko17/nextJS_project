import React from 'react';
import Link from 'next/link';

import { Button } from '../components';
import { withLayout } from '../layout/Layout';


import styles from './Error404.module.css';

export function Error404 (): JSX.Element {
	return (
		<div className={styles.errorWrapper}>
			<h1 className={styles.error}>Ошибка 404</h1>
			<Button appearance="primary" className={styles.button}>
				<Link href='/courses'>
					Вернуться на главную
				</Link>
			</Button>
		</div>
	);
}

export default withLayout(Error404);