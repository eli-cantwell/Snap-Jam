
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable('users', (Table) => {
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
    return knex.schema.dropTable('users')
  
};
