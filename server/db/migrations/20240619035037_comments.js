/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function(knex) {
    return knex.schema.createTable('comments', (Table) => {
        Table.integer('id').primary()
        Table.integer('for') //Ref: - projects.id
        Table.integer('user_id') //Ref - users.id (who created the comment)
        Table.string('header')
        Table.string('content')
        Table.timestamp('time_created')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function(knex) {
    return knex.schema.dropTable('comments')
  
};
