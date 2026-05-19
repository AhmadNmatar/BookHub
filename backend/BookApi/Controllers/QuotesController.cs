using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookApi.Models;
using Microsoft.AspNetCore.Authorization;
namespace BookApi.Controllers;

[Route("[controller]")] 

[ApiController]
[Authorize]
public class QuotesController: ControllerBase
{
        private readonly AppDbContext _context;

    public QuotesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Quote>>> GetQuotes()
    {
        return await _context.Quotes.ToListAsync();
    }

    [HttpGet ("{id}")]
    public async Task<ActionResult<Quote>> GetQuoteById(int id)
    {
        var quote = await _context.Quotes.FindAsync(id);
        if (quote == null)
            return NotFound();

        return quote;
    }

    [HttpPost]
    public async Task<ActionResult<Quote>> AddQuote(Quote quote)
    {
        _context.Quotes.Add(quote);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetQuoteById), new { id = quote.Id }, quote);
    }

   [HttpPut("{id}")]
    public async Task<ActionResult> EditQuote(int id, Quote quote)
    {
        if (id != quote.Id)
            {
                return BadRequest();
            }

        _context.Entry(quote).State = EntityState.Modified;

        await _context.SaveChangesAsync();

        return NoContent();
        
    }

    [HttpDelete]
    public async Task<ActionResult> DeleteQuote(int id)
    {
        var quote = await _context.Quotes.FindAsync(id);
        if (quote == null)
            return NotFound();
        
        _context.Quotes.Remove(quote);

        await _context.SaveChangesAsync();

        return NoContent();

        
    }
}

