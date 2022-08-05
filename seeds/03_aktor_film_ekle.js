/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('aktorfilm').del()
  await knex('aktorfilm').insert([
    {film_id: 1, aktor_id: 1},
    {film_id: 2, aktor_id: 2},
    {film_id: 3, aktor_id: 3}
  ]);
};
