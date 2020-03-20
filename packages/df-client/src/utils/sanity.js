import sanityClient from '@sanity/client';
import sanityImage from '@sanity/image-url';

const options = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  dataset: 'production',
  projectId: 'vrxmsjtn',
  useCdn: process.env.NODE_ENV === 'production',
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
};

const client = sanityClient(options);
export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const getUniquePosts = posts => {
  const slugs = new Set();
  return posts.filter(post => {
    if (slugs.has(post.slug)) {
      return false;
    }
    slugs.add(post.slug);
    return true;
  });
};

const getUniquePages = pages => {
  const slugs = new Set();
  return pages.filter(page => {
    if (slugs.has(page.slug)) {
      return false;
    }
    slugs.add(page.slug);
    return true;
  });
};

const pageFields = `
  title,
  tags,
  'slug': slug.current,
  'author': author->{name, 'picture': picture.asset->url},
`;

const postFields = `
  name,
  title,
  date,
  excerpt,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'picture': picture.asset->url},
`;

const getClient = preview => (preview ? previewClient : client);

const imageBuilder = sanityImage(client);

const getPreviewPostBySlug = async slug => {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(date desc){
      ${postFields}
      content
    }`,
    { slug },
  );
  return data[0];
};

const getPreviewPageBySlug = async slug => {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(date desc){
      ${pageFields}
      content
    }`,
    { slug },
  );
  return data[0];
};

const getAllPostsWithSlug = async () => {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
};

const getAllPagesWithSlug = async () => {
  const data = await client.fetch(`*[_type == "page"]{ 'slug': slug.current }`);
  return data;
};

const getAllPostsForHome = async preview => {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(date desc, _updatedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
};

const getPostAndMorePosts = async (slug, preview) => {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
      }`,
        { slug },
      )
      .then(res => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${postFields}
        content,
      }[0...2]`,
      { slug },
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
};

const getPagesAndMorePages = async (slug, preview) => {
  const curClient = getClient(preview);
  const [page, morePages] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "page" && slug.current == $slug] | order(_updatedAt desc) {
        ${pageFields}
        content,
      }`,
        { slug },
      )
      .then(res => res?.[0]),
    curClient.fetch(
      `*[_type == "page" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${pageFields}
        content,
      }[0...2]`,
      { slug },
    ),
  ]);
  return { page, morePosts: getUniquePages(morePages) };
};

module.exports = {
  getPostAndMorePosts,
  getPagesAndMorePages,
  getAllPostsForHome,
  getAllPostsWithSlug,
  getAllPagesWithSlug,
  imageBuilder,
  getPreviewPostBySlug,
};
