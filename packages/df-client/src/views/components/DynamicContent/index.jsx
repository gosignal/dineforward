import React from 'react';
import ContentPage from '~../ContentPage';
import NewLayout from '~../NewLayout';

const DynamicContent = ({ name, blocks, subtitle }) => {
  return (
    <NewLayout navbar>
      <ContentPage title={name} subtitle={subtitle}>
        {blocks.map((b, id) => (
          <div key={id} dangerouslySetInnerHTML={{ __html: b.richContent }} />
        ))}
      </ContentPage>
    </NewLayout>
  );
};

export default DynamicContent;
