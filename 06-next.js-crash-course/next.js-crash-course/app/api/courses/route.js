import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import courses from "./data.json";

export async function GET(request) {
    return NextResponse.json(courses);
}
/**
 *export async function GET(request) {: GET fonksiyonunu tanımlar ve dışarıya (diğer dosyalara) açar. Bu fonksiyon, bir HTTP GET isteği yapıldığında çağrılacaktır.

return NextResponse.json(courses);: Fonksiyon, courses değişkenindeki verileri JSON formatında bir HTTP yanıtı olarak döndürür. Yani, istemci tarafından yapılan GET isteğine courses verilerini içeren bir JSON yanıtı gönderir.
 */

export async function POST(request) {
    const { title, description, level, link } = await request.json();

    const newCourse = {
        id: uuidv4(),
        title,
        description,
        level,
        link,
    };

    courses.push(newCourse);

    return NextResponse.json(courses);
}