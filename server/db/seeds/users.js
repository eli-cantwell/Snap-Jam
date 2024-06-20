
import bcrypt from 'bcrypt'

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      auth0_id: 'auth0|1234567890abcdef',
      user_name: 'johndoe',
      pwd: await bcrypt.hash('password123', 10), // hashing the password
      email: 'johndoe@example.com',
      full_name: 'John Doe'
    },
    {
      id: 2,
      auth0_id: 'auth0|abcdef1234567890',
      user_name: 'janedoe',
      pwd: await bcrypt.hash('password456', 10),  // hashing the password
      email: 'janedoe@example.com',
      full_name: 'Jane Doe'
    },
    {
      id: 3,
      auth0_id: 'auth0|7890abcdef123456',
      user_name: 'alexsmith',
      pwd: await bcrypt.hash('password789', 10),  // hashing the password
      email: 'alexsmith@example.com',
      full_name: 'Alex Smith'
    }
  ]);
};
