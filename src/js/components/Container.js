/**
 * Container Component.
 */

// Dependencies
import { Posts } from './Posts';

// Global constants
const { useState } = window.React;
const POSTS_PER_PAGE = 4;
const initialSections = JSON.parse(document.getElementById('outside-initial-data').innerText);

export const Container = () => {
  const [allLoaded, setCached] = useState(false);
  const [pending, setPending] = useState(false);
  const [sections, setSections] = useState(initialSections);

  const loadMore = () => {
    if (allLoaded || pending) {
      setPending(false);
      return;
    }

    setPending(true);
    setCached(true);

    fetch('https://run.mocky.io/v3/6f58c901-cb5f-4544-834a-020be1349266?mocky-delay=1000ms')
      .then((res) => res.json())
      .then(
        (response) => {
          const updatedSections = [...sections];
          for (let i = 0, m = response.length; i < m; i++) {
            const allLoadedSectionIndex = updatedSections.findIndex(
              (section) => section.cat_id === response[i].cat_id,
            );
            updatedSections[allLoadedSectionIndex].posts.push(...response[i].posts);
          }
          setSections(updatedSections);
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        },
      )
      .finally(() => {
        setPending(false);
      });
  };

  return (
    <div className={ `winter101 ${pending ? 'pending' : ''}` }>
      { sections.map((section) => (
        <Posts
          key={ section.cat_id }
          {
            ...{
              ...section,
              loadMore,
              pending,
              allLoaded,
              ppp: POSTS_PER_PAGE,
            }
          }
        />
      )) }
    </div>
  );
};

export default Container;
