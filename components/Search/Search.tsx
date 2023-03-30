import cn from 'classnames';
import { useState, KeyboardEvent } from 'react';
import { useRouter } from 'next/router';

import { SearchProps } from "./Search.props";
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

import SearchIcon from './Search.svg';

import styles from './Search.module.css';


export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const goToSearch = (): void => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
	};

	const handleKeyDown = (e: KeyboardEvent): void => {
		console.log('Work');
		if(e.key === 'Enter' || e.key === 'return') {
			console.log('Enter');
			goToSearch();
		}
	};

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
				placeholder='Поиск...'
				value={search}
				onChange={(e): void => setSearch(e.target.value)}
				className={styles.input}
				onKeyDown={handleKeyDown}
			/>
			<Button 
				appearance='primary'
				className={styles.button}
				onClick={goToSearch}
			>
				<SearchIcon alt='search'/>
			</Button>
		</div>
	);
};