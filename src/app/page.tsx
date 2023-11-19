export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between text-black bg-darkGrey">
      <div className="absolute bg-five bg-no-repeat bg-center bg-cover w-full h-[600px] z-0 blur-sm" />
      <div className="w-full h-[600px] flex items-center justify-center">
        <h1 className="text-[72px] text-transparent bg-clip-text bg-gradient-to-t from-yellow-600 to-yellow-100 font-extrabold z-10">
          Witamy w ClassCarsLLC
        </h1>
      </div>
    </main>
  );
}
