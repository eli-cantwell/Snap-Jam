
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    knex.schema.createTable('users', (Table) => {
        Table.integer('id').primary(),
        Table.string('auth0_id'),
        Table.string('user_name'),
        Table.string('pwd'),
        Table.string('email'),
        Table.string('full_name')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    knex.schema.dropTable('users')
  
};
