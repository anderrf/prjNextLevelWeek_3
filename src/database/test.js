const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222623",
        lng: "-49.6455274",
        name: "Lar da Paz",
        about: "Presta cuidado a crianças de 05 a 14 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "1234567890",
        images: [
            "https://source.unsplash.com/random?id=1",
            "https://source.unsplash.com/random?id=2"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    });
    
    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
    console.log(orphanage);

    //Deletar dados da tabela
    //await db.run('DELETE FROM orphanages WHERE id = "2"');
});