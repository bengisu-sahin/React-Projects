import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay(); //geçerli tarihin gününü temsil eden bir sayı atanır (0: Pazar, 1: Pazartesi, ..., 6: Cumartesi).
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded> 
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels like:</label>
                                    <label>{item.main.feels_like}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default Forecast;

/**
 * Bu kod, hava durumu tahminleri verilerini kullanarak bir "Forecast" bileşeni oluşturan React bileşenidir. Bileşen, hava durumu tahminlerini bir akordeon (katlanabilir) yapısı içinde listeler ve kullanıcının bir günlük hava durumu tahminine tıkladığında, ekstra detayları görüntülemesini sağlar.

1. `const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];`: Haftanın günlerini temsil eden bir dizi oluşturulmuştur.

2. `const Forecast = ({ data }) => { ... }`: "Forecast" adında bir fonksiyonel bileşen tanımlanmıştır. Bileşen, `data` adlı bir prop (özellik) alır ve hava durumu tahminlerini bu `data` propu üzerinden alır.

3. `const dayInAWeek = new Date().getDay();`: `dayInAWeek` adlı değişkene, geçerli tarihin gününü temsil eden bir sayı atanır (0: Pazar, 1: Pazartesi, ..., 6: Cumartesi).

4. `const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));`: `forecastDays` adlı değişkene, haftanın günlerinin sırasını, geçerli günün başladığı sıradan başlayarak düzenler. Bu şekilde, örneğin çarşamba gününe erişmek için haftanın sonundan başlamanıza gerek kalmaz.

5. Dönen değer, bir React fragment (`<>...</>`) içindedir. Fragment, ekstra bir div veya başka bir etiket oluşturmadan içerisinde birden fazla JSX bileşeni döndürmek için kullanılır.

6. `<label className="title">Daily</label>`: "Daily" adında bir başlık etiketi oluşturulur ve bu başlık, sayfanın üst kısmında görüntülenir.

7. `<Accordion allowZeroExpanded> ... </Accordion>`: `Accordion` adlı bir bileşen oluşturulur. Bu bileşen, "react-accessible-accordion" paketinden alınan ve katlanabilir bir yapı oluşturan bir akordeon bileşenidir. `allowZeroExpanded` propu, açılan akordeonlardan birini kapatarak hiçbir akordeonun genişlememiş halde kalmasına izin verir.

8. `data.list.splice(0, 7).map((item, idx) => { ... })`: `data` propu içindeki hava durumu tahminlerinin ilk yedi öğesini alır ve `map` metodu ile her birini işler.

9. `<AccordionItem key={idx}> ... </AccordionItem>`: Her bir hava durumu tahmini için bir akordeon öğesi oluşturulur. `key={idx}` ile her bir akordeon öğesinin benzersiz bir anahtar (key) değeri alır.

10. `<AccordionItemHeading> ... </AccordionItemHeading>`: Akordeon öğesi başlığını tanımlar.

11. `<AccordionItemButton> ... </AccordionItemButton>`: Akordeon başlık düğmesini tanımlar. Kullanıcı başlık düğmesine tıkladığında, akordeon içeriği görüntülenecektir.

12. `<div className="daily-item"> ... </div>`: Akordeon başlık içeriğini tanımlar. Bu içerik, her bir hava durumu tahmini için gösterilecek bilgileri içerir.

13. `data.list` içindeki hava durumu tahmini verilerine erişir ve bu verileri akordeon başlık içeriğinde kullanarak hava durumu tahmininin tarihini, açıklamasını ve sıcaklık aralığını gösterir.

14. `<AccordionItemPanel> ... </AccordionItemPanel>`: Akordeon panelini tanımlar. Kullanıcı başlık düğmesine tıkladığında, akordeon paneli açılacak ve detayları görüntülenecektir.

15. `<div className="daily-details-grid"> ... </div>`: Akordeon panelinin içeriğini oluşturan bir ızgara (grid) yapısı oluşturur.

16. `data.list` içindeki hava durumu tahmini verilerine erişir ve bu verileri ızgara içinde etiketler ve değerlerle
 * 
 */