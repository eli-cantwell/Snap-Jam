/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    knex.schema.createTable('project', (Table) => {
        Table.integer('id').primary()
        Table.string('project_name')
        Table.integer('owner_id') //Ref: > users.id
        Table.json('contributor_id') //  as {"array" : [1,2,3,4,5,6,67,7,3]}
        Table.integer('tempo')
        Table.string('created_by')
        Table.json('comments') //Ref: > comments.id  as {"comments": [1, 2, 4, 6, 123, 54323,]}
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
    knex.schema.dropTable('project')
};
