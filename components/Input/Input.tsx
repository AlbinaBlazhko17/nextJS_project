import cn from 'classnames';
import { forwardRef } from 'react';
import { InputProps } from './Input.props';

import styles from './Input.module.css';


export const Input = forwardRef<HTMLInputElement, InputProps>(function Input ({ className, ...props }: InputProps, ref): JSX.Element {
	return (
		<input className={cn(className, styles.input)} ref={ref} {...props} />
	);
});
