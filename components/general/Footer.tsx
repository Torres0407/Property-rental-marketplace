// components/general/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800 pt-12 pb-8">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-6 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined">real_estate_agent</span>
              </div>
              <span className="text-lg font-bold text-primary dark:text-white">
                RentMyPlace
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              The easiest way to find your perfect home. Browse millions of listings and rent with confidence.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-primary dark:text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-accent transition-colors" href="#">Apartments for Rent</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Houses for Rent</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Condos for Rent</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">New Listings</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-accent transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Blog</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary dark:text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-accent transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Trust & Safety</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2023 RentMyPlace Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="text-slate-400 hover:text-accent transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-slate-400 hover:text-accent transition-colors" href="#"><span className="material-symbols-outlined">post_add</span></a>
            <a className="text-slate-400 hover:text-accent transition-colors" href="#"><span className="material-symbols-outlined">rss_feed</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
