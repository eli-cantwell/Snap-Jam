/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    { id: 1, for: 1, user_id: 1, header: 'Great Project!', content: 'I love the details in this project. Great work!', time_created: '2024-01-01 12:00:00' },
    { id: 2, for: 2, user_id: 2, header: 'Needs Improvement', content: 'The project is good but needs some improvements in the documentation.', time_created: '2024-02-01 13:00:00' },
    { id: 3, for: 1, user_id: 3, header: 'Amazing!', content: 'This project is amazing! I learned a lot from it.', time_created: '2024-03-01 14:00:00' },
    { id: 4, for: 3, user_id: 1, header: 'Not Bad', content: 'The project is decent, but it could use more examples.', time_created: '2024-04-01 15:00:00' },
    { id: 5, for: 2, user_id: 3, header: 'Good Job', content: 'Good job on the project. The code is clean and well-documented.', time_created: '2024-05-01 16:00:00' },
    { id: 6, for: 3, user_id: 2, header: 'Interesting Approach', content: 'Interesting approach to solving the problem. I liked the unique perspective.', time_created: '2024-06-01 17:00:00' },
    { id: 7, for: 4, user_id: 4, header: 'Inspiring Work', content: 'Your project is very inspiring. Keep it up!', time_created: '2024-07-01 18:00:00' },
    { id: 8, for: 4, user_id: 1, header: 'Could Be Better', content: 'The project has potential but needs more features.', time_created: '2024-08-01 19:00:00' },
    { id: 9, for: 5, user_id: 5, header: 'Well Done', content: 'Well done on the project. It is very comprehensive.', time_created: '2024-09-01 20:00:00' },
    { id: 10, for: 5, user_id: 2, header: 'Great Execution', content: 'The execution of the project is top-notch. Kudos to the team.', time_created: '2024-10-01 21:00:00' }
  ]);
};
