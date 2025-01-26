using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;

namespace NewsTalkAPI.Tests.IntegrationTests.TestSetup
{
    public class CustomWebApplicationFactory<TProgram> : WebApplicationFactory<TProgram> where TProgram : class
    {
        private MongoDbFixture _mongoDbFixture;

        public CustomWebApplicationFactory()
        {
            _mongoDbFixture = new MongoDbFixture();
        }

        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureServices(services =>
            {
                services.AddSingleton<IMongoClient>(_mongoDbFixture.Client);
                services.AddSingleton<IMongoDatabase>(_mongoDbFixture.Database);
            });
        }
        protected override void Dispose(bool disposing)
        {
            _mongoDbFixture.Dispose();
        }
    }
}
