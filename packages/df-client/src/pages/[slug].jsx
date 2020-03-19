import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Container from '@material-ui/core/Container';

import PageContentSection from '~components/PageContentSection';

import sanity from '../utils/sanity';
console.log(sanity);
const { getPagesAndMorePages, getAllPagesWithSlug } = sanity;

export default function Post(props) {
  const { post, morePages, preview } = props;
  const router = useRouter();
  if (!router.isFallback) {
    return <h1>Loading....</h1>;
  }
  if (!post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Container maxWidth="md">
      <PageContentSection>
        <h1>Test</h1>
      </PageContentSection>
    </Container>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPagesAndMorePages(params.slug, preview);
  // console.log('success...', data);
  return {
    props: {
      preview,
      page: data.post || null,
      morePages: data.morePages || null,
    },
  };
}

export async function getStaticPaths() {
  const allPages = await getAllPagesWithSlug();
  console.log(allPages);
  return {
    paths:
      allPages?.map(page => ({
        params: {
          slug: page.slug,
        },
      })) || [],
    fallback: true,
  };
}
