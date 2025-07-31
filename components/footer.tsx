const Footer = () => {
  return (
    <footer className="py-6 md:py-8 text-center text-[#6B7280] bg-[#FFF8DC] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Anotida Expected. All rights reserved.</p>
        <p className="mt-2 text-sm md:text-base">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by Anotida.
        </p>
      </div>
    </footer>
  )
}

export default Footer
