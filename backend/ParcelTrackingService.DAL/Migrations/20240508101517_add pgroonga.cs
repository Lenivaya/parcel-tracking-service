using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParcelTrackingService.DAL.Migrations
{
    /// <inheritdoc />
    public partial class addpgroonga : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase().Annotation("Npgsql:PostgresExtension:pgroonga", ",,");

            migrationBuilder
                .CreateIndex(
                    name: "IX_post_offices_Address",
                    table: "post_offices",
                    column: "Address"
                )
                .Annotation("Npgsql:IndexMethod", "pgroonga")
                .Annotation(
                    "Npgsql:IndexOperators",
                    new[] { "pgroonga_varchar_full_text_search_ops_v2" }
                );

            migrationBuilder
                .CreateIndex(name: "IX_post_offices_Code", table: "post_offices", column: "Code")
                .Annotation("Npgsql:IndexMethod", "pgroonga")
                .Annotation(
                    "Npgsql:IndexOperators",
                    new[] { "pgroonga_varchar_full_text_search_ops_v2" }
                );

            migrationBuilder
                .CreateIndex(
                    name: "IX_parcel_infos_DeliveryDestinationAddress",
                    table: "parcel_infos",
                    column: "DeliveryDestinationAddress"
                )
                .Annotation("Npgsql:IndexMethod", "pgroonga")
                .Annotation(
                    "Npgsql:IndexOperators",
                    new[] { "pgroonga_varchar_full_text_search_ops_v2" }
                );

            migrationBuilder
                .CreateIndex(
                    name: "IX_parcel_infos_DeliverySourceAddress",
                    table: "parcel_infos",
                    column: "DeliverySourceAddress"
                )
                .Annotation("Npgsql:IndexMethod", "pgroonga")
                .Annotation(
                    "Npgsql:IndexOperators",
                    new[] { "pgroonga_varchar_full_text_search_ops_v2" }
                );

            migrationBuilder
                .CreateIndex(
                    name: "IX_parcel_infos_Description",
                    table: "parcel_infos",
                    column: "Description"
                )
                .Annotation("Npgsql:IndexMethod", "pgroonga")
                .Annotation(
                    "Npgsql:IndexOperators",
                    new[] { "pgroonga_varchar_full_text_search_ops_v2" }
                );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(name: "IX_post_offices_Address", table: "post_offices");

            migrationBuilder.DropIndex(name: "IX_post_offices_Code", table: "post_offices");

            migrationBuilder.DropIndex(
                name: "IX_parcel_infos_DeliveryDestinationAddress",
                table: "parcel_infos"
            );

            migrationBuilder.DropIndex(
                name: "IX_parcel_infos_DeliverySourceAddress",
                table: "parcel_infos"
            );

            migrationBuilder.DropIndex(name: "IX_parcel_infos_Description", table: "parcel_infos");

            migrationBuilder
                .AlterDatabase()
                .OldAnnotation("Npgsql:PostgresExtension:pgroonga", ",,");
        }
    }
}
