using NewsTalkAPI.Domain.Entities;
using NewsTalkAPI.Dtos;
using NewsTalkAPI.Service.Interfaces;
using NewsTalkAPI.Data.Daos.Interfaces;

namespace NewsTalkAPI.Service.Implementations
{
    public class CommentService : ICommentService
    {
        private readonly ICommentDao _commentDao;

        public CommentService(ICommentDao commentDao)
        {
            _commentDao = commentDao;
        }

        public async Task AddComment(CommentDto commentDto)
        {
            if (commentDto == null || string.IsNullOrWhiteSpace(commentDto.content) || string.IsNullOrWhiteSpace(commentDto.name))
            {
                throw new ArgumentException("Not a valid comment.");
            }

            var comment = new Comment(
                Guid.NewGuid().ToString(),
                commentDto.idNews,
                commentDto.name,
                commentDto.content
            );

            await _commentDao.AddComment(comment);
        }

        public async Task<List<CommentDto>> GetAllCommentsByIdNews(string idNews)
        {
            if (string.IsNullOrWhiteSpace(idNews))
            {
                throw new ArgumentException("Not a valid id.");
            }

            var comments = await _commentDao.GetAllCommentsByIdNews(idNews);

            return comments.Select(c => new CommentDto(c.idNews, c.name, c.content)).ToList();
        }
    }
}
