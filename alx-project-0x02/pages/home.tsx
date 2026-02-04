import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex flex-col items-center py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Home Page</h1>
        
        {/* Grid layout for cards - mobile responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <Card 
            title="Next.js Basics" 
            content="Next.js is a powerful React framework that enables server-side rendering and static site generation." 
          />
          <Card 
            title="TypeScript Strength" 
            content="TypeScript adds static typing to JavaScript, helping us catch errors early in the development process." 
          />
          <Card 
            title="Tailwind CSS" 
            content="Tailwind is a utility-first CSS framework that allows for rapid UI development directly in your HTML." 
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;