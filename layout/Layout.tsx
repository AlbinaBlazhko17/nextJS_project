import cn from 'classnames';
import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

import styles from './Layout.module.css';


export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return(
		<>
		<Header/>
		<div>
			<Sidebar/>
			<div>
				{children}
			</div>
		</div>
		<Footer/>
		</>
	);
};