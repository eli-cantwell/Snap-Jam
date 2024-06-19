/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    knex.schema.createTable('project', (Table) => {
        Table.integer('id').primary()
        Table.string('project_name')
        Table.integer('owner_id') //Ref: > users.id
        Table.json('contributer_id') // {"array" : [1,2,3,4,5,6,67,7,3]}
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
    knex.schema.dropTable('project')
};
