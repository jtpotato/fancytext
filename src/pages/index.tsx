import Background from "@/components/background";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Home() {
  const router = useRouter();
  const [blank, setBlank] = useState(true);

  useEffect(() => {
    console.log(window?.location.search)
    if (!window?.location.search.includes("blank")) {
      console.log("Not blank");
      setBlank(false);
    }
  }, [])

  return (
    <div className="overflow-none">
      <Background spheres={20} />
      <div className="flex items-center justify-center w-screen h-screen text-white">
        {blank ? (
          <></>
        ) : (
          <h1 contentEditable className="text-7xl font-semibold outline-none">
            Insert Title Here
          </h1>
        )}
      </div>
    </div>
  );
}

export default Home;
