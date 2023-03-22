import cn from 'classnames';
import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
	const router = useRouter();

	const openSecondLevel = (secondCategory: string): void => {
		setMenu && setMenu(menu.map( m => {
			if(m._id.secondCategory === secondCategory) m.isOpened = !m.isOpened;
			return m;
		}));
	};

	const buildFirstLevel = (): JSX.Element => {
		return (
			<div>
				{firstLevelMenu.map(menu => (
				<div key={menu.route}>
					<Link href={`/${menu.route}`}>
						<div className={cn(styles.firstLevel, {
							[styles.firstLevelActive]: menu.id === firstCategory
						})}>
							{menu.icon}
							<span> {menu.name} </span>
						</div>
					</Link>
					{ menu.id === firstCategory && buildSecondLevel(menu.route) }
				</div>))}
			</div>
		);
	};
	
	
	const buildSecondLevel = (route: string): JSX.Element => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => {
					if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) m.isOpened = true;
					return (
						<div key={m._id.secondCategory}>
							<div className={styles.secondCategory} onClick={():void => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
								<div className={cn(styles.secondLevelBlock, {
									[styles.secondLevelBlockOpened]: m.isOpened
								})}>
								{buildThirdLevel(m.pages, route)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};
	
	
	const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element[] => {
		return (
			pages.map(p => (
				<Link href={`/${route}/${p.alias}`} key={p._id} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
					})}>
						{p.category}
				</Link>
			))
		);
	};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	);
};
