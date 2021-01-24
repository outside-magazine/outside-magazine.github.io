/**
 * Post Component.
 */

// Dependencies
import PropTypes from 'prop-types';

/**
 * Post Component
 * @param props
 * @param props.title
 * @param props.dek
 * @param props.date
 * @param props.image
 * @param props.url
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const Post = (
  {
    title,
    dek,
    date,
    image,
    url,
  },
) => (
  <article>
    <a href={ `https://www.outsideonline.com${url}` }>
      <img src={ image }/>
      <h3>
        { title }
      </h3>
    </a>
    <time dateTime={ date }>
      { date }
    </time>
    <p>
      { dek }
    </p>
  </article>
);

Post.propTypes = {
  title: PropTypes.string,
  dek: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.number,
  url: PropTypes.number,
};

export default Post;
