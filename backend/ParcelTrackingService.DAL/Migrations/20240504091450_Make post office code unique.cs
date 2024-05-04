using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParcelTrackingService.DAL.Migrations
{
    /// <inheritdoc />
    public partial class Makepostofficecodeunique : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "post_offices_code_key",
                table: "post_offices",
                column: "Code",
                unique: true
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(name: "post_offices_code_key", table: "post_offices");
        }
    }
}
