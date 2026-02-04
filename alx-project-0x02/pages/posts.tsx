import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Latest Posts
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: any, index: number) => (
            <PostCard 
              key={index} 
              title={post.title} 
              content={post.body} // JSONPlaceholder uses 'body' for content
              userId={post.userId} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts: posts.slice(0, 15), // Limiting to 15 posts for clarity
    },
  };
}

export default PostsPage;