import Image from 'next/image';
import Welcome from './Welcome';
import bgarch from '../assets/UGAbw-arch.jpg';

interface ContentProps {
    children: React.ReactNode;
    className?: string;
  }
  
  const Content = ({ children, className = "" }: ContentProps) => {
    return (
        <div >
        <Image 
            src={bgarch}
            alt="Background UGA arch" 
            fill
            priority={true}
            className="object-cover w-full h-full z-[-1]"
        />
        {children}
      </div>
    );
  };

export default Content;
