using Mongo2Go;
using MongoDB.Driver;

namespace NewsTalkAPI.Tests.IntegrationTests.TestSetup
{
    public class MongoDbFixture : IDisposable
    {
        public MongoDbRunner Runner { get; private set; }
        public IMongoClient Client { get; private set; }
        public IMongoDatabase Database { get; private set; }

        public MongoDbFixture()
        {
            Runner = MongoDbRunner.Start();

            Client = new MongoClient(Runner.ConnectionString);
            Database = Client.GetDatabase("TestDatabase");
            CreateCollections();

        }

        private void CreateCollections()
        {
            Database.CreateCollection("Comments");
        }

        public void Dispose()
        {
            try
            {
                var collectionNames = Database.ListCollectionNames().ToList();
                Database.DropCollection("Comments");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error deleting collection: {ex.Message}");
            }
            finally
            {
                Runner.Dispose();
            }
        }

    }
}
