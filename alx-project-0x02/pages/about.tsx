import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Page</h1>
        
        <div className="flex flex-wrap gap-4 justify-center items-center p-6 bg-white rounded-xl shadow-sm border">
          <Button size="small" shape="rounded-sm">Small & Sharp</Button>
          <Button size="medium" shape="rounded-md">Medium & Rounded</Button>
          <Button size="large" shape="rounded-full">Large & Pill</Button>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;