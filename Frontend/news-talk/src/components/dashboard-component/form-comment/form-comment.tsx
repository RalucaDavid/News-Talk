
import { Button, TextInput, Text } from '@mantine/core';
import { Dictionary } from '../../../dictionaries/en';
import classes from './form-comment.module.css';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { addComment } from '../../../services/commentService';
import { NewsComment } from '../../../models/news-comment';

const schema = yup.object().shape({
    name: yup
        .string()
        .required(Dictionary.nameRequired),
    content: yup
        .string()
        .required(Dictionary.contentRequired),
});

interface FormCommentProps{
   idNews: string;
   onAutoClose: () => void;
}

const FormComment = ({idNews, onAutoClose}: FormCommentProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onSubmit = async (data: any) => {
        try {
            const comment: NewsComment = {
                idNews,
                name: data.name,
                content: data.content,
            };
            await addComment(comment);
            onAutoClose();
        } catch (error: any) {
            setErrorMessage(Dictionary.error);
        }
    };

    return (
        <div className={classes.formWrapper}> 
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <TextInput
                    placeholder={Dictionary.name}
                    {...register('name')}
                    classNames={{ input: classes.inputStyle }}
                />
                <TextInput
                    placeholder={Dictionary.content}
                    {...register('content')}
                    classNames={{ input: classes.inputStyle }}
                />
                <Button type="submit" className={classes.buttonStyle}>{Dictionary.send}</Button>
            </form>
            <Text size="sm" className={classes.errorMessage}>
                {errors.name?.message || errors.content?.message || errorMessage}
            </Text>
        </div>
    );
};

export default FormComment;

