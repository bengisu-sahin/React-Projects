"use client"
import Link from "next/link";
import React from "react";
import {useSearchParams} from "next/navigation"
const Tabs = () => {
    const searchParams=useSearchParams();
    const genre=searchParams.get("genre");
    const tabs=[
        {
            name:"En Populer",
            url:"popular"
        },
        {
            name:"En Son",
            url:"latest"
        },
        {
            name:"Yakında Gelecekler",
            url:"upcoming"
        },
    ]
    return (
        <div className="p-5 gap-7 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
            {
                tabs.map((tab,i)=>(
                    <Link className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genre?"underline text-amber-600 underline-offset-8" :""}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
                ))
            }
        </div>
    );
};

export default Tabs;