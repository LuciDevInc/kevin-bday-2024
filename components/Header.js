import Link from 'next/link';
import Image from 'next/image';
import image from '../img/Titelbild2.PNG';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <a href="/">
        <Image src={image} width={300} height={300} alt="titelbild" />
      </a>
    </header>
  );
}
