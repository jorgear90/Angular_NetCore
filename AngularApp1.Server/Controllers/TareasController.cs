using AngularApp1.Server.Entidades;
using AngularApp1.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TareasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public TareasController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]

        public async Task<IActionResult> PostTarea([FromBody] Tarea tarea)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Tareas.Add(tarea);
            await _context.SaveChangesAsync();

            return Created("api/tareas/" + tarea.Id, tarea);
        }
    }
}
