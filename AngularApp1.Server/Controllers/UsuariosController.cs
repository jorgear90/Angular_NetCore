using AngularApp1.Server.Entidades;
using AngularApp1.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsuariosController(ApplicationDbContext context)
        {
            _context = context;
        }
     
        [HttpPost]

        public async Task<IActionResult> PostUsuario([FromBody] Usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Usuarios.Add(usuario);
            await _context.SaveChangesAsync();

            return Created("api/usuarios/" + usuario.Id, usuario);
        }

        [HttpGet("existeCorreo")]
        public async Task<IActionResult> ExisteCorreo(string correo)
        {
            var existe = await _context.Usuarios.AnyAsync(u => u.Correo == correo);
            return Ok(existe); // Retorna true si el correo existe, false en caso contrario
        }
    }
}
