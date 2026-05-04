import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A4314] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
              Novo<span className="text-[#D4B872]">cart</span>
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Sustainable, handcrafted bamboo products to elevate your everyday living spaces. Nature meets modern design.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Shop</h3>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><Link href="/collection/all" className="hover:text-[#D4B872] transition-colors">All Products</Link></li>
              <li><Link href="/collection/lamps-lighting" className="hover:text-[#D4B872] transition-colors">Lamps & Lighting</Link></li>
              <li><Link href="/collection/home-decor" className="hover:text-[#D4B872] transition-colors">Home Decor</Link></li>
              <li><Link href="/collection/kitchen-dining" className="hover:text-[#D4B872] transition-colors">Kitchen & Dining</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Help</h3>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><a href="#" className="hover:text-[#D4B872] transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-[#D4B872] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-[#D4B872] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-[#D4B872] transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <div className="flex items-center">
              <input type="email" placeholder="Enter your email" className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:border-[#D4B872] w-full" />
              <button className="bg-[#D4B872] text-[#1A4314] px-4 py-2 rounded-r-lg font-bold hover:bg-[#E8D595] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Novocart. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
