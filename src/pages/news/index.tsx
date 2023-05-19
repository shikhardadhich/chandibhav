import { useState, useEffect } from "react";
import { Header } from "../../templates/Header";
import { Footer } from "../../templates/Footer";
import { Logo } from "../../templates/Logo";

function News() {
  const [posts, setPosts] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://goldpricetoday.co.in/wp-json/wp/v2/posts?categories=803"
      );
      const data = await response.json();
      setIsLoading(false);
      setPosts(data);
    }
    fetchData();
    
  }, []);

  useEffect(() => {
    async function fetchImageData() {
      posts.forEach(async (post) => {
        const response = await fetch(
          `https://goldpricetoday.co.in/wp-json/wp/v2/media/${post.featured_media}`
        )
          .then((res) => res.json())
          .then((data) => {
            setImageData(data);
            var myImg = document.getElementById(post.id) as HTMLImageElement;
            myImg.src = data.source_url;

            // post.featured_img = data.source_url;
          });
      });
    }
    fetchImageData();
  }, [posts]);

  return (
    <>
      <Header></Header>
       {isLoading ? <div className="flex items-stretch place-content-center h-96 justify-center">
    {/* <img src='/assets/images/chandibhavlogo.png' className="animate-spin h-48 w-48 mr-3" /> */}

    Loading ....
    </div> :
    
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => {
          return (
            <div
              key={post.id}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <img id={post.id} />
                <h1 className="text-lg leading-6 font-medium text-orange-900">
                  {post.title.rendered}
                </h1>
                <div
                  className="mt-2 max-w2xl text-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>

              <div className="px-4 py-4 sm:px-6">
                <a
                  href={post.link}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Read more &rarr;
                </a>
              </div>
            </div>
          );
        })}
      </div>
      }
      <Footer></Footer>
    </>
  );
}

export default News;
