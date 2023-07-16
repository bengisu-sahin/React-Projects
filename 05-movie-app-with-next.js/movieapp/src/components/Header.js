"use client"
import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import MenuItems from './MenuItems';
import ThemeComp from './ThemeComp';
import { useRouter } from 'next/navigation';

const Header = () => {
    const [keyword, setKeyword] = useState("");
    const router = useRouter();
    const searchFunc = (e) => {
        if (e.key === "Enter" && keyword.length > 2) {
            /**
             * router.push(/search/${keyword}) ifadesi çalıştığında, router nesnesi tarafından yönlendirme işlemi gerçekleştirilir ve /search/[keyword].js sayfa dosyası çalıştırılır.
             */
            router.push(`/search/${keyword}`)
            setKeyword("");
        }
    }
    const menu = [
        {
            name: "About ",
            url: "/about"
        },
        {
            name: "Sign in ",
            url: "/login"
        }
    ]
    return (
        <div className='flex items-center gap-7 h-20'>
            <div className='bg-amber-600 rounded-lg p-3 text-2xl font-bold'>MovieApp</div>
            <div className='flex-1 flex items-center gap-2 border p-3 rounded-lg'>
                <input value={keyword} onKeyDown={searchFunc} onChange={e => setKeyword(e.target.value)} className='outline-none flex-1 bg-transparent' placeholder='Please,search movie...' type='text' />
                <BiSearch size={25} />
            </div>
            <ThemeComp />
            {
                menu.map((mn, i) => (
                    <MenuItems mn={mn} key={i} />
                ))
            }
        </div>
    )
}
export default Header;