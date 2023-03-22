import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
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
			<div>
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
					{ menu.id === firstCategory && buildSecondLevel(menu.route) }
				</div>))}
			</div>
		);
	};
	
	
	const buildSecondLevel = (route: string): JSX.Element => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondCategory}>{m._id.secondCategory}</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						})}>
							{buildThirdLevel(m.pages, route)}
						</div>
					</div>
				))}
			</div>
		);
	};
	
	
	const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element[] => {
		return (
			pages.map(p => (
				<a href={`/${route}/${p.alias}`} key={p._id} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: false
				})}>
					{p.category}
				</a>
			))
		);
	};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	);
};
