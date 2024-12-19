module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "db_database",
            user: "db_user",
            password: "db_pass",
            host: 'host-ip',
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
