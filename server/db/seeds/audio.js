/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('audio').del()
  await knex('audio').insert([
        { id: 1, filepath: '/audio/project1/audio1.mp3', project_id: 1, length: '120', created: '2024-01-01 12:00:00', created_by: '1' },

  ]);
};
