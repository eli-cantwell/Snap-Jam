/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
  return knex.schema.createTable('comments', (Table) => {
    Table.integer('id').primary()
    Table.integer('for') //Ref: - projects.id
    Table.integer('auth0_id') //Ref - users.id (who created the comment)
    Table.string('created_by')
    Table.string('user_picture')
    Table.string('content')
    Table.timestamp('time_created')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
  return knex.schema.dropTable('comments')
}
