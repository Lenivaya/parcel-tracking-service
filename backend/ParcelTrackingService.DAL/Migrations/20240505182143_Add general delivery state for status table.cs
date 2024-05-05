using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParcelTrackingService.DAL.Migrations
{
    /// <inheritdoc />
    public partial class Addgeneraldeliverystateforstatustable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GeneralDeliveryState",
                table: "delivery_statuses",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GeneralDeliveryState",
                table: "delivery_statuses");
        }
    }
}
