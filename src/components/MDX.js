import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Text, Link } from 'rebass/styled-components';

export default function Layout({ children }) {
  return (
    <MDXProvider
      components={{
        h1: (props) => <Text as="h1" fontFamily="heading" {...props} />,
        h2: (props) => <Text as="h2" mt={3} fontFamily="heading" {...props} />,
        h3: (props) => <Text as="h3" mt={3} fontFamily="heading" {...props} />,
        h4: (props) => <Text as="h4" mt={3} fontFamily="heading" {...props} />,
        p: (props) => <Text as="p" mt={3} fontFamily="default" {...props} />,
        li: (props) => <Text as="li" mt={1} fontFamily="default" {...props} />,
        a: (props) => <Link fontFamily="default" {...props} />,
        img: (props) => <img style={{ maxWidth: '100%' }} {...props} />,
        hr: (props) => (
          <hr
            style={{
              margin: '4rem 0 2rem 0',
              height: '1px',
              border: 'none',
              background: '#ddd',
            }}
            {...props}
          />
        ),
      }}
    >
      {children}
    </MDXProvider>
  );
}
