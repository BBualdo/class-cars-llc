import { HourglassBottom } from "@mui/icons-material";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <HourglassBottom className="animate-spin text-[72px] text-gold" />
    </main>
  );
}
