const loremIpsum = `
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam libero nibh, ut porta dolor tincidunt non. Aliquam feugiat risus vitae orci efficitur, vitae egestas metus rhoncus. Donec eleifend eros eu metus efficitur feugiat et id ligula. Sed elit lorem, volutpat eget ipsum facilisis, scelerisque blandit lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean aliquet efficitur nibh. Maecenas quis rhoncus arcu. Aenean id leo sed nunc vulputate suscipit et sit amet ante.
  </p>
  <p>
  In ipsum sapien, efficitur nec efficitur vitae, facilisis a enim. Pellentesque aliquet nisi dui, vel bibendum eros tempus in. Etiam sed tincidunt orci, quis tempor dolor. Aliquam eleifend venenatis ornare. Curabitur iaculis felis dui, quis sagittis nisl commodo sed. Fusce vitae justo eu sapien fringilla molestie. Mauris venenatis, libero nec volutpat ornare, felis libero congue magna, eget sollicitudin ex nisi nec dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin ultricies a lacus et tristique. Aenean ante tortor, condimentum ut porttitor vitae, efficitur nec urna. Nam et fringilla massa. Curabitur ante leo, hendrerit ac lectus et, posuere hendrerit dui. Praesent eget dignissim nunc.
  </p>
  <p>
  Aenean pellentesque, turpis in tempor mattis, libero ex porta tellus, in luctus ligula libero in tortor. Duis hendrerit dui eu metus rutrum, nec ultricies urna tincidunt. Suspendisse commodo mattis sapien, id tempus ligula scelerisque non. Maecenas quis rutrum erat. Cras at augue sapien. Nam ac pulvinar nunc. Praesent sit amet nulla tincidunt, venenatis orci a, sodales erat. Ut suscipit ligula sed erat euismod aliquam. Nam dui tortor, scelerisque in sapien eget, dignissim molestie nulla.
  </p>
  <p>
  Nullam sem enim, euismod ullamcorper justo ac, mattis gravida orci. Etiam facilisis metus dolor, sit amet euismod justo tincidunt et. Mauris nec nisl pharetra risus vulputate commodo. Aliquam convallis quam tellus, at luctus massa sagittis non. Suspendisse potenti. Sed aliquam dapibus est, ac volutpat urna maximus vitae. Nullam et mattis enim.
  </p>
  <p>
  Suspendisse at nibh ut ante scelerisque tincidunt quis pulvinar tellus. Cras leo velit, viverra vel pharetra quis, aliquam quis leo. Cras quis auctor odio. Cras eu ornare odio. Fusce ante leo, sollicitudin at odio consectetur, sodales sodales sapien. Sed feugiat ligula ac ex semper euismod. Donec egestas faucibus arcu at molestie. Donec consequat auctor augue semper vulputate. Duis in risus ut augue convallis efficitur.
  </p>
`;
const SiteConfig = {
  name: 'DineForward',
  twitterHandle: '@dineforward',
  siteUrl: 'https://dineforward.org/',
  themeColor: '#000000',
  logo: {
    src: '/static/logo.png',
    width: 96,
    height: 96,
  },
  colorPalette: [],
  translations: {
    homeIntro: {
      en: {},
    },
    codeOfConduct: {
      en: loremIpsum,
    },
    footer: { en: {} },
    aboutIntro: {
      en: {},
    },
  },
};

module.exports = SiteConfig;
