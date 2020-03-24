import DynamicContent from '~components/DynamicContent';
import { contentQuerySlug } from '~utils/queries';

export const getStaticProps = contentQuerySlug('contact');

export default DynamicContent;
