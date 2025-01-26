using Microsoft.VisualStudio.TestPlatform.TestHost;
using NewsTalkAPI.Dtos;
using NewsTalkAPI.Tests.IntegrationTests.TestSetup;
using Newtonsoft.Json;
using System.Net;
using System.Text;

namespace NewsTalkAPI.Tests.IntegrationTests
{
    public class CommentControllerTests : IClassFixture<CustomWebApplicationFactory<Program>>
    {
        private readonly HttpClient _client;
        public CommentControllerTests(CustomWebApplicationFactory<Program> factory)
        {
            _client = factory.CreateClient();
        }

        [Fact]
        public async Task GetCommentsByIdNews_ReturnsOkResponse()
        {
            // Arrange
            var idNews = "12345";

            // Act
            var response = await _client.GetAsync($"/api/comment/get-comments-by-id-news?idNews={idNews}");

            // Assert
            response.EnsureSuccessStatusCode();
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }

        [Fact]
        public async Task PostComment_ReturnsCreatedResponse()
        {
            // Arrange
            var newComment = new CommentDto
            (
                content: "This is a test comment",
                name: "Test Author",
                idNews: "12345"
            );
            var comment = new StringContent(JsonConvert.SerializeObject(newComment), Encoding.UTF8, "application/json");

            // Act
            var response = await _client.PostAsync("/api/comment/add-comment", comment);

            // Assert
            response.EnsureSuccessStatusCode();
            Assert.Equal(HttpStatusCode.Created, response.StatusCode);
        }
    }
}
