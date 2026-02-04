import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center p-10 bg-white rounded-2xl shadow-xl border border-gray-100 max-w-lg">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Welcome to Next.js!
          </h1>
          <p className="text-gray-500 text-lg">
            This is the initial setup for ALX Project 0x02. 
            TypeScript, Tailwind CSS, and the React Compiler are all active.
          </p>
        </div>
      </main>
    </div>
  );
}