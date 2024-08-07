export const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(() =>{
        let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setArticles(data.articles));
    }, [category])

  return (
    <div>
        <h2 className='text-center'><span className='badge bg-primary p-2'>News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} 
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                    />
        })}
    </div>
  )
}
