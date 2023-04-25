import Background from "@/components/background";

function Home() {
  return (
    <div className="overflow-none">
      <Background spheres={20} />
      <div className="flex items-center justify-center w-screen h-screen text-white">
        <h1 contentEditable className="text-7xl font-semibold outline-none">
          Insert Title Here
        </h1>
      </div>
    </div>
  );
}

export default Home;
