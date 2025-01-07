using NewsTalkAPI.Dtos;

namespace NewsTalkAPI.Service.Interfaces
{
    public interface ICommentService
    {
        Task AddComment(CommentDto comment);
        Task<List<CommentDto>> GetAllCommentsByIdNews(string IdNews);
    }
}
