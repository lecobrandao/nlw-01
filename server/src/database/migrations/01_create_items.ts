import Knex from 'knex';

export async function up(knex: Knex) {
    // faz: criar tabela
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('titulo').notNullable();
    })
};

export async function down(knex: Knex) {
    // desfaz: deletar tabela
    return knex.schema.dropTable('items');
};