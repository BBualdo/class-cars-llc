import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ClipLoader
        color="#efd69d"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        loading
      />
    </div>
  );
}
