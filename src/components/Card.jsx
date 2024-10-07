import { FaGithub, FaGlobe } from 'react-icons/fa';

const Card = ({ image, title, description, link1, link2 }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-t-xl"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 text-base mb-6">{description}</p>
        <div className="flex space-x-4">
          <a
            href={link1.url}
            className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200 hover:underline"
          >
            <FaGithub className="mr-2" /> {link1.text}
          </a>
          <a
            href={link2.url}
            className="flex items-center text-indigo-500 hover:text-indigo-600 transition-colors duration-200 hover:underline"
          >
            <FaGlobe className="mr-2" /> {link2.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
