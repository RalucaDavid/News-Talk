using Microsoft.AspNetCore.Mvc;
using NewsTalkAPI.Domain.Entities;
using NewsTalkAPI.Dtos;
using NewsTalkAPI.Service.Interfaces;

namespace NewsTalkAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : Controller
    {
        private readonly ICommentService _commentService;

        public CommentController(ICommentService commentService)
        {
            _commentService = commentService;
        }

        [HttpPost("add-comment")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> AddComment(CommentDto commentDto)
        {
            try
            {
                await _commentService.AddComment(commentDto);
                return StatusCode(201, "The comment has been successfully added.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }

        [HttpGet("get-comments-by-id-news")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetAllCommentsByIdNews(string idNews)
        {
            try
            {
                var comments = await _commentService.GetAllCommentsByIdNews(idNews);
                return Ok(comments);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
    }
}
