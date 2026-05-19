using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using BookApi.Models;


namespace BookApi.Controllers; 
[Route("[controller]")] 
[ApiController]

public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IConfiguration _config;

    public AuthController(AppDbContext context, IConfiguration config)
    {
        _context = context;
        _config= config;
    }

        [HttpPost("register")]
    public async Task<ActionResult<User>> Register(User user)
    {
        _context.Users.Add(user);

        await _context.SaveChangesAsync();

        var userToken = GenerateToken(user);

        return Ok(userToken); 
    }

     [HttpPost("login")]
    public async Task<ActionResult<string>> Login(User loginUser)
    {
        var user = await _context.Users
            .FirstOrDefaultAsync(u => u.Email == loginUser.Email);

        if (user == null)
        {
            return Unauthorized("Invalid email");
        }

        if (user.Password != loginUser.Password)
        {
            return Unauthorized("Invalid password");
        }

        var userToken = GenerateToken(user);

        return Ok(userToken); 
    }
        

     private string GenerateToken(User user)
    {
        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.Email),
            new Claim(ClaimTypes.GivenName, user.FirstName)
        };

        var key = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(_config["Jwt:Key"]!)
        );

        var creds = new SigningCredentials(
            key,
            SecurityAlgorithms.HmacSha256
        );

        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            claims: claims,
            expires: DateTime.Now.AddHours(1),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}