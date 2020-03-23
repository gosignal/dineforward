import React from 'react';
import ContentPage from '~containers/ContentPage';
import NewLayout from '~components/NewLayout';

const PreviewPage = () => {
  return (
    <NewLayout navbar>
      <ContentPage title="Preview">
        <div><a href="/api/preview/enable">Enable preview mode</a></div>
        <div><a href="/api/preview/disable">Disable preview mode</a></div>
      </ContentPage>
    </NewLayout>
  );
};

export default PreviewPage;
