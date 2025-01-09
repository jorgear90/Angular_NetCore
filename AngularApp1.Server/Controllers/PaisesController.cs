using AngularApp1.Server.Entidades;
using AngularApp1.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaisesController
    {
        private readonly ApplicationDbContext _context;

        public PaisesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsuarios()
        {
            return Ok(await _context.Paises.ToListAsync());
        }

        private IActionResult Ok(List<Pais> pais)
        {
            throw new NotImplementedException();
        }
    }
}
