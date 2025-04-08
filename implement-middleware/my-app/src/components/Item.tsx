import Image from "next/image";
import Card from "./Card";
import Link from "next/link";

interface ItemProps {
    item: {
      _id: number;
      title: string;
      description: string;
      url: string;
    };
}

const Item = ({item}:ItemProps) => {
    return (
        <Card >
           <div className="w-full h-68 relative">
                <Image src={item.url} alt={item.title}  fill className="object-cover rounded-md" />
            </div>
            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
            {/* <p className="text-gray-600">{item.description}</p> */}
          <Link
             href={`/show-item/${item._id}`}
              className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 mt-4 inline-block"
           >
             more...
           </Link>
        </Card>
    );
}
export default Item;