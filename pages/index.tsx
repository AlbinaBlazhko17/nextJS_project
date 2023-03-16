import React, { Component, useState }  from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Button, Htag, P, Rating } from '@/components';
import { withLayout } from '@/layout';

import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

function Home(): JSX.Element {
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
    </>
  );
}

export default withLayout(Home);
