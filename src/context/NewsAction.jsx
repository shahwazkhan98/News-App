export const getNews = async (topic) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2023-03-16&sortBy=publishedAt&apiKey=991425e66db7487d9fc89605a52a9b0c`)
    const data = await response.json()
    return data.articles
    // console.log(`https://newsapi.org/v2/everything?q=tesla&from=2023-03-16&sortBy=publishedAt&apiKey=991425e66db7487d9fc89605a52a9b0c`)
}