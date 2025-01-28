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

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto loginDto)
        {
            // Busca el usuario por correo
            var usuario = _context.Usuarios.FirstOrDefault(u => u.Correo == loginDto.Correo);
            if (usuario == null)
            {
                return BadRequest("El correo no existe.");
            }

            // Valida la contraseña
            if (usuario.Password != loginDto.Password) // Usa hashing en producción
            {
                return BadRequest("Contraseña incorrecta.");
            }

            // Retorna una respuesta exitosa
            return Ok(new { message = "Login exitoso" });
        }
    }
}
