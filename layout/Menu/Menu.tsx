import cn from 'classnames';
import { motion } from 'framer-motion';
import { useContext, KeyboardEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppContext } from '@/context/app.context';
import { PageItem } from '@/interfaces/menu.interface';
import { firstLevelMenu } from '@/helpers/helpers';

import styles from './Menu.module.css';


export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();
	
	const variants = {
		visible: {
			marginBottom: 10,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1
			}
		},
		hidden: {
			marginBottom: 0
		}
	};

	const variantsChildren = {
		visible: {
			ease: "easeOut",
			opacity: 1,
			height: 'auto',
			marginBottom: 10,
			transition: {
				height: {
					duration: 0.4,
				},
				opacity: {
					duration: 0.25,
					delay: 0.15,
				}
			}
		},
		hidden: {
			marginBottom: 0,
			opacity: 0,
			height: 0
		}
	};

	const opendSecondLevelKey = (key: KeyboardEvent, secondCategory: string): void => {
		if(key.code === 'Space' || key.code === 'Enter'){
			key.preventDefault();
			openSecondLevel(secondCategory);
		}
	};

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
							<div
								tabIndex={0}
								onKeyDown={(e: KeyboardEvent): void => opendSecondLevelKey(e, m._id.secondCategory)}
								className={styles.secondCategory}
								onClick={():void => openSecondLevel(m._id.secondCategory)}
							>{m._id.secondCategory}</div>
								<motion.div
									layout
									variants={variants}
									initial={m.isOpened ? 'visible': 'hidden'}
									animate={m.isOpened ? 'visible': 'hidden'}
									className={cn(styles.secondLevelBlock)}
								>
									{buildThirdLevel(m.pages, route, m.isOpened ?? false)}
								</motion.div>
						</div>
					);
				})}
			</div>
		);
	};
	
	
	const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean): JSX.Element[] => {
		return (
			pages.map(p => (
				<motion.div key={p._id} variants={variantsChildren}>
					<div>
						<Link tabIndex={isOpened ? 0 : -1} href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
										[styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
								})}>
								{p.category}
						</Link>
					</div>
				</motion.div>
			))
		);
	};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	);
};
