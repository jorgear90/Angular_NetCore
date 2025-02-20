﻿using AngularApp1.Server.Entidades;
using Microsoft.EntityFrameworkCore;
using System.Threading;

namespace AngularApp1.Server.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        // Agrega aquí tus DbSet para las tablas, por ejemplo:
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Pais> Paises { get; set; }
        public DbSet<Tarea> Tareas { get; set; }
    }
}

