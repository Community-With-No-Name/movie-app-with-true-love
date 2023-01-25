import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import { SliderProps } from "../interface/interface";
import { carousel_url } from "../libs/endpoints";
import ScrolingCards from "../components/scrolingCards";
import Card from "../components/card";
export default function HomePg() {
  const [allMovies, setAllMovies] = useState<SliderProps[]>([]);
  console.log(allMovies, "hii");

  const scrolls = [
    {
      title: "Now Playing",
      url: "",
      speed: 2800,
    },
    {
      title: "Popular",
      url: "",
      speed: 3100,
    },
    {
      title: "Top rated",
      url: "",
      speed: 3400,
    },
  ];
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(carousel_url)
        .then((res) => {
          console.log(res, "res");
          setAllMovies(res.data.results);
        })
        .catch((error) => alert("please reload the pageeee"));
    };
    return fetchData();
  }, []);
  return (
    <Layout>
      <div className='flex flex-col justify-center  w-full'>
        {scrolls.map((scroll, i) => (
          <ScrolingCards
            title={scroll.title}
            url={scroll.url}
            speed={scroll.speed}
          >
            {allMovies?.map((movies, i) => (
              <div key={i}>
                <Card data={movies} type='movie' />
              </div>
            ))}
          </ScrolingCards>
        ))}
      </div>
    </Layout>
  );
}
