import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("posts").truncate()
        .then(() => {
            // Inserts seed entries
            return knex("posts").insert([
                { 
                    id: 1, 
                    name: "coby's walk",
                    text: "hi",
                    user_id: 3,
                },
                { 
                    id: 2, 
                    name: "pau's walk",
                    text: "hi",
                    user_id: 3,
                },
                { 
                    id: 3, 
                    name: "mazzy's walk",
                    text: "hi",
                    user_id: 3,
                },
            ]);
        });
};
