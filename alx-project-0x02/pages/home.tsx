import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const HomePage = () => {
  // Initial posts matching Task 3
  const [posts, setPosts] = useState([
    { title: "Next.js Basics", content: "Next.js is a powerful React framework..." },
    { title: "TypeScript Strength", content: "TypeScript adds static typing..." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex flex-col items-center py-12 px-4">
        <div className="flex justify-between items-center w-full max-w-6xl mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Home Page</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add New Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>

      <PostModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleAddPost} 
      />
    </div>
  );
};

export default HomePage;