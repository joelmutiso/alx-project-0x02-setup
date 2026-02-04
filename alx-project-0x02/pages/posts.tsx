import Header from "@/components/layout/Header";

const PostsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Posts Page</h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl">
          This is where the list of posts will be displayed.
        </p>
      </main>
    </div>
  );
};

export default PostsPage;