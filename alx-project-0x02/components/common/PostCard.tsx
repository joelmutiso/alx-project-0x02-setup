import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-xl font-bold text-gray-800 capitalize">{title}</h2>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          User {userId}
        </span>
      </div>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
};

export default PostCard;