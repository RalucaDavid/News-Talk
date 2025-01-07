namespace NewsTalkAPI.Data
{
    public class MongoDbSettings
    {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
        public string CommentsCollectionName { get; set; }
    }
}
