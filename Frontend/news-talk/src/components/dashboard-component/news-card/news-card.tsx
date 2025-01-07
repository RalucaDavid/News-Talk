import classes from './news-card.module.css';
import { Image, Text } from '@mantine/core';

interface NewsCardProps{
    src: string;
    title: string;
    onClick?: () => void;
};

const NewsCard = ({src, title, onClick}: NewsCardProps) => {
    return (
        <div className={classes.card} onClick={onClick}>
            <Image src={src} className={classes.image}/>
            <Text className={classes.title}>{title}</Text>
        </div>
    );
};

export default NewsCard;