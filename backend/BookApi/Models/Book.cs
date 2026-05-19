namespace BookApi.Models;

public class Book
{
    public int Id { get; set; }
    public  string Title { get; set; } = string.Empty;
    public  string Author { get; set; } = string.Empty;
    public  string Gener {get; set;} = string.Empty;
    public  string PublishedYear {get; set;} = string.Empty;
}