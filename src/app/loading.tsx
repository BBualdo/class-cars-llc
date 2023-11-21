import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
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
