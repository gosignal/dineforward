import React from 'react';
import ContentPageLayout from '~containers/Layouts/contentpage.layout';

const DynamicContent = ({ name, blocks, subtitle }) => {
  return (
    <ContentPageLayout>
      <h1>{name}</h1>
      <b>{subtitle}</b>
      {blocks.map((b, id) => (
        <div key={id} dangerouslySetInnerHTML={{ __html: b.richContent }} />
      ))}
    </ContentPageLayout>
  );
};

export default DynamicContent;
