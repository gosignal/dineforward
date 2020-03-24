import DynamicContent from '~components/DynamicContent';
import { contentQuerySlug } from '~utils/queries';

<<<<<<< HEAD
export const getStaticProps = contentQuerySlug('contact');
=======
const ContactPage = () => {
  const apolloClient = useApolloClient();
  return (
    <NewLayout navbar>
      <ContentPage title="Contact" subtitle="Contact us">
        <h1>Contact Content Here</h1>
        <h2>{JSON.serialize({ version: apolloClient.version })}</h2>
      </ContentPage>
    </NewLayout>
  );
};
>>>>>>> Still broken

export default DynamicContent;
