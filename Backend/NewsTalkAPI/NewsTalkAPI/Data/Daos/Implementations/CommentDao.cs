using MongoDB.Driver;
using NewsTalkAPI.Data.Daos.Interfaces;
using NewsTalkAPI.Domain.Entities;

namespace NewsTalkAPI.Data.Daos.Implementations
{
    public class CommentDao : ICommentDao
    {
        private readonly IMongoCollection<Comment> _commentsCollection;

        public CommentDao(MongoDbContext dbContext)
        {
            _commentsCollection = dbContext.Comments;
        }

        public async Task AddComment(Comment comment)
        {
            await _commentsCollection.InsertOneAsync(comment);
        }

        public async Task<List<Comment>> GetAllCommentsByIdNews(string idNews)
        {
            return await _commentsCollection.Find(c => c.idNews == idNews).ToListAsync();
        }
    }
}
