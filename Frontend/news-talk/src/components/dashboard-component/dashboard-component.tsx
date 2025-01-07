import { ScrollArea } from '@mantine/core';
import classes from './dashboard-component.module.css';
import { useEffect, useState } from 'react';
import { fetchNews } from '../../services/newsService';
import NewsCard from './news-card';
import CustomModal from '../custom-modal';
import ArticleComponent from './article-component';
import { Dictionary } from '../../dictionaries/en';

const DashBoardComponent = () => {
    const [news, setNews] = useState<any[]>([]);
    const [currentNews, setCurrentNews] = useState<any | null>(null);

    const [activeModal, setActiveModal] = useState<string | null>(null);
    const openModal = (modalName: string) => setActiveModal(modalName);
    const closeModal = () => setActiveModal(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const articles = await fetchNews();
                setNews(articles);
            } catch (error: any) {
                console.log('There was an error fetching the news:', error);
            }
        };

        getNews();
    }, []);

    const handleOnClickNews = (article: any) => {
        setCurrentNews(article);
        openModal('news');
    }

    return (
        <>
            <div className={classes.dashboardWrapper}>
                <ScrollArea className={classes.scrollArea}>
                    {news.map((article, index) => (
                        <NewsCard key={index} src={article.urlToImage} title={article.title} onClick={() => { handleOnClickNews(article) }} />
                    ))}
                </ScrollArea>
            </div>
            <CustomModal opened={activeModal === 'news'} onClose={closeModal} title={Dictionary.news}>
                {currentNews && (
                    <ArticleComponent
                        id={currentNews.id}
                        title={currentNews.title}
                        src={currentNews.urlToImage}
                        description={currentNews.description}
                        link={currentNews.url}
                    />
                )}
            </CustomModal>
            <CustomModal opened={activeModal === 'faq'} onClose={closeModal} title={Dictionary.addComment}>
                <p></p>
            </CustomModal>
        </>
    );
}

export default DashBoardComponent;