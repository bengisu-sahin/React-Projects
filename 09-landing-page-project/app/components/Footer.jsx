import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-[#ffba00] py-10 h-[200px]">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full text-center uppercase font-bold text-2xl">
          <Link
            href="https://www.jeepurbanemobility.com/en/the-company/"
            target="_blank"
            className="py-2"
          >
            The Company
          </Link>
        </div>
        <div className="w-full text-center uppercase font-bold text-2xl">
          <Link
            href="https://www.jeepurbanemobility.com/en/support/"
            target="_blank"
            className="py-2"
          >
            Support
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center pt-5">
        <div className="w-full text-center py-5 text-sm text-white">
          Tribute Website - No Rights Reserved
        </div>
      </div>
    </footer>
  );
}