using NewsTalkAPI.Settings.Interfaces;

namespace NewsTalkAPI.Settings.Implementations
{
    public class MongoDbSettings : IMongoDbSettings
    {
        public required string ConnectionString { get; set; }
        public required string DatabaseName { get; set; }
        public required string CommentsCollectionName { get; set; }
    }
}
