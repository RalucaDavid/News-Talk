import { ScrollArea } from '@mantine/core';
import classes from './dashboard-component.module.css';
import { useEffect, useState } from 'react';
import { fetchNews } from '../../services/newsService';
import NewsCard from './news-card';

const DashBoardComponent = () => {
    const [news, setNews] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const articles = await fetchNews();
                setNews(articles);
            } catch (error: any) {
                setError('There was an error fetching the news');
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={classes.dashboardWrapper}>
            <ScrollArea className={classes.scrollArea}>
                {news.map((article, index) => (
                    <NewsCard key={index} src={article.urlToImage} title={article.title}/>
                ))}
            </ScrollArea>
        </div>
    );
}

export default DashBoardComponent;