/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('audio').del()
  await knex('audio').insert([
        { id: 1, filepath: '/audio/project1/audio1.mp3', project_id: 1, length: '120', created: '2024-01-01 12:00:00', created_by: '1' },
        { id: 2, filepath: '/audio/project2/audio1.mp3', project_id: 2, length: '150', created: '2024-02-01 13:00:00', created_by: '2' },
        { id: 3, filepath: '/audio/project1/audio2.mp3', project_id: 1, length: '200', created: '2024-03-01 14:00:00', created_by: '3' },
        { id: 4, filepath: '/audio/project3/audio1.mp3', project_id: 3, length: '180', created: '2024-04-01 15:00:00', created_by: '1' },
        { id: 5, filepath: '/audio/project2/audio2.mp3', project_id: 2, length: '240', created: '2024-05-01 16:00:00', created_by: '3' },
        { id: 6, filepath: '/audio/project3/audio2.mp3', project_id: 3, length: '300', created: '2024-06-01 17:00:00', created_by: '2' },
        { id: 7, filepath: '/audio/project4/audio1.mp3', project_id: 4, length: '90', created: '2024-07-01 18:00:00', created_by: '4' },
        { id: 8, filepath: '/audio/project4/audio2.mp3', project_id: 4, length: '60', created: '2024-08-01 19:00:00', created_by: '1' },
        { id: 9, filepath: '/audio/project5/audio1.mp3', project_id: 5, length: '210', created: '2024-09-01 20:00:00', created_by: '5' },
        { id: 10, filepath: '/audio/project5/audio2.mp3', project_id: 5, length: '270', created: '2024-10-01 21:00:00', created_by: '2' }
  ]);
};
