// components/general/Navbar.tsx

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1280px] mx-auto">
        <div className="flex items-center gap-2">
          <div className="size-8 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">
              real_estate_agent
            </span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight text-primary dark:text-white">
            RentMyPlace
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-accent transition-colors" href="#">
            List your property
          </a>
          <a className="text-sm font-medium hover:text-accent transition-colors" href="#">
            Sign Up
          </a>
          <a className="text-sm font-bold text-white bg-primary px-5 py-2 rounded-full hover:bg-primary/90 transition-colors shadow-sm" href="#">
            Log In
          </a>
        </div>
        <div className="md:hidden">
          <button className="p-2 text-slate-900 dark:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
