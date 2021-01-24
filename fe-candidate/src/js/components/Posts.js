/**
 * Posts Component.
 */

// Dependencies
import PropTypes from 'prop-types';
import { Post } from './Post';

const { useEffect, useState } = window.React;

/**
 * Posts Component
 *
 * @param {{}} props React props object
 * @param {[]} props.posts Posts array object
 * @param {number} props.ppp Posts per page
 * @param {string} props.title Section title
 * @param {string} props.dek Section blurb/dek
 * @param {number} props.count Posts total count
 * @param {function} props.loadMore Parent component callback
 * @param {boolean} props.pending Is current request pending
 * @param {number} props.cat_id Cat Id for section
 * @param {boolean} props.allLoaded All loaded
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const Posts = (
  {
    posts,
    ppp,
    title,
    dek,
    count,
    loadMore,
    pending,
    cat_id: catId,
    allLoaded = false,
  },
) => {
  const [paged, setPaged] = useState(1);
  const [postCount, setPostCount] = useState(ppp);

  useEffect(() => {
    if (paged === 1) {
      return;
    }
    if (postCount < count) {
      setPostCount((ppp * paged) > count ? posts.length : ppp * paged);
    }
    if (!allLoaded) {
      loadMore(catId, paged);
    }
  }, [paged]);

  return (
    <section>
      <h2>
        <span>( { postCount } / { count } )</span> { title }
      </h2>
      <p>{ dek }</p>
      <div className='winter101-posts'>
        { posts.map((post, i) => (
          <>
            { postCount > i && <Post key={ `post-${post.id}` } { ...post }/> }
          </>
        )) }
      </div>
      { postCount < count && <button
        disabled={ pending }
        onClick={ () => {
          setPaged(paged + 1);
        } }
      >
        Load More
      </button> }
      { pending && <span>Loading...</span> }
    </section>
  );
};

Posts.propTypes = {
  ppp: PropTypes.number,
  count: PropTypes.number,
  title: PropTypes.string,
  dek: PropTypes.string,
  loadMore: PropTypes.func,
  pending: PropTypes.bool,
  cat_id: PropTypes.string,
  allLoaded: PropTypes.bool,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      image: PropTypes.string,
      url: PropTypes.string,
      title: PropTypes.string,
      dek: PropTypes.string,
      id: PropTypes.number,
      date: PropTypes.dateTime,
    }),
  ),
};

export default Posts;
