import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#DCE3F0] bg-tech-grid flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl bg-[#EDF0F5] border border-[#B9C3D4] shadow-xl">
        <div className="w-14 h-14 rounded-2xl bg-[#171717] text-white flex items-center justify-center mx-auto mb-6 shadow-md">
          <Compass className="w-7 h-7 text-[#7000FF]" />
        </div>

        <span className="text-xs font-mono font-bold tracking-widest text-[#7000FF] uppercase block mb-2">
          ERROR 404 // COORDINATES UNREACHABLE
        </span>

        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#171717] mb-3">
          PAGE NOT FOUND
        </h1>

        <p className="text-sm text-[#696D77] mb-8 leading-relaxed">
          The requested path does not exist in the system index or has been relocated to another sector.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#7000FF] hover:bg-[#5b00d6] rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(112,0,255,0.25)] hover:shadow-[0_6px_24px_rgba(112,0,255,0.4)]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    </div>
  );
}
