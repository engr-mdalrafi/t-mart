import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../UI/productCard'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const ProductItem = () => {
    const [products, setProducts] = useState([])
      const [loading, setLoading] = useState(true)
      const [categories, setCategories] = useState([
        "all",
        "furniture",
        "fragrances",
        "womens-bags",
        "sports-accessories"
      ])
      const [selectedCategory, setSelectedCategory] = useState("")
      const [pagination, setPagination] = useState ({
        total: 0,
        skip: 0,
        limit: 20,
    })
    
      useEffect(()=>{
        axios.get(`https://dummyjson.com/products${selectedCategory && "/category/" + selectedCategory}?limit=${pagination.limit}&skip=${pagination.skip}`).then((res)=>{
          setProducts(res.data.products);
          setPagination({
            total: res.data.total,
            skip:  res.data.skip,
            limit: res.data.limit,
          })
          setLoading(false)
        })},[selectedCategory, pagination.skip, pagination.limit])
    
  return (
    <>
 <section className='my-[100px]  bg-background'>
    <div className="container">
        <div className='pt-32 pb-4'>
            
            <div className='pb-16 flex justify-between'>
                <ul className='grid grid-cols-2 text-nowrap md:flex gap-10'>
                  {
                    categories.map((item)=>(
                      <li key={item}><button onClick={()=>setSelectedCategory(item =="all" ? "" : item)} className={`${item == selectedCategory && "text-bagde"} capitalize cursor-pointer`}>{item}</button></li>
                    ))
                  }
                </ul>
                 
            
                <select className='text-primary outline-none  bg-white' onChange={(e)=>setPagination((prev)=> ({...prev, limit: e.target.value}))}>
                    <option value="20">20</option>
                    <option value="60">60</option>
                    <option value="100">100</option>
                </select>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-[60px] '>
                {
                    products.map((item)=>(
                        <ProductCard key={item.id} data={item}/>

                    ))
                }
            </div>
            <div className='mt-14 w-full flex justify-center items-center gap-3'>
                <button onClick={()=>setPagination((prev)=>({...prev, skip: pagination.skip - 10}))} className='px-3 py-1.5 border rounded-md cursor-pointer'><IoIosArrowBack /></button>
                <button onClick={()=>setPagination((prev)=>({...prev, skip: pagination.skip + 10}))} className='px-3 py-1.5 border rounded-md cursor-pointer'><IoIosArrowForward /></button>
            </div>
        </div>

        
    </div>
 </section>
    </>
  )
}

export default ProductItem
