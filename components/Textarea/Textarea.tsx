import cn from 'classnames';
import { forwardRef } from 'react';

import { TextareaProps } from './Textarea.props';

import styles from './Textarea.module.css';


export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ className, error, ...props }: TextareaProps, ref): JSX.Element {
	return (
		<div className={cn(styles.textareaWrapper, className)}>
			<textarea className={cn(styles.textarea, {
				[styles.error]: error
			})} ref={ref} {...props} />
			{error && <div className={styles.errorMessage}>{ error.message }</div>}
		</div>
	);
});