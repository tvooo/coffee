import Link from 'next/link';

const Card = ({
  children,
  href,
}) => (
  <Link href={href}>
    <div className="Card">
      <style jsx>{`
        .Card {
          width: 20%;
          background: white;
          margin-bottom: 2rem;
          cursor: pointer;
          padding: 2em;
          box-sizing: border-box;
          text-align: center;
        }

        .Card:hover {
          box-shadow: 0 0 10px 10px rgba(128, 128, 128, 0.1);
        }
      `}</style>
      { children }
    </div>
  </Link>
);

export default Card;
