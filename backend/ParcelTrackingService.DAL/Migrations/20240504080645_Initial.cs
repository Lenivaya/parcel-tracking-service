using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParcelTrackingService.DAL.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BaseEntity",
                columns: table => new
                {
                    Id = table.Column<Guid>(
                        type: "uuid",
                        nullable: false,
                        defaultValueSql: "gen_random_uuid()"
                    ),
                    created_at = table.Column<DateTime>(
                        type: "timestamp without time zone",
                        nullable: true,
                        defaultValueSql: "now()"
                    ),
                    updated_at = table.Column<DateTime>(
                        type: "timestamp without time zone",
                        nullable: true,
                        defaultValueSql: "now()"
                    )
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseEntity", x => x.Id);
                }
            );

            migrationBuilder.CreateTable(
                name: "delivery_statuses",
                columns: table => new
                {
                    Id = table.Column<Guid>(
                        type: "uuid",
                        nullable: false,
                        defaultValueSql: "gen_random_uuid()"
                    ),
                    StatusName = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_delivery_statuses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_delivery_statuses_BaseEntity_Id",
                        column: x => x.Id,
                        principalTable: "BaseEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateTable(
                name: "post_offices",
                columns: table => new
                {
                    Id = table.Column<Guid>(
                        type: "uuid",
                        nullable: false,
                        defaultValueSql: "gen_random_uuid()"
                    ),
                    Address = table.Column<string>(type: "text", nullable: false),
                    Code = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_post_offices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_post_offices_BaseEntity_Id",
                        column: x => x.Id,
                        principalTable: "BaseEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    Id = table.Column<Guid>(
                        type: "uuid",
                        nullable: false,
                        defaultValueSql: "gen_random_uuid()"
                    ),
                    email = table.Column<string>(
                        type: "character varying(100)",
                        maxLength: 100,
                        nullable: false
                    ),
                    Username = table.Column<string>(type: "text", nullable: false),
                    password_hash = table.Column<string>(
                        type: "character varying(60)",
                        maxLength: 60,
                        nullable: false
                    )
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_users_BaseEntity_Id",
                        column: x => x.Id,
                        principalTable: "BaseEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateTable(
                name: "parcel_infos",
                columns: table => new
                {
                    Id = table.Column<Guid>(
                        type: "uuid",
                        nullable: false,
                        defaultValueSql: "gen_random_uuid()"
                    ),
                    DeliveryDestinationAddress = table.Column<string>(
                        type: "text",
                        nullable: false
                    ),
                    PriceToPay = table.Column<decimal>(type: "numeric", nullable: false),
                    SenderId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_parcel_infos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_parcel_infos_BaseEntity_Id",
                        column: x => x.Id,
                        principalTable: "BaseEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                    table.ForeignKey(
                        name: "FK_parcel_infos_users_SenderId",
                        column: x => x.SenderId,
                        principalTable: "users",
                        principalColumn: "Id"
                    );
                }
            );

            migrationBuilder.CreateTable(
                name: "parcels",
                columns: table => new
                {
                    Id = table.Column<Guid>(
                        type: "uuid",
                        nullable: false,
                        defaultValueSql: "gen_random_uuid()"
                    ),
                    ParcelInfoId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_parcels", x => x.Id);
                    table.ForeignKey(
                        name: "FK_parcels_BaseEntity_Id",
                        column: x => x.Id,
                        principalTable: "BaseEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                    table.ForeignKey(
                        name: "FK_parcels_parcel_infos_ParcelInfoId",
                        column: x => x.ParcelInfoId,
                        principalTable: "parcel_infos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateTable(
                name: "parcel_statuses",
                columns: table => new
                {
                    Id = table.Column<Guid>(
                        type: "uuid",
                        nullable: false,
                        defaultValueSql: "gen_random_uuid()"
                    ),
                    StatusDescription = table.Column<string>(type: "text", nullable: false),
                    Date = table.Column<DateTime>(
                        type: "timestamp with time zone",
                        nullable: false
                    ),
                    ParcelId = table.Column<Guid>(type: "uuid", nullable: false),
                    DeliveryStatusId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_parcel_statuses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_parcel_statuses_BaseEntity_Id",
                        column: x => x.Id,
                        principalTable: "BaseEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                    table.ForeignKey(
                        name: "FK_parcel_statuses_delivery_statuses_DeliveryStatusId",
                        column: x => x.DeliveryStatusId,
                        principalTable: "delivery_statuses",
                        principalColumn: "Id"
                    );
                    table.ForeignKey(
                        name: "FK_parcel_statuses_parcels_ParcelId",
                        column: x => x.ParcelId,
                        principalTable: "parcels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

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
                name: "IX_parcel_infos_SenderId",
                table: "parcel_infos",
                column: "SenderId"
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

            migrationBuilder.CreateIndex(
                name: "IX_parcel_statuses_DeliveryStatusId",
                table: "parcel_statuses",
                column: "DeliveryStatusId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_parcel_statuses_ParcelId",
                table: "parcel_statuses",
                column: "ParcelId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_parcels_ParcelInfoId",
                table: "parcels",
                column: "ParcelInfoId"
            );

            migrationBuilder.CreateIndex(
                name: "users_email_key",
                table: "users",
                column: "email",
                unique: true
            );

            migrationBuilder.CreateIndex(
                name: "users_username_key",
                table: "users",
                column: "Username",
                unique: true
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "parcel_status_histories");

            migrationBuilder.DropTable(name: "post_offices");

            migrationBuilder.DropTable(name: "parcel_statuses");

            migrationBuilder.DropTable(name: "delivery_statuses");

            migrationBuilder.DropTable(name: "parcels");

            migrationBuilder.DropTable(name: "parcel_infos");

            migrationBuilder.DropTable(name: "users");

            migrationBuilder.DropTable(name: "BaseEntity");
        }
    }
}
