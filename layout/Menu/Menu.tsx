import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/toppage.interface';

import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';

import styles from './Menu.module.css';


const firstLevelMenu: FirstLevelMenuItem[] = [
	{route: 'courses', name: 'Курси', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
	{route: 'services', name: 'Сервіси', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
	{route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
	{route: 'products', name: 'Продукти', icon: <ProductsIcon/>, id: TopLevelCategory.Products},
];



export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = (): JSX.Element => {
		return (
		<>
			{firstLevelMenu.map(menu => (
			<div key={menu.route}>
				<a href={`/${menu.route}`}>
					<div className={cn(styles.firstLevel, {
						[styles.firstLevelActive]: menu.id === firstCategory
					})}>
						{menu.icon}
						<span> {menu.name} </span>
					</div>
				</a>
				{ buildSecondLevel() }
			</div>))}
		</>
		);
	};
	
	
	const buildSecondLevel = (): JSX.Element => {
		return (
		<>
		</>
		);
	};
	
	
	const buildThirdLevel = (): JSX.Element => {
		return (
		<>
		</>
		);
	};

	return (
		<div className={styles.menu}>
			<ul>
			{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</div>
	);
};
