'use client'
import Item from "./Item";
import Link from 'next/link';
import {useState, useEffect} from 'react';

   export default function Items() {

    const [UGAitems, setItems] = useState([]);
  
   useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await fetch('/api/items');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
           setItems(data.items);
        
           console.log(UGAitems);
        } catch (error) {
              console.log('Error from ShowItemList:', error);
        }
      };
  
      fetchItems();
    }, []);

    return (
    
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px-4 py-6'>

 
                {UGAitems.length === 0 ? (
                    <p>No UGA items available</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {UGAitems.map((item, k) => (  
                        <Item item={item} key={k}  />
                    ))}
                        
                    </div>
                )}
            
            <Link href={`/create-item`}
                   className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 mt-4 inline-block"
                   
                > Create New Item
                </Link>
            </div>
        </section>

    );
    
};
