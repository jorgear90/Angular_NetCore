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

        [HttpGet]
        public IActionResult GetTasksByEmail([FromQuery] string correo, [FromQuery] string estado)
        {
            var tareas = _context.Tareas
                .Where(t => t.Correo == correo && t.Estado == estado) // Filtrar por correo y estado
                .ToList();

            if (tareas == null || !tareas.Any())
            {
                return NotFound(); // Devuelve 404 si no hay tareas
            }

            return Ok(tareas); // Devuelve las tareas en un JSON
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTaskStatus(int id, [FromBody] UpdateTaskRequest request)
        {
            if (request == null || string.IsNullOrEmpty(request.Estado))
            {
                return BadRequest("El campo 'estado' es requerido.");
            }

            var tarea = _context.Tareas.FirstOrDefault(t => t.Id == id);
            if (tarea == null)
            {
                return NotFound(); // Devuelve 404 si no encuentra la tarea
            }

            tarea.Estado = request.Estado; // Asigna el nuevo estado
            _context.SaveChanges();

            return Ok(tarea); // Devuelve la tarea actualizada
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteTask(int id)
        {
            var tarea = _context.Tareas.FirstOrDefault(t => t.Id == id);
            if (tarea == null)
            {
                return NotFound(); // Devuelve 404 si no se encuentra la tarea
            }

            _context.Tareas.Remove(tarea); // Elimina la tarea de la base de datos
            _context.SaveChanges(); // Guarda los cambios

            return NoContent(); // Devuelve 204 No Content como confirmación
        }
    }
}
