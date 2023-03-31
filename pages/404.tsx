import { withLayout } from "@/layout";

import styles from './Error404.module.css';
import { Button } from "@/components";

function Error404 (): JSX.Element {
	return (
		<div className={styles.errorWrapper}>
			<h1 className={styles.error}>Ошибка 404</h1>
			<Button appearance="primary" className={styles.button}>Вернуться на главную</Button>
		</div>
	);
}

export default withLayout(Error404);