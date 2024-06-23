import Link from "next/link";

const Credits = () => {
  return (
    <div className="flex flex-col items-center border-t border-gray-400 pt-5">
      <p className="text-gray-400">© Copyright 2024 ClassCarsLLC</p>
      <p className="text-gray-400" id="credits" aria-hidden>
        Web Development By:{" "}
        <Link
          aria-labelledby="credits"
          href="https://github.com/BBualdo"
          target="_blank"
          className="transition-all duration-200 hover:text-gold"
        >
          BBualdo
        </Link>
      </p>
    </div>
  );
};

export default Credits;
