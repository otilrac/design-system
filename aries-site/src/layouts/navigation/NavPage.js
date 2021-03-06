import React, { useContext } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Box, Button, Paragraph, ResponsiveContext, Heading } from 'grommet';
import { iconsMap } from '../../components/icons/iconsMap';
import { structure } from '../../data';

const NavItem = ({ item, topic }) => {
  const size = useContext(ResponsiveContext);
  const [itemData] = structure.filter(page => page.name === item);
  const formattedItem = itemData.name
    .split(' ')
    .join('-')
    .toLowerCase();

  return (
    // Need to pass href because of: https://github.com/zeit/next.js/#forcing-the-link-to-expose-href-to-its-child
    <Link href={`/${topic}/${formattedItem}`} passHref>
      {/* Needs to be <a> in DOM for web crawling: https://support.google.com/webmasters/answer/9112205?hl=en */}
      <Button fill>
        <Box
          direction="row"
          margin={{ vertical: 'large' }}
          gap={size !== 'small' ? 'large' : 'medium'}
        >
          {/* Adds placeholder icon for the meantime
           * while we wait to get all the icons */}
          {itemData.icon
            ? itemData.icon('xlarge')
            : iconsMap.branding('xlarge')}
          <Box>
            <Heading level="2" weight="bold" margin="none">
              {itemData.name}
            </Heading>
            <Paragraph>{itemData.description}</Paragraph>
          </Box>
        </Box>
      </Button>
    </Link>
  );
};

export const NavPage = ({ items, topic, ...rest }) => {
  return (
    <Box {...rest}>
      {items.map(item => (
        <span key={item}>
          <NavItem item={item} topic={topic} />
          <Box border="bottom" />
        </span>
      ))}
    </Box>
  );
};

NavPage.propTypes = {
  items: PropTypes.array,
  topic: PropTypes.string,
};

NavPage.defaultProps = {
  items: [],
};

NavItem.propTypes = {
  item: PropTypes.string,
  topic: PropTypes.string,
};

NavItem.defaultProps = {
  item: '',
  topic: 'guidelines',
};
