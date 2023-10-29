"use client"
import { useGetMovies } from "@/hooks/useMovies"
import Card from "../components/Card"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import Link from "next/link"
import {useParams, useSearchParams} from 'next/navigation'
import { useState } from "react"

export default function ListMovie(){
    const [sortsBy, setsortBy] = useState('popularity.desc');
    const params = useSearchParams();
    const data = useGetMovies(sortsBy,params.get('page'));
    console.log(data);
    return(
        <>
    <div>
      <select name="" id="" onChange={e =>setsortBy(e.target.value)}>
        <option value="popularity.desc">Popularity Desc</option>
        <option value="popularity.asc">Popularity Asc</option>
      </select>
    </div>

            <div className="grid lg:grid-cols-5 sm:grid-cols-3 grild-cols-1 justify-center sm:justify-around gap-5">
                {data?.results?.map((item,index) => (
                    <Card image={item.poster_path} overview={item.overview} id={item.id} popularity={item.popularity} title={item.title} key={item.id}/>
                ))}
            </div>

            <div className="flex justify-center gap-10 mt-10">
                <ul className="flex items-center gap-5">
                    <li><AiOutlineArrowLeft/></li>
                    <li>
                        <Link href="/?page=1">
                            1
                        </Link>
                    </li>
                    <li>
                        <Link href="/?page=2">
                            2
                        </Link>
                    </li>
                    <li>
                        <Link href="/?page=3">
                            3
                        </Link>
                    </li>
                    <li>
                        <Link href="/?page=4">
                            4
                        </Link>
                    </li>
                    <li>
                        <Link href="/?page=5">
                            5
                        </Link>
                    </li>
                    <li><AiOutlineArrowRight/></li>
                </ul>
            </div>
        </>
    )
}