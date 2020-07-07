import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("users").truncate()
        .then(() => {
            // Inserts seed entries
            return knex("users").insert([
                { 
                    id: 1, 
                    first_name: "coby",
                    last_name: "east",
                    email: 'coby@east.com'
                },
                { 
                    id: 2, 
                    first_name: "pau",
                    last_name: "dom",
                    email: 'pau@dom.com'
                },
                { 
                    id: 3, 
                    first_name: "mazzy",
                    last_name: "dom",
                    email: 'mazzy@dom.com'
                },
            ]);
        });
};
