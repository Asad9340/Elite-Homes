import { Helmet } from 'react-helmet';
const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Elite Homes | About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center animate__animated animate__bounce">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to BookBud, your ultimate destination for discovering and
          exploring a wide range of books from various genres. Whether you are a
          passionate reader or just starting your reading journey, BookBud is
          here to help you find your next favorite book.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is to make the process of discovering and acquiring books
          as enjoyable and seamless as possible. We strive to provide a
          user-friendly platform where book lovers can connect, share
          recommendations, and enhance their reading experience.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          At BookBud, we believe in the power of storytelling and the
          transformative impact of literature. That is why we are committed to
          curating an extensive collection of books that cater to diverse
          interests and preferences.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for choosing BookBud as your literary companion. Happy
          reading!
        </p>
      </div>{' '}
    </>
  );
};

export default About;
