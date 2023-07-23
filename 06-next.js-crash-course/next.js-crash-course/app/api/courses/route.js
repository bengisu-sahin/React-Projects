import { NextResponse } from "next/server";
import courses from "./data.json";

export async function GET(request) {
    return NextResponse.json(courses);
}
/**
 *export async function GET(request) {: GET fonksiyonunu tanımlar ve dışarıya (diğer dosyalara) açar. Bu fonksiyon, bir HTTP GET isteği yapıldığında çağrılacaktır.

return NextResponse.json(courses);: Fonksiyon, courses değişkenindeki verileri JSON formatında bir HTTP yanıtı olarak döndürür. Yani, istemci tarafından yapılan GET isteğine courses verilerini içeren bir JSON yanıtı gönderir.
 */