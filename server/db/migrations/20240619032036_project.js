/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function(knex) {
    return knex.schema.createTable('project', (Table) => {
        Table.integer('id').primary()
        Table.string('project_name')
        Table.string('description')
        Table.integer('owner_id')
        Table.json('contributor_id') 
        Table.integer('tempo')
        Table.string('created_by')
        Table.json('comments') 
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function(knex) {
    return knex.schema.dropTable('project')
};
