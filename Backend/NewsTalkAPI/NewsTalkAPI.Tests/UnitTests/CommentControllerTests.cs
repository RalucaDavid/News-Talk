using Moq;
using NewsTalkAPI.Controllers;
using NewsTalkAPI.Dtos;
using NewsTalkAPI.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace NewsTalkAPI.Tests.UnitTests
{
    public class CommentControllerTests
    {
        private readonly Mock<ICommentService> _mockCommentService;
        private readonly CommentController _controller;

        public CommentControllerTests()
        {
            _mockCommentService = new Mock<ICommentService>();
            _controller = new CommentController(_mockCommentService.Object);
        }

        [Fact]
        public async Task AddComment_Returns201_WhenCommentIsAddedSuccessfully()
        {
            // Arrange
            var commentDto = new CommentDto("123", "John Doe", "Test comment");
            _mockCommentService
                .Setup(service => service.AddComment(It.IsAny<CommentDto>()))
                .Returns(Task.CompletedTask);

            // Act
            var result = await _controller.AddComment(commentDto);

            // Assert
            var actionResult = Assert.IsType<ObjectResult>(result);
            Assert.Equal(201, actionResult.StatusCode);
        }

        [Fact]
        public async Task GetAllCommentsByIdNews_Returns200_WhenCommentsAreFound()
        {
            // Arrange
            var idNews = "123";
            var simulatedComments = new List<CommentDto>
                {
                    new CommentDto("123", "User 1", "Content 1"),
                    new CommentDto("123", "User 2", "Content 2")
                };
            _mockCommentService
                .Setup(service => service.GetAllCommentsByIdNews(idNews))
                .ReturnsAsync(simulatedComments);

            // Act
            var result = await _controller.GetAllCommentsByIdNews(idNews);

            // Assert
            var actionResult = Assert.IsType<OkObjectResult>(result);
            var comments = Assert.IsAssignableFrom<List<CommentDto>>(actionResult.Value);
            Assert.NotEmpty(comments);
        }

        [Fact]
        public async Task GetAllCommentsByIdNews_ReturnsEmptyList_WhenNoCommentsAreFound()
        {
            // Arrange
            var idNews = "123";
            var simulatedEmptyComments = new List<CommentDto>();
            _mockCommentService
                .Setup(service => service.GetAllCommentsByIdNews(idNews))
                .ReturnsAsync(simulatedEmptyComments);

            // Act
            var result = await _controller.GetAllCommentsByIdNews(idNews);

            // Assert
            var actionResult = Assert.IsType<OkObjectResult>(result);
            var comments = Assert.IsAssignableFrom<List<CommentDto>>(actionResult.Value);
            Assert.Empty(comments);
        }
    }
}

