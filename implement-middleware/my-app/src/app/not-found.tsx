import Link from 'next/link';
import Content from '../components/Content';
 
export default async function NotFound() {

  return (
      <Content>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full text-center">
              
                <h2>Not Found</h2>
                <p>Could not find requested page</p>
                 <p>View <Link href="/">our home page.</Link> </p>
                </div>
            </div>
        </Content>

  )
}