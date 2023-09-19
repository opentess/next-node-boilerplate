import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useCallback, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const fetchAPI = async () => {
    try {
      setLoading(true);
      setTimeout(async () => {
        const res = await fetch(`http://localhost:3000/messages`, {
          method: "GET",
        });

        const { data } = await res.json();
        console.log(data);
        setData(data);
        setLoading(false);
        console.log("Timer Done");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  const postAPI = async () => {
    try {
      console.log("goum")
      setLoading(true);
      setTimeout(async () => {
        const res = await fetch(`http://localhost:3000/messages`, {
          method: "POST",
          body: JSON.stringify({ data: 5 }),
        });
        // console.log(res.body);
        setData(data);
        setLoading(false);
        console.log("Post Timer Done");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("Truthy use effect");
    fetchAPI();
  }, []);
  return (
    <main className="flex h-screen justify-center items-center gap-2">
      Api Call Button
      {loading && <div>Loading...</div>} |
      {data && <div className="">Data: {data}</div>} |
      <button
        className="bg-sky-400 py-2 px-2 text-sm rounded-lg"
        onClick={fetchAPI}
      >
        Call Api
      </button>
      <button
        className="bg-rose-400 py-2 px-2 text-sm rounded-lg"
        onClick={postAPI}
      >
        Post Api
      </button>
    </main>
  );
}
