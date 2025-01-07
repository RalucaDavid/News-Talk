namespace NewsTalkAPI.Domain.Entities
{
    public record Comment(
        string id,
        string idNews,
        string name,
        string content
    );
}
