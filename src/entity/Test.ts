import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export default class Test {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  test: string

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  create_time: string

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'})
  update_time: string
}
