import React from "react";
import "./global.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";
/**
 * 
Layout bileşeni, sayfanın genel düzenini belirlemek için kullanılır. Diğer bileşenleri 
saran bir yapı oluşturarak, ortak bileşenleri veya düzeni tüm sayfalarda kullanabilir.

Bu Layout bileşeni, children adlı bir prop alır. children prop'u, Layout bileşeninin içinde 
yer alan diğer bileşenleri temsil eder. Bu sayede, Layout bileşeni içindeki children bileşenlerini 
belirtilen düzen içine yerleştirebilirsiniz.

Bu şekilde, Layout bileşenini kullanarak tüm sayfalarda ortak bir düzen veya bileşenleri 
paylaşabilirsiniz. Örneğin, başlık, altbilgi veya yan menü gibi bileşenleri Layout içinde 
tanımlayarak, tüm sayfalarda tutarlı bir görünüm elde edebilirsiniz.
 */
const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Providers>
                <Header />
                <Tabs />
                {children}
                </Providers>
            </body>
        </html>
    );
};

export default Layout;
