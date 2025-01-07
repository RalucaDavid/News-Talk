using NewsTalkAPI.Domain.Entities;

namespace NewsTalkAPI.Data.Daos.Interfaces
{
    public interface ICommentDao
    {
        Task AddComment(Comment comment);
        Task<List<Comment>> GetAllCommentsByIdNews(string IdNews);
    }
}
