import React, { Component, useState }  from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter, Unkempt } from 'next/font/google';
import axios, { AxiosResponse } from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Button, Htag, Input, P, Rating, Textarea } from '@/components';
import { withLayout } from '@/layout';
import { MenuItem } from '@/interfaces/menu.interface';
import { API } from '@/helpers/api';

import styles from '@/styles/Home.module.css';


const inter = Inter({ subsets: ['latin'] });

function Home({ menu }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag='h1'> Children </Htag>
			<Button appearance='primary' arrow='right'>Button Primary</Button>
			<Button appearance='ghost' arrow='right'>Button Ghost</Button>
			<P textSize='S'>Small paragraph</P>
			<P>Medium paragraph</P>
			<P textSize='L'>Large paragraph</P>
			<Rating rating={rating} isEditable setRating={setRating}/>
			<Input placeholder='Имя'/>
			<Textarea placeholder='Текст отзыва' />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem>(API.topPage.find, {
		firstCategory
	});
	return {
		props:  {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory?: number;
}

