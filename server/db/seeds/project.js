/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('project').del()
  await knex('project').insert([
    {
      id: 1,
      project_name: 'Project Alpha',
      description: 'yay1',
      owner_id: 1,
      contributor_id: JSON.stringify([2, 3]),
      tempo: 120,
      created_by: 'johndoe',
      comments: JSON.stringify([1, 2])
    },
    {
      id: 2,
      project_name: 'Project Beta',
      description: 'yay2',
      owner_id: 2,
      contributor_id: JSON.stringify([1, 3]),
      tempo: 95,
      created_by: 'janedoe',
      comments: JSON.stringify([3, 1])
    },
    {
      id: 3,
      project_name: 'Project Gamma',
      description: 'yay3',
      owner_id: 3,
      contributor_id: JSON.stringify([1, 2]),
      tempo: 110,
      created_by: 'alexsmith',
      comments: JSON.stringify([1, 3])
    }
  ]);
};
