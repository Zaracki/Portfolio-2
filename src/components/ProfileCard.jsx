import { FaGithub } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm text-center transform hover:scale-105 transition-transform duration-300">
      <h1 className="text-2xl font-bold text-gray-800">Alexander Weidemann</h1>
      <p className="text-gray-600 mb-4">Frontend Developer & UI/UX Designer</p>
      <p className="text-gray-500 mb-6">
        I have over eight years experience in sales and services with a certificate of apprenticeship.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/Zaracki"
          className="flex items-center text-blue-500 hover:underline transition-colors"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
