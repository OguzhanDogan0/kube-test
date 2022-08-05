module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "sigmademo",
            user: "demo",
            password: "Demo1.",
            host: '185.133.252.215',
            port:'5432',
        },
        //Şema
        migrations: {
            //Dosya yolunu veriyoruz
            //Daha sonrasında bizim için oluşturacak
            directory: "./migrations",
        },
        seeds:
        {
            directory: "./seeds",
        },
        productions:{

        }
    }
}