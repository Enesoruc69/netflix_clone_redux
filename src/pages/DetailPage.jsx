import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { baseImgUrl } from "../constans";
import DetailDisplay from "../components/DetailDisplay";
import millify from "millify";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ActorCard from "../components/ActorCard";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => { 

  const params = {
    append_to_response: "credits,videos,"
  }



    api
      .get(`/movie/${id}` , {params})
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message));
  }, [id]); // id'yi bağımlılık dizisine ekledim

  console.log(movie);
  return (
    <>
      <div>
        {!movie ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          <>
            <div className="h-[20vh] relative">
              <img
                src={baseImgUrl + movie.backdrop_path}
                alt={movie.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid place-items-center bg-black bg-opacity-45">
                <h2 className="md:text-3xl text-2xl lg:text-4xl font-semibold">
                  {movie.title}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
            <div>
              <DetailDisplay title="Kategoriler" data={movie.genres} />
              <DetailDisplay title="Konuşulan Diller" data={movie.spoken_languages}/>
              <DetailDisplay title="Yapımcı Şirketler" data={movie.production_companies}/>
              <DetailDisplay title="Yapımcı Ülkeler" data={movie.production_countries}/>
            </div>

            <div className="flex flex-col gap-2">
              <p>
                {movie.overview}
              </p>
              <p className="gap-3">
                <span className="">Bütçe:</span>
                <span className="text-green-500 ms-2">${millify(movie.budget)}</span>
              </p>

              <p>
              <span>Hasılat:</span>
              <span className="text-green-500 ms-2">${millify(movie.revenue)}</span>
              </p>
            </div>
            </div>

            <div>
             <Splide
             options={ {
              pagination: false,
              autoWidth : true,
              lazyload: true,
            } }>
            {movie?.credits?.cast.map((actor,i) => (
              <SplideSlide key={i}>
                <ActorCard actor={actor}/>
              </SplideSlide>
            ))}
             </Splide>
            </div>

        
          </>
        )}
      </div>
    </>
  );
};

export default DetailPage;
