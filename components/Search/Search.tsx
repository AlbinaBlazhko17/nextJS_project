import cn from 'classnames';
import { useState } from 'react';
import { SearchProps } from "./Search.props";
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

import SearchIcon from './Search.svg';

import styles from './Search.module.css';



export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
				placeholder='Поиск...'
				value={search}
				onChange={(e): void => setSearch(e.target.value)}
				className={styles.input}
			/>
			<Button 
				appearance='primary'
				className={styles.button}
			>
				<SearchIcon/>
			</Button>
		</div>
	);
};