// src/order/order.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
@Entity('order')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  user_id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  total_amount: number;

  @Column({ type: 'varchar', length: 50, nullable: false, default: 'pending' })
  status: string;

  @Column({ type: 'text', nullable: false })
  shipping_address: string;

  @Column({ type: 'text', nullable: false })
  billing_address: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  payment_method: string;

  @Column({ type: 'varchar', length: 50, nullable: false, default: 'pending' })
  payment_status: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'user_id' })
  user: User;
}