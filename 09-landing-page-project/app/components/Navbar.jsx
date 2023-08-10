"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const handleNavigation = () => {
    setNavigation(!navigation);
  };
  return (
    <header className="w-full bg-slate-800 text-[#ffba00] fixed top-0 left-0 z-30">
      <nav className="w-full max-w-[1440px] mx-auto h-[90px] flex justify-between items-center px-7 py-4">
        <Link href="/">
          <p className="font-bold text-3xl lg:text-2xl xl:text-4xl cursor-pointer">
            eScooters
          </p>
        </Link>
        <ul className="hidden lg:flex uppercase font-semibold text-[14px] xl:text[16px] cursor pointer text-white">
          <li className="">
            <Link href="/">home</Link>
          </li>
          <li className="ml-12">
            <Link
              href="https://www.jeepurbanemobility.com/en/become-a-dealer/"
              target="_blank"
            >
              become a dealer
            </Link>
          </li>
          <li className="ml-12">
            <Link
              href="https://www.jeepurbanemobility.com/en/contact-us/"
              target="_blank"
            >
              contact
            </Link>
          </li>
        </ul>
        {/* Smaller screens - Toggle buttons */}
        <div onClick={handleNavigation} className="block lg:hidden z-10">
          {navigation ? (
            <AiOutlineClose size={22} className="text-custom_white" />
          ) : (
            <AiOutlineMenu size={22} className="text-custom_white" />
          )}
        </div>
        {/* Smaller screens - Navigation links */}
        <div
          className={
            navigation
              ? "lg:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-slate-800 text-center ease-in duration-300"
              : "lg:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen text-center ease-in duration-300"
          }
        >
          <div className="w-full text-custom_white text-1xl">
            <div className="w-full mb-10 pb-10 flex justify-center items-center mx-auto text-3xl font-bold">
              <Link href="/" onClick={handleNavigation}>
                eScooters
              </Link>
            </div>
            <ul className="check px-8 uppercase font-bold cursor-pointer">
              <li className="m-4" onClick={handleNavigation}>
                <Link href="/">home</Link>
              </li>
              <li className="m-4" onClick={handleNavigation}>
                <Link
                  href="https://www.jeepurbanemobility.com/en/become-a-dealer/"
                  target="_blank"
                >
                  become a dealer
                </Link>
              </li>
              <li className="" onClick={handleNavigation}>
                <Link
                  href="https://www.jeepurbanemobility.com/en/contact-us/"
                  target="_blank"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

/*
1. `w-full`: Elementin genişliğini ekran genişliğine ayarlar.
2. `bg-slate-800`: Arka plan rengini belirler. Renk adı veya hex değeri kullanılabilir.
3. `text-[#ffba00]`: Metin rengini belirler. Renk adı veya hex değeri kullanılabilir.
4. `fixed`: Elementi sayfanın sabit bir parçası yapar, yani kaydırıldığında bile yer değiştirmez.
5. `top-0`: Elementi yatay eksen üzerinde en üstte konumlandırır.
6. `left-0`: Elementi dikey eksen üzerinde en solda konumlandırır.
7. `z-30`: Z indeksi, öğelerin birbirinin üstünde olup olmadığını kontrol eder. Daha yüksek bir z indeksi, üstte görüntülenir. Z indeksini yani kısaca hangi ögenin üstte olacağını belirler.
8. `max-w-[1440px]`: Maksimum genişliği belirler. Burada `1440px` genişliğe sahip olacak.
9. `mx-auto`: Yatayda merkezlemeyi sağlar.
10. `h-[90px]`: Yüksekliği belirler.
11. `flex`: Öğeleri yatayda yan yana hizalar.
12. `justify-between`: Öğeleri aralarında eşit boşluk bırakarak sağa ve sola hizalar.
13. `items-center`: Öğeleri dikeyde ortalar.
14. `px-7`: Yatayda iç kenar boşluğunu belirler.
15. `py-4`: Dikeyde iç kenar boşluğunu belirler.
16. `cursor-pointer`: Fare imlecini öğe üzerine geldiğinde bir el işareti şeklinde değiştirir.
17. `font-bold`: Kalın metin stili uygular.
18. `text-3xl lg:text-2xl xl:text-4xl`: Metin boyutunu belirler. Farklı ekran boyutlarına göre farklı boyutlar sağlar.
19. `uppercase`: Metni büyük harflerle yazar.
20. `text-white`: Metin rengini beyaz olarak ayarlar.
21. `hidden lg:flex`: Elementi gizler, ancak büyük ekran boyutlarında görünür hale getirir.
22. `font-semibold`: Yarı kalın metin stili uygular.
23. `text-[14px] xl:text-[16px]`: Metin boyutunu belirler. Farklı ekran boyutlarına göre farklı boyutlar sağlar.
24. `block`: Bu sınıf, bir öğenin blok düzenini temsil eder. Blok düzeni, öğeyi diğer öğelerin altına yerleştirir. Bu sınıf, öğenin görünür olduğu tüm ekran boyutları için geçerlidir.
25. `lg:hidden`: Bu sınıf, büyük ekran boyutlarında (genellikle 'lg' ekran boyutu veya daha büyük) öğenin gizli olacağını belirtir. Yani, büyük ekranlarda bu öğe görünmez olacaktır. Küçük ekranlarda ise görünür olacaktır.

.*/
