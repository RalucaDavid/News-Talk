using Microsoft.Extensions.Options;
using MongoDB.Driver;
using NewsTalkAPI.Domain.Entities;

namespace NewsTalkAPI.Data
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;

        public MongoDbContext(IOptions<MongoDbSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            _database = client.GetDatabase(settings.Value.DatabaseName);
        }

        public IMongoCollection<Comment> Comments => _database.GetCollection<Comment>("Comments");
    }
}
