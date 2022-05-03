

import { React} from "react"
import {getNews} from "../redux/selector";

import { useSelector} from 'react-redux';

import ListNews from "../components/ListNews";
export default function PageNews(){
    const listNews = useSelector(getNews);
  

    return(
    
        <div className="pd-header">
            <div className="container-fluid">
                <div className="pd-w-100 section-Chapter">
                <div className="text-center fs-3">
                        <i className="fas fa-newspaper fs-4 color-primary" /> Tin tức
                </div>
                    
                { <ListNews news={listNews}/> }
                </div>
            </div>

        </div>
    
    )
}