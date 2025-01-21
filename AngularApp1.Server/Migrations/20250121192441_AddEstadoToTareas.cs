using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AngularApp1.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddEstadoToTareas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Estado",
                table: "Tareas",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Estado",
                table: "Tareas");
        }
    }
}
