import NewsCard from '../news-card';
import { ScrollArea, Text } from '@mantine/core';
import classes from './article-component.module.css';
import { Dictionary } from '../../../dictionaries/en';
import ButtonComment from './button-comment';
import { NewsComment } from '../../../models/news-comment';
import { useEffect, useState } from 'react';
import { fetchComments } from '../../../services/commentService';
import CommentComponent from './comment-component';

interface ArticleComponentProps {
    title: string;
    src: string;
    description: string;
    link: string;
    openForm: () => void;
};

const ArticleComponent = ({ title, src, description, link, openForm }: ArticleComponentProps) => {
    const [comments, setComments] = useState<NewsComment[]>([]);

    useEffect(() => {
        const getComments = async () => {
            try {
                const comments = await fetchComments(link);
                setComments(comments);
            } catch (error: any) {
                console.log('There was an error fetching the comments:', error);
            }
        };

        getComments();
    }, []);

    return (
        <div className={classes.articleWrapper}>
            <NewsCard src={src} title={title}></NewsCard>
            <Text className={classes.description}>{description}</Text>
            <a href={link} target="_blank" rel="noreferrer" className={classes.link}>{Dictionary.readMore}</a>
            <Text className={classes.comments}>{Dictionary.comments}</Text>
            <ScrollArea h={300}>
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <CommentComponent key={index} name={comment.name} content={comment.content} />
                    ))
                ) : (
                    <Text className={classes.noComments}>{Dictionary.noComments}</Text>
                )}
            </ScrollArea>
            <ButtonComment onClick={openForm} />
        </div>
    );
};

export default ArticleComponent;