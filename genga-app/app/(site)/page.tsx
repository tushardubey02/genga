import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className=" flex text-slate-300 hover:text-sky-400 text-5xl font-semibold content-center justify-center m-3">
          Genga
      </div>
      <div className="flex justify-center text-slate-300 text-xl font-medium">
            Guess the anime based on the given clues!
      </div>
    </div>
    
  );
}
