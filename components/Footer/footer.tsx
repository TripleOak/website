import Link from 'next/link';

function Footer() {
  return (
    <footer className="mt-16">
      <div className="pt-2 pb-12 sm:w-11/12 md:w-3/4 mx-auto border-t border-gray-300">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex flex-col mt-4 sm:flex-row sm:space-x-8 sm:mt-0 font-sans text-xs font-light uppercase">
            <Link href="/terms-of-use">
              <span className="text-gray-400 hover:text-gray-900 cursor-pointer">Terms of use</span>
            </Link>
            <Link href="/privacy-policy">
              <span className="text-gray-400 hover:text-gray-900 cursor-pointer">Privacy Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
