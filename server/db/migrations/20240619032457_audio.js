/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function(knex) {
    return knex.schema.createTable('audio', (Table) => {
        Table.integer('id').primary()
        Table.string('filepath')
        Table.integer('project_id') // Ref: - projects.id
        Table.string('length') // duration in seconds?
        Table.timestamp('created')
        Table.string('created_by') //Ref: - users.id
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function(knex) {
    return knex.schema.dropTable('audio')
  
};
