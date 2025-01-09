import { NewsComment } from "../models/news-comment";
import apiClient from "./api-client";

export const fetchComments = async (idNews: string) => {
    try {
        const response = await apiClient.get("comment/get-comments-by-id-news", {
            params: { idNews: idNews }
        });
        return response.data;
    }
    catch (error) {
        console.error('Error getting the comments:', error);
        throw error;
    }
};

export const addComment = async (comment: NewsComment) => {
    try {
        const response = await apiClient.post("comment/add-comment", comment);
        return response.data;
    }
    catch (error) {
        console.error('Error adding the comment:', error);
        throw error;
    }
}