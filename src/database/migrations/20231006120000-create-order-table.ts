// src/migrations/20231006120000-create-order-table.ts
import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateOrderTable20231006120000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create Order Table
    await queryRunner.createTable(
      new Table({
        name: 'order',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'total_amount',
            type: 'decimal',
            precision: 10,
            scale: 2,
            isNullable: false,
          },
          {
            name: 'status',
            type: 'varchar',
            length: '50',
            isNullable: false,
            default: "'pending'",
          },
          {
            name: 'shipping_address',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'billing_address',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'payment_method',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'payment_status',
            type: 'varchar',
            length: '50',
            isNullable: false,
            default: "'pending'",
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['user_id'],
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
        ],
      }),
      true,
    );

    // Add Indexes
    await queryRunner.createIndex(
      'order',
      new TableIndex({
        name: 'IDX_ORDER_USER_ID',
        columnNames: ['user_id'],
      }),
    );

    await queryRunner.createIndex(
      'order',
      new TableIndex({
        name: 'IDX_ORDER_STATUS',
        columnNames: ['status'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('order', true);
  }
}