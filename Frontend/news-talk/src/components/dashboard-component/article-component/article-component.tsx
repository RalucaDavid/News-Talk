import NewsCard from '../news-card';
import { Text } from '@mantine/core';
import classes from './article-component.module.css';
import { Dictionary } from '../../../dictionaries/en';

interface ArticleComponentProps {
    id: string;
    title: string;
    src: string;
    description: string;
    link: string;
};

const ArticleComponent = ({id, title, src, description, link}: ArticleComponentProps) => {
    return(
       <div className={classes.articleWrapper}>
            <NewsCard src={src} title={title}></NewsCard>
            <Text className={classes.description}>{description}</Text>
            <a href={link} target="_blank" rel="noreferrer" className={classes.link}>{Dictionary.readMore}</a>
       </div>
    );
};

export default ArticleComponent;