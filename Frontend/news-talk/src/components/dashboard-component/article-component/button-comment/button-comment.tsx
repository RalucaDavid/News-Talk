import { Dictionary } from '../../../../dictionaries/en';
import { Text } from '@mantine/core';
import { IoSend } from "react-icons/io5";
import classes from './button-comment.module.css';

interface ButtonCommentProps{
   onClick: () => void;
}

const ButtonComment = ({onClick}: ButtonCommentProps) => {
    return (
      <div className={classes.wrapper} onClick={onClick}>
        <Text>{Dictionary.writeComment}</Text>
        <IoSend />
      </div>
    );
};

export default ButtonComment;