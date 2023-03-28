import cn from 'classnames';
import { forwardRef } from 'react';
import { InputProps } from './Input.props';

import styles from './Input.module.css';


export const Input = forwardRef<HTMLInputElement, InputProps>(function Input ({ className, error, ...props }: InputProps, ref): JSX.Element {
	return (
		<div className={cn(styles.inputWrapper, className)}>
			<input className={cn(styles.input, {
				[styles.error]: error
			})} ref={ref} {...props} />
			{error && <div className={styles.errorMessage}>{error.message}</div>}
		</div>
	);
});
