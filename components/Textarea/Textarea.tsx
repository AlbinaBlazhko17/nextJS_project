import cn from 'classnames';
import { TextareaProps } from './Textarea.props';

import styles from './Textarea.module.css';
import { forwardRef } from 'react';

export const Textarea = forwardRef<HTMLAreaElement, TextareaProps>(function Textarea({ className, ...props }: TextareaProps): JSX.Element {
	return (
		<textarea className={cn(className, styles.textarea)} {...props} />
	);
});