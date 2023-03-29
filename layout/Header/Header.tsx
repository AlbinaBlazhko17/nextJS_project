import cn from 'classnames';
import { HeaderProps } from './Header.props';

import Logo from '../logo.svg';

import styles from './Header.module.css';
import { ButtonIcon } from '@/components/ButtonIcon/ButtonIcon';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={cn(className, styles.header)} {...props}>
			<Logo />
			<ButtonIcon appearance='white' icon='burger'/>
		</header>
	);
};