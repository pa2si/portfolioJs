import Link from 'next/link';

const hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url(/oskar-yildiz-cOkpTiJMGzA-unsplash.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there...</h1>
          <p className="mb-5">...Welcome to my world of coding!</p>
          <Link href="/#about" className="btn btn-primary">
            about me
          </Link>
        </div>
      </div>
    </div>
  );
};
export default hero;
