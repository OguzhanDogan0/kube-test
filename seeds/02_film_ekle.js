/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('filmler').del()
  await knex('filmler').insert([
    {id: 1, isim: 'tosun pasa'},
    {id: 2, isim: 'banker bilo'},
    {id: 3, isim: 'Neseli Gunler'}
  ]);
};
