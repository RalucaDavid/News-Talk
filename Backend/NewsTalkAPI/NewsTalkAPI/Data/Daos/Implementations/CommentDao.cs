using MongoDB.Driver;
using NewsTalkAPI.Data.Daos.Interfaces;
using NewsTalkAPI.Domain.Entities;
using NewsTalkAPI.Settings.Interfaces;
using System.Threading.Tasks;

namespace NewsTalkAPI.Data.Daos.Implementations
{
    public class CommentDao : ICommentDao
    {
        private readonly IMongoCollection<Comment> _commentsCollection;

        public CommentDao(IMongoDbSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _commentsCollection = database.GetCollection<Comment>(settings.CommentsCollectionName);
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
