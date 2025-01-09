import { ScrollArea } from '@mantine/core';
import classes from './dashboard-component.module.css';
import { useEffect, useState } from 'react';
import { fetchNews } from '../../services/newsService';
import NewsCard from './news-card';
import CustomModal from '../custom-modal';
import ArticleComponent from './article-component';
import { Dictionary } from '../../dictionaries/en';
import FormComment from './form-comment';
import { Article } from '../../models/article';

const DashBoardComponent = () => {
    const [news, setNews] = useState<Article[]>([]);
    const [currentNews, setCurrentNews] = useState<Article | null>(null);

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

    const handleOnClickNews = (article: Article) => {
        setCurrentNews(article);
        openModal('news');
    }

    return (
        <>
            <div className={classes.dashboardWrapper}>
                <ScrollArea className={classes.scrollArea}>
                    {news.map((article, index) => (
                        <NewsCard key={index} src={article.urlToImage} title={article.title} onClick={() => {handleOnClickNews(article)}} />
                    ))}
                </ScrollArea>
            </div>
            <CustomModal opened={activeModal === 'news'} onClose={closeModal} title={Dictionary.news}>
                {currentNews && (
                    <ArticleComponent
                        title={currentNews.title}
                        src={currentNews.urlToImage}
                        description={currentNews.description}
                        link={currentNews.url}
                        openForm={()=>{openModal('form')}}
                    />
                )}
            </CustomModal>
            <CustomModal opened={activeModal === 'form'} onClose={closeModal} title={Dictionary.addComment}>
                {currentNews && <FormComment idNews={currentNews.url} onAutoClose={closeModal}/>}
            </CustomModal>
        </>
    );
}

export default DashBoardComponent;