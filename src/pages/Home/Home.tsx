import Card from "../../components/Card/Card";
export default function Home() {
  return (
    <>
      <div className="flex flex-col h-full w-full gap-7">
        <div className="h-[10%] w-full bg-black flex items-center justify-center">
          <h1 className=" text-4xl text-center text-amber-50">
            Proyecto F1
          </h1>
        </div>
        <main className="flex justify-center h-full w-full">
          <div className="min-h-[97%] max-h-[97%] w-[60%] bg-[#333131] p-7  rounded-3xl shadow-lg shadow-black">
            <Card />
          </div>
        </main>
      </div>
    </>
  );
}
