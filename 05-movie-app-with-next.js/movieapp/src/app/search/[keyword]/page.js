import React from "react";
import Movies from "@/components/Movies";

const Params = async ({ params }) => {
    const keyword = params.keyword;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=693a27a254440286f64cf660cbfacee4&query=${keyword}&language=en-US&include_adult=false`);
    const data = await res.json();
    return (
        <div className="flex items-center flex-wrap gap-3">
            {!data?.results ? (
                <div>The searched movie could not be found.....</div>
            ) : (
                data?.results?.map((dt, i) => (
                    <Movies dt={dt} key={i} />
                ))
            )}
        </div>
    );

}

export default Params;