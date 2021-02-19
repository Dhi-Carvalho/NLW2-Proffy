const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    proffyValue = {
        name: "Diego Fernades",
        avatar: "https://avatars.githubusercontent.com/u/2254731?s=460&u=4fcc8ca9672eeb41ea800271831b7c687bc17054&v=4",
        whatsapp: 85452233464,
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20"
    }

    classScheduleValues = [
        {
            weekday: [0],
            time_from: [720],
            time_to: [1220],
        },
        {
            weekday: [3],
            time_from: [480],
            time_to: [1020],
        }
    ]

//await createProffy(db, {proffyValue, classValue, classScheduleValues})

const selectedProffys = await db.all("SELECT * FROM proffys")

const selectedClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
`)

const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "720"
    AND class_schedule.time_to > "1219"
`)

console.log(selectClassesSchedules)

})