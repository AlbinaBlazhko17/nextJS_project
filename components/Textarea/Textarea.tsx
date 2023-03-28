import cn from 'classnames';
import { TextareaProps } from './Textarea.props';

import styles from './Textarea.module.css';
import { forwardRef } from 'react';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ className, ...props }: TextareaProps, ref): JSX.Element {
	return (
		<textarea className={cn(className, styles.textarea)} ref={ref} {...props} />
	);
});