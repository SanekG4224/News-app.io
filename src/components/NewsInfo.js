import newsImage from './../assets/news.jpg';

function NewsInfo({article, isSearchPage, searchWord}) {
  return(
    <div className="wrapper">
      <div className="News-info">
        {isSearchPage
          ?<>
            <h2><a href = {article.webUrl}> 
              {article.webTitle.split(searchWord)[0]} 
                <span style = {{backgroundColor: 'yellow'}}> {searchWord} </span> 
              {article.webTitle.split(searchWord)[1]}
            </a> </h2>
            <img src={newsImage} alt="" />
            <p id="date-info">{article.webPublicationDate.split('T')[0]}</p>
            <hr />
            <p>It was the proposal designed to take the heat out of when and where the leaders of the two major parties would debate each other in the lead-up to the election.</p>
          </>
        :
          <>
            <h2><a href = {article.webUrl}>{article.webTitle}</a></h2>
            <img src={newsImage} alt="" />
            <p id="date-info">{article.webPublicationDate.split('T')[0]}</p>
            <hr />
            <p>It was the proposal designed to take the heat out of when and where the leaders of the two major parties would debate each other in the lead-up to the election.</p>
          </>
        }
       </div>
    </div>
  );
}

export default NewsInfo;