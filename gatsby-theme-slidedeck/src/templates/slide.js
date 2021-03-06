import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { css } from 'theme-ui';
import Layout from '../components/layout';
import Menu from '../components/menu';
import SlideHeader from '../components/slideHeader';
import useShortcuts from '../utils/useShortcuts';

const ReffableLayout = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <Layout {...props} />
  </div>
));

const Slide = ({ data: { mdx } }) => {
  const { frontmatter, body, fields } = mdx;
  const { title, slideNumber, lastSlide } = frontmatter;
  const { deckSlug } = fields;

  const touchSwipeHandlers = useShortcuts({ deckSlug, slideNumber, lastSlide });
  return (
    <ReffableLayout {...touchSwipeHandlers}>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <SlideHeader {...{ title, slideNumber, lastSlide }} />
          <div css={css({ minHeight: 'slideHeight' })}>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
        <Menu />
      </div>
    </ReffableLayout>
  );
};

export default Slide;

export const pageQuery = graphql`
  query SideQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        slideNumber
        lastSlide
      }
      fields {
        deckSlug
      }
      body
    }
  }
`;
