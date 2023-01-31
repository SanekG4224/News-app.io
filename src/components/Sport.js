import { useState, useEffect } from "react";
import { getArticlesByTag } from "../api";
import NewsInfo from "./NewsInfo";

function Sport () {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getArticlesByTag('sport/sport');
    setArticles(data.data.response.results);
  }

  return (
    <div>
      <h1>Sport</h1>
      {articles.map(article => {
        return (
          <NewsInfo article={article} />
        );
      })}
    </div>
    
  );
}

export default Sport;