import { FunctionComponent } from 'react';
import cn from 'classnames';
import { LayoutProps } from './Layout.props';
import { Header, Sidebar, Footer } from './index';

import styles from './Layout.module.css';


const Layout = ({ children }: LayoutProps): JSX.Element => {
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

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element{
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};