import { FaGithub, FaEnvelope } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div className="mt-10 bg-white rounded-xl shadow-lg p-8 max-w-md transform hover:scale-105 transition-transform duration-300">
      <h1 className="text-2xl font-bold text-gray-800 text-left">Alexander Weidemann</h1>
      <p className="text-gray-600 mb-4 text-left">
        Noroff Front-end student &<br />
        Developer at Academic Work
      </p>
      <p className="text-gray-500 mb-6 text-left">
        I have over eight years experience in sales and services with a certificate of apprenticeship.
      </p>
      <h3 className="text-lg font-semibold text-gray-700 text-left mb-2">Skills & Experience</h3>
      <div className="flex justify-start flex-wrap gap-2 mb-6">
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">React</span>
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">CSS</span>
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Figma</span>
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">UX/UI</span>
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Tailwind</span>
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Bootstrap</span>
      </div>
      <div className="flex justify-start space-x-4">
        <a
          href="https://github.com/Zaracki"
          className="flex items-center text-blue-900 hover:underline transition-colors"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
        <a
          href="mailto:alexanderweidemann@a33.no"
          className="flex items-center text-blue-900 hover:underline transition-colors"
        >
          <FaEnvelope className="mr-2" /> Email
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
