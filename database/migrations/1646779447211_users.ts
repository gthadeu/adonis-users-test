import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('username')
      table.text('password')
      table.text('email')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
