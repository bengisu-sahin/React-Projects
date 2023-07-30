import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
            .then((response) => response.json())
            .then((response) =>{
                // API'den gelen verileri uygun formatta dönüştür
                /**
                 * react-select-async-paginate paketi, loadOptions fonksiyonundan beklendiği gibi, options adlı bir dizi içeren bir nesne döndürmesini bekler. 
                 * {options: [], // Seçeneklerin bulunduğu dizi
                    hasMore: true / false, // Daha fazla seçenek olduğunu belirten bir değer
                    additional: {} // Ek verileri içeren nesne (isteğe bağlı)}
                 */
                return{
                    /**
                     * city nesnesinden alınan latitude, longitude, name ve countryCode gibi veriler, value ve label alanlarını oluşturmak için kullanılmaktadır. Böylece, her şehir seçeneği için, value olarak enlem ve boylam değerleri birleştirilerek, label olarak da şehir adı ve ülke kodu birleştirilerek tanımlanmaktadır. Bu şekilde, seçenekleri düzgün bir şekilde görüntülemek ve işlemek için uygun yapılar elde edilmiş olur.
                     */
                    options:response.data.map((city)=>{
                        return{
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode}`,
                        }
                    })
                }
                }

                )
            .catch((err) => console.log(err))

    }
    return (
        /**
         * AsyncPaginate, react-select-async-paginate paketinin bir bileşenidir ve react-select bileşeni ile sayfalama (pagination) ve asenkron seçenek yükleme (async loading) özelliklerini birleştirir. Bu bileşen, büyük veri kümesi olan seçenekleri daha verimli bir şekilde kullanmak için kullanılabilir. Kullanıcı seçenekleri seçmeye başladığında veya seçenekleri aradığında, sayfalar arasında verileri yüklemek için asenkron olarak çalışır.
         * 
         * 
         *debounceTimeout: Seçenekleri yüklemeye başlamadan önce, kullanıcının yazmayı veya aramayı bitirdiğinden emin olmak için belirli bir süre (milisaniye cinsinden) gecikme ekleyebilirsiniz. debounceTimeout, yazarken her karakter değişimini beklemek yerine, kullanıcının yazmayı tamamladığı bir süre sonunda asenkron yükleme işlemini tetikler 
         */
        <AsyncPaginate
            placeholder="Search for a city"
            debounceTimeout={600}
            value={search} //user bir şey girdiğinde value değerine atanır oradan da search propuna atanır
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search