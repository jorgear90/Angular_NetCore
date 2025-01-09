using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AngularApp1.Server.Entidades
{
    public class Usuario
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Correo { get; set; }
        public string Pais { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int D_nacimiento { get; set; }
        public int M_nacimiento { get; set; }
        public int A_nacimiento { get; set; }
        public string Password { get; set; }
    }
}
