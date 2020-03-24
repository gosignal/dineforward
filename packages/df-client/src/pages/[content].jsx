import DynamicContent from '~components/DynamicContent';
import { contentQuerySlug } from '~utils/queries';
import { getAllPageSlugs } from '~utils/api';


// Due to webpack of this file, 'require' is the easiest/most reliable way to tell
// whether or not a page file exists.
function pageExists(pagePath) {
    try {
        require(`./${pagePath}`);
        return true;
    } catch (e) {
        return false;
    }
}

export const getStaticProps = async ({ params }) => contentQuerySlug(params.content)();

export const getStaticPaths = async () => {
    // If a page file also exists in the 'pages' directory, do not return
    // that path. Next doesn't handle that case correctly and the build will
    // fail.
    const slugs = (await getAllPageSlugs()).filter(s => !pageExists(s));
    return {
        paths: slugs.map(s => ({ params: { content: s }})),
        fallback: false,
    };
}

export default DynamicContent;
