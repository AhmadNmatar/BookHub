using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookApi.Models;
using Microsoft.AspNetCore.Authorization;
namespace BookApi.Controllers;



[Route("[controller]")] 
[ApiController]
[Authorize]
public class BooksController : ControllerBase
{
    private readonly AppDbContext _context;

    public BooksController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/books
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
    {
        return await _context.Books.ToListAsync();
    }

    // GET: api/books/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Book>> GetBookById(int id)
    {
        var book = await _context.Books.FindAsync(id);

        if (book == null)
            return NotFound();

        return book;
    }

    // POST: api/books
    [HttpPost]
    public async Task<ActionResult<Book>> PostBook(Book book)
    {
        _context.Books.Add(book);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetBookById), new { id = book.Id }, book);
    }

[HttpDelete("{id}")]
public async Task<IActionResult> DeleteBook(int id)
{
    var book = await _context.Books.FindAsync(id);

    if (book == null)
    {
        return NotFound();
    }

    _context.Books.Remove(book);

    await _context.SaveChangesAsync();

    return NoContent();
}

[HttpPut("{id}")]
public async Task<IActionResult> UpdateBook(int id, Book book)
{
    if (id != book.Id)
    {
        return BadRequest();
    }

    _context.Entry(book).State = EntityState.Modified;

    await _context.SaveChangesAsync();

    return NoContent();
}

    
}