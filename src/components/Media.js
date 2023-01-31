import { useState, useEffect } from "react";
import { getArticlesByTag } from "../api";
import NewsInfo from "./NewsInfo";

function Media () {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getArticlesByTag('media/media');
    setArticles(data.data.response.results);
  }

  return (
    <div>
      {articles.map(article => {
        return (
         <NewsInfo article={article} />
        );
      })}
    </div>
    
  );
}

export default Media;