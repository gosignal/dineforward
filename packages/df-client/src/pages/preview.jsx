import React from 'react';
import ContentPageLayout from '~containers/Layouts/contentpage.layout';

const PreviewPage = () => {
  return (
    <ContentPageLayout>
      <h1>Preview</h1>
      <div>
        <a href="/api/preview/enable">Enable preview mode</a>
      </div>
      <div>
        <a href="/api/preview/disable">Disable preview mode</a>
      </div>
    </ContentPageLayout>
  );
};

export default PreviewPage;
