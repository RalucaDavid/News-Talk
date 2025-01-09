import { Text } from '@mantine/core';
import classes from './comment-component.module.css';

interface CommentComponentProps {
    name: string;
    content: string;
}

const CommentComponent = ({name, content}: CommentComponentProps) => {
   return (
    <div className={classes.commentWrapper}>
        <Text className={classes.name}>{name}</Text>
        <Text className={classes.content}>{content}</Text>
    </div>
   );
};

export default CommentComponent;