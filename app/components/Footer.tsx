export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        
        <p>© {new Date().getFullYear()} copyright all right reserved</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="mailto:your@email.com" className="hover:text-white">Email</a>
        </div>

      </div>
    </footer>
  )
}