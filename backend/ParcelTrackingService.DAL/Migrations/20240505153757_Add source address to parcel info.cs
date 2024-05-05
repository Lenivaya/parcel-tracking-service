using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParcelTrackingService.DAL.Migrations
{
    /// <inheritdoc />
    public partial class Addsourceaddresstoparcelinfo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "parcel_status_histories");

            migrationBuilder.AddColumn<string>(
                name: "DeliverySourceAddress",
                table: "parcel_infos",
                type: "text",
                nullable: false,
                defaultValue: ""
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "DeliverySourceAddress", table: "parcel_infos");

            migrationBuilder.CreateTable(
                name: "parcel_status_histories",
                columns: table => new
                {
                    Id = table.Column<Guid>(
                        type: "uuid",
                        nullable: false,
                        defaultValueSql: "gen_random_uuid()"
                    ),
                    ParcelId = table.Column<Guid>(type: "uuid", nullable: false),
                    StatusId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_parcel_status_histories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_parcel_status_histories_BaseEntity_Id",
                        column: x => x.Id,
                        principalTable: "BaseEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                    table.ForeignKey(
                        name: "FK_parcel_status_histories_parcel_statuses_StatusId",
                        column: x => x.StatusId,
                        principalTable: "parcel_statuses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                    table.ForeignKey(
                        name: "FK_parcel_status_histories_parcels_ParcelId",
                        column: x => x.ParcelId,
                        principalTable: "parcels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateIndex(
                name: "IX_parcel_status_histories_ParcelId",
                table: "parcel_status_histories",
                column: "ParcelId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_parcel_status_histories_StatusId",
                table: "parcel_status_histories",
                column: "StatusId"
            );
        }
    }
}
