import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
function DetailNew() {
  const { slug } = useParams();
  const [posts, setPost] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get(`https://sever-coffeehouse.herokuapp.com/news/${slug}`)
      .then((response) => {
        setPost(response.data.post);
      });
  }, [slug]);
  if (!posts) return null;
  console.log(posts);
  const someHtml = posts.content;

  return (
    <>
      <div className="pd-header">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <div
              className="box-post container rounded my-4 p-4"
              id="contentPost"
            >
              <p className="h1 text-capitalize">{posts.title}</p>
              {someHtml ? (
                <>
                  <div dangerouslySetInnerHTML={{ __html: someHtml }}></div>
                </>
              ) : (
                <>
                  <Skeleton height={50} className="my-3" />
                  <Skeleton count={3} />
                  <Skeleton height={700} with={377} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div>Slug: {slug}</div> */}
    </>
  );
}

export default DetailNew;
