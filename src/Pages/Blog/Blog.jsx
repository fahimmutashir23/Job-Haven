import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Job Heaven | Blogs</title>
      </Helmet>
      <h1 className="text-center font-bold text-3xl bg-base-200 py-2 px-8 rounded-b-lg max-w-fit mx-auto mb-5">
        Blog page
      </h1>
      <div className=" max-w-5xl mx-auto bg-base-200 border-2 border-double border-orange-400 p-4 relative overflow-y-auto">
        <ul className="list-decimal p-4 space-y-5">
          <li className="text-xl">
            <p className="font-semibold">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </p>
            <p>
              <span className="font-semibold text-violet-500">Ans.</span> Access
              Token is a secret token that is using secure API. Access token is
              used some time and while it will expire then create a refresh
              token to generate another access token to continue user.
            </p>
          </li>
          <li className="text-xl">
            <p className="font-semibold">
              What is express js? What is Nest JS?
            </p>
            <p>
              <span className="font-semibold text-violet-500">Ans.</span>{" "}
              Express.js is the most popular web framework for Node.js. It is
              used for building web applications and APIs. And NestJS is a
              popular open-source and back-end framework for Node.js and it is
              TypeScript-based, server-side applications. It is intended to
              provide a solid foundation for developing server-side applications
              by leveraging well-known patterns and the best practices from
              other frameworks such as Angular, Express.js, and others.
            </p>
          </li>
          <li className="text-xl">
            <p className="font-semibold">Explain My code.</p>
            <p>Using Framework in my project is bellow</p>
            <ul className="list-disc px-4">
              <li>emailjs</li>
              <li>sweetalert2</li>
              <li>swiper</li>
              <li>react-tooltip</li>
              <li>react-toastify</li>
              <li>react-tabs</li>
              <li>react-spinners</li>
              <li>react-icons</li>
              <li>react-helmet-async</li>
              <li>react-dom</li>
              <li>react</li>
              <li>moment</li>
              <li>match-sorter</li>
              <li>localforage</li>
              <li>framer-motion</li>
              <li>firebase</li>
              <li>axios</li>
              <li>react-query</li>
            </ul>
            <p>I am using axios to load every data. Tanstack query was use Review section.</p>
          </li>
        </ul>
        <p className="text-sm font-semibold max-w-fit absolute bottom-0 right-0 border-t-2 border-l-2 border-double border-orange-400 p-2">
          Job Heaven
        </p>
      </div>
    </div>
  );
};

export default Blog;
