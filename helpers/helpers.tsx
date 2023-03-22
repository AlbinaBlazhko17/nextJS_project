import { TopLevelCategory } from '@/interfaces/toppage.interface';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';

import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{route: 'courses', name: 'Курси', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
	{route: 'services', name: 'Сервіси', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
	{route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
	{route: 'products', name: 'Продукти', icon: <ProductsIcon/>, id: TopLevelCategory.Products},
];

export const priceUa = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₴');
