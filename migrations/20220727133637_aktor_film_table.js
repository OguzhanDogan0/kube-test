/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    //tablo oluşturmak için kullanılan komut
  return  knex.schema.createTable('aktor', (table) => {
    //Otomatik ıd oluşturulması komutu
    table.increments();
    table.string('isim').notNullable();
    

  }).createTable('filmler', (table) => {
    table.increments();
    table.string('isim').notNullable();
  }).createTable('aktorfilm', (table) => {
        table.increments();
        table.integer('film_id').unsigned();
        table.integer('aktor_id').unsigned();
        table.foreign('aktor_id');
        table.foreign('film_id');
      //  .references('film_id').onUpdate('CASCADE').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('aktorfilm').dropTableIfExists('filmler').dropTableIfExists('aktor');
};
