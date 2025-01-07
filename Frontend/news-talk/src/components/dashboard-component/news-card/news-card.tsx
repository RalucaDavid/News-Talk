import classes from './news-card.module.css';
import { Image, Text } from '@mantine/core';

interface NewsCardProps{
    src: string;
    title: string;
};

const NewsCard = ({src, title}: NewsCardProps) => {
    return (
        <div className={classes.card}>
            <Image src={src} className={classes.image}/>
            <Text className={classes.title}>{title}</Text>
        </div>
    );
};

export default NewsCard;