import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-gray-100 py-8">
        <div className="md:float-left block">
        <Link href="/" className="flex justify-center items-center">
              <span className="cursor-pointer font-bold text-4xl text-white">
                ISM Investment Club
              </span>
              <Image 
                    src="/logo.svg"
                    alt="ISMIC Logo"
                    width={118}
                    height={18}
                    className="md:float-right mt-2 ml-1 align-middle object-contain"
                />
        </Link>
        </div>
        <div className="hidden md:float-right md:contents">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/contacts"><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">Contacts</span></Link>
          </li>
          <li>
            <Link href="/blog"><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">Blog</span></Link>
          </li>
          <li>
            <Link href="/about"><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">About</span></Link>
          </li>
          <li>
            <Link href="/"><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">Home</span></Link>
          </li>                    
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

/*
const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
<div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
*/
