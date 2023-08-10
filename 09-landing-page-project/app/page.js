"use client"

import ProductInfo from "./components/ProductInfo"
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

export default function Home()
{
  const {ref, inView} = useInView();
  const animation = useAnimation();
  useEffect( () =>
  {
    console.log('use effect', inView)
    if (inView){
        animation.start({
          x: 0,
          transition: {
            type: 'spring',
            duration: 4,
            bounce: 0.3
          }
        })
    } 
    if (!inView){
      animation.start({
        x: - 1500,
        transition: {
          duration: 2,
        }
      })}
  })
  return (
    <>
      <div className="mb-12 my-[95px] md:my-[100px] lg:my-[200px]">
        <section className="flex justify-center items-center">
          <div className="max-w-[1440px] mx-auto p-8 bg-[#f4eff1] border-transparent">
            <ProductInfo
                mainTitle="Jeep SENTINEL electric scooter"
                description="Designed to ride with ease on different types of roads, it lets you enjoy the freedom of moving nimbly and avoid getting stuck in traffic. It is equipped with front and rear suspensions for increased riding comfort and resistance."
                price="499,99"
                stockQuantity="2"
                productCategory="urban mobility"
                CTALink="https://www.fnac.pt/Trotinete-Electrica-Jeep-Troti-Sentinel-350W-Preto-Mobilidade-urbana-Trotinete-eletrica/a10956127"
                SKU="SET-258-238ZS"
                img1="/images/sentinel-1.jpeg"
                imgAlt1="SENTINEL 1"
                img2="/images/sentinel-2.jpeg"
                imgAlt2="SENTINEL 2"
                img3="/images/sentinel-3-1.jpeg"
                imgAlt3="SENTINEL 3"
                img4="/images/sentinel-4.jpeg"
                imgAlt4="SENTINEL 4"
                img5="/images/sentinel-5.jpeg"
                imgAlt5="SENTINEL 5"
                img6="/images/sentinel-6.jpeg"
                imgAlt6="SENTINEL 6"
              />
          </div>
        </section>
      </div>
      <div ref={ref}>
        <motion.div className=""
          animate={animation}
        >
          <section className=" flex justify-center items-center">
            <div className="max-w-[1440px] mx-auto p-8 bg-[#f4eff1] border-transparent">
              <ProductInfo
                  mainTitle="Jeep ADVENTURER electric scooter"
                  description="Designed to ride with ease on different types of roads, it lets you enjoy the freedom of moving nimbly and avoid getting stuck in traffic. It is equipped with front and rear suspensions for increased riding comfort and resistance."
                  price="799,00"
                  stockQuantity="26"
                  productCategory="urban mobility"
                  CTALink="https://www.jeepurbanemobility.com/en/product/adventurer/"
                  SKU="ADV-258-238ZS"
                  img1="/images/adventurer-1.jpeg"
                  imgAlt1="ADVENTURER 1"
                  img2="/images/adventurer-2.jpeg"
                  imgAlt2="ADVENTURER 2"
                  img3="/images/adventurer-3.jpeg"
                  imgAlt3="ADVENTURER 3"
                  img4="/images/adventurer-4.jpeg"
                  imgAlt4="ADVENTURER 4"
                  img5="/images/adventurer-5.jpeg"
                  imgAlt5="ADVENTURER 5"
                  img6="/images/adventurer-6.jpeg"
                  imgAlt6="ADVENTURER 6"
                />
            </div>
          </section>
        </motion.div>
      </div>
      <div className="mt-[95px] md:mt-[100px] lg:mt-[200px]">
        <section className="flex justify-center items-center">
          <div className="max-w-[1440px] mx-auto p-8 bg-[#f4eff1]">
            <ProductInfo
                mainTitle="Jeep URBAN CAMOU electric scooter"
                description="Built to deliver uncompromising performance as you ride around the city prompted by the eagerness to explore and discover new streets that sets the Jeep® way of life apart. Full suspended and rugged, it is the electric scooter for those who want to take on all kinds of roads with ease."
                price="999,00"
                stockQuantity="20"
                productCategory="urban mobility"
                CTALink="https://www.jeepurbanemobility.com/en/product/urban/"
                SKU="URB-115-271ZX"
                img1="/images/urban-1.jpeg"
                imgAlt1="URBAN 1"
                img2="/images/urban-2.jpeg"
                imgAlt2="URBAN 2"
                img3="/images/urban-3.jpeg"
                imgAlt3="URBAN 3"
                img4="/images/urban-4.jpeg"
                imgAlt4="URBAN 4"
                img5="/images/urban-5.jpeg"
                imgAlt5="URBAN 5"
                img6="/images/urban-6.jpeg"
                imgAlt6="URBAN 6"
              />
          </div>
        </section>
      </div>
      <section className="text-white h-auto px-7 py-[60px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center w-full h-full">
            <div className="w-full md:w-[50%] h-[200px] lg:h-[300px] relative">
              <Image src='https://www.jeepurbanemobility.com/wp-content/uploads/2021/12/manuals.png?id=126' alt="manuals" fill/>
            </div>
            <div className="w-full md:w-[50%] text-center mt-8 md:mt-0">
              <Link href="https://www.jeepurbanemobility.com/en/manuals/" target="_blank">
                <button className="bg-[#ffba00] text-white hover:bg-black font-semibold py-3 px-16 rounded-xl h-full uppercase w-full md:w-[50%]">manuals</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}