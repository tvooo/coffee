import Link from 'next/link';
import H from './H';
import Logo from './Logo';

export default () => (
  <div style={{margin: '2rem 0 4rem 0'}}>
    <Logo />
    <div style={{display: 'none', justifyContent: 'space-between', marginTop: '4rem'}}>
      {/* <Link href="/">
        <a>← Back</a>
      </Link> */}
      {/* <H>Learn how to brew great coffee</H> */}
      <H>Coffee basics</H>
      <H>Brew methods</H>
      <H>Recipes</H>
      {/* <H>Fika</H>
      <H>Påtår</H> */}
    </div>
  </div>
)
