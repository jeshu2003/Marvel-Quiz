const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

const questions = [
    {
        question: 'Who is Iron Man?',
        answers: [
            { text: 'Tony Stark', correct: true },
            { text: 'Steve Rogers', correct: false },
            { text: 'Bruce Banner', correct: false },
            { text: 'Peter Parker', correct: false }
        ]
    },
    {
        question: 'Who is the God of Thunder?',
        answers: [
            { text: 'Thor', correct: true },
            { text: 'Loki', correct: false },
            { text: 'Odin', correct: false },
            { text: 'Heimdall', correct: false }
        ]
    },
    {
        question: 'Which character first appeared in "Amazing Fantasy" #15?',
        answers: [
            { text: 'Iron Man', correct: false },
            { text: 'Spider-Man', correct: true },
            { text: 'Hulk', correct: false },
            { text: 'Thor', correct: false }
        ]
    },
    {
        question: 'What is the real name of the Scarlet Witch?',
        answers: [
            { text: 'Natasha Romanoff', correct: false },
            { text: 'Carol Danvers', correct: false },
            { text: 'Wanda Maximoff', correct: true },
            { text: 'Jean Grey', correct: false }
        ]
    },
    {
        question: 'In which comic did Black Panther make his first appearance?',
        answers: [
            { text: 'Fantastic Four #52', correct: true },
            { text: 'The Avengers #57', correct: false },
            { text: 'X-Men #1', correct: false },
            { text: 'Journey into Mystery #83', correct: false }
        ]
    },
    {
        question: 'Who is known as the "Merc with a Mouth"?',
        answers: [
            { text: 'Cable', correct: false },
            { text: 'Deadpool', correct: true },
            { text: 'Punisher', correct: false },
            { text: 'Bullseye', correct: false }
        ]
    },
    {
        question: 'What was the first Marvel movie to earn over $1 billion at the box office?',
        answers: [
            { text: 'Iron Man', correct: false },
            { text: 'Avengers: Endgame', correct: false },
            { text: 'The Avengers', correct: true },
            { text: 'Spider-Man: Homecoming', correct: false }
        ]
    },
    {
        question: 'Which Infinity Stone was located on Vormir?',
        answers: [
            { text: 'Power Stone', correct: false },
            { text: 'Time Stone', correct: false },
            { text: 'Soul Stone', correct: true },
            { text: 'Mind Stone', correct: false }
        ]
    },
    {
        question: 'Who was the villain in the "Iron Man" movie (2008)?',
        answers: [
            { text: 'Justin Hammer', correct: false },
            { text: 'Obadiah Stane', correct: true },
            { text: 'Aldrich Killian', correct: false },
            { text: 'Ivan Vanko', correct: false }
        ]
    },
    {
        question: 'What race is Ronan the Accuser?',
        answers: [
            { text: 'Kree', correct: true },
            { text: 'Skrull', correct: false },
            { text: 'Asgardian', correct: false },
            { text: 'Human', correct: false }
        ]
    },
    {
        question: 'What is Captain America’s shield made of?',
        answers: [
            { text: 'Adamantium', correct: false },
            { text: 'Vibranium', correct: true },
            { text: 'Carbonadium', correct: false },
            { text: 'Promethium', correct: false }
        ]
    },
    {
        question: 'Who is the Winter Soldier?',
        answers: [
            { text: 'Steve Rogers', correct: false },
            { text: 'Tony Stark', correct: false },
            { text: 'Bucky Barnes', correct: true },
            { text: 'Sam Wilson', correct: false }
        ]
    },
    {
        question: 'Who is Peter Parker’s best friend?',
        answers: [
            { text: 'Harry Osborn', correct: true },
            { text: 'Eddie Brock', correct: false },
            { text: 'Flash Thompson', correct: false },
            { text: 'Mary Jane Watson', correct: false }
        ]
    },
    {
        question: 'What is the real name of Black Panther?',
        answers: [
            { text: 'T’Challa', correct: true },
            { text: 'M’Baku', correct: false },
            { text: 'N’Jadaka', correct: false },
            { text: 'Nakia', correct: false }
        ]
    },
    {
        question: 'Which planet is Thanos from?',
        answers: [
            { text: 'Asgard', correct: false },
            { text: 'Titan', correct: true },
            { text: 'Xandar', correct: false },
            { text: 'Earth', correct: false }
        ]
    },
    {
        question: 'Who created Ultron?',
        answers: [
            { text: 'Tony Stark', correct: true },
            { text: 'Bruce Banner', correct: true },
            { text: 'Hank Pym', correct: false },
            { text: 'Nick Fury', correct: false }
        ]
    },
    {
        question: 'What is Doctor Strange’s real name?',
        answers: [
            { text: 'Stephen Strange', correct: true },
            { text: 'Steven Grant', correct: false },
            { text: 'Steve Rogers', correct: false },
            { text: 'Stephen King', correct: false }
        ]
    },
    {
        question: 'Who is the leader of the Guardians of the Galaxy?',
        answers: [
            { text: 'Rocket', correct: false },
            { text: 'Groot', correct: false },
            { text: 'Star-Lord', correct: true },
            { text: 'Drax', correct: false }
        ]
    },
    {
        question: 'What is the name of Thor’s hammer?',
        answers: [
            { text: 'Stormbreaker', correct: false },
            { text: 'Mjolnir', correct: true },
            { text: 'Gungnir', correct: false },
            { text: 'Jarnbjorn', correct: false }
        ]
    },
    {
        question: 'Which character was not a member of the original Avengers team?',
        answers: [
            { text: 'Hulk', correct: false },
            { text: 'Iron Man', correct: false },
            { text: 'Thor', correct: false },
            { text: 'Spider-Man', correct: true }
        ]
    },
    {
        question: 'Who is Tony Stark’s father?',
        answers: [
            { text: 'Howard Stark', correct: true },
            { text: 'Harold Stark', correct: false },
            { text: 'Henry Stark', correct: false },
            { text: 'Hank Stark', correct: false }
        ]
    },
    {
        question: 'What is the name of Black Panther’s sister?',
        answers: [
            { text: 'Nakia', correct: false },
            { text: 'Okoye', correct: false },
            { text: 'Shuri', correct: true },
            { text: 'Ramonda', correct: false }
        ]
    },
    {
        question: 'Who is the villain in the first Avengers movie?',
        answers: [
            { text: 'Ultron', correct: false },
            { text: 'Thanos', correct: false },
            { text: 'Loki', correct: true },
            { text: 'Red Skull', correct: false }
        ]
    },
    {
        question: 'What is the name of Peter Quill’s ship?',
        answers: [
            { text: 'Milano', correct: true },
            { text: 'Benatar', correct: false },
            { text: 'Enterprise', correct: false },
            { text: 'Serenity', correct: false }
        ]
    },
    {
        question: 'Who is the ruler of Asgard after Odin?',
        answers: [
            { text: 'Thor', correct: true },
            { text: 'Loki', correct: false },
            { text: 'Hela', correct: false },
            { text: 'Valkyrie', correct: false }
        ]
    },
    {
        question: 'Which character can manipulate metal?',
        answers: [
            { text: 'Magneto', correct: true },
            { text: 'Wolverine', correct: false },
            { text: 'Storm', correct: false },
            { text: 'Cyclops', correct: false }
        ]
    },
    {
        question: 'Who was the first Avenger to wield Mjolnir after Thor?',
        answers: [
            { text: 'Hulk', correct: false },
            { text: 'Iron Man', correct: false },
            { text: 'Captain America', correct: true },
            { text: 'Vision', correct: false }
        ]
    },
    {
        question: 'Who is the main villain in "Spider-Man: Homecoming"?',
        answers: [
            { text: 'Green Goblin', correct: false },
            { text: 'Vulture', correct: true },
            { text: 'Doctor Octopus', correct: false },
            { text: 'Mysterio', correct: false }
        ]
    },
    {
        question: 'What is the real name of the Wasp?',
        answers: [
            { text: 'Natasha Romanoff', correct: false },
            { text: 'Carol Danvers', correct: false },
            { text: 'Hope Van Dyne', correct: true },
            { text: 'Peggy Carter', correct: false }
        ]
    },
    {
        question: 'Who is the director of S.H.I.E.L.D.?',
        answers: [
            { text: 'Phil Coulson', correct: false },
            { text: 'Nick Fury', correct: true },
            { text: 'Maria Hill', correct: false },
            { text: 'Alexander Pierce', correct: false }
        ]
    },
    {
        question: 'What species is Groot?',
        answers: [
            { text: 'Flora colossus', correct: true },
            { text: 'Kree', correct: false },
            { text: 'Skrull', correct: false },
            { text: 'Celestial', correct: false }
        ]
    },
    {
        question: 'Which Avenger is from Wakanda?',
        answers: [
            { text: 'Black Panther', correct: true },
            { text: 'Falcon', correct: false },
            { text: 'War Machine', correct: false },
            { text: 'Spider-Man', correct: false }
        ]
    },
    {
        question: 'What does S.H.I.E.L.D. stand for?',
        answers: [
            { text: 'Strategic Homeland Intervention, Enforcement and Logistics Division', correct: true },
            { text: 'Supreme Headquarters, International Espionage, Law-Enforcement Division', correct: false },
            { text: 'Special Human Investigation and Espionage Logistics Division', correct: false },
            { text: 'Super Human Intelligence, Espionage and Logistics Directorate', correct: false }
        ]
    },
    {
        question: 'What is the name of Tony Stark’s AI assistant?',
        answers: [
            { text: 'JARVIS', correct: true },
            { text: 'FRIDAY', correct: false },
            { text: 'KAREN', correct: false },
            { text: 'EDITH', correct: false }
        ]
    },
    {
        question: 'Who plays the character of Peter Parker in the MCU?',
        answers: [
            { text: 'Tobey Maguire', correct: false },
            { text: 'Andrew Garfield', correct: false },
            { text: 'Tom Holland', correct: true },
            { text: 'Miles Morales', correct: false }
        ]
    },
    {
        question: 'Which character is known as the "Sorcerer Supreme"?',
        answers: [
            { text: 'Doctor Strange', correct: true },
            { text: 'Wong', correct: false },
            { text: 'Ancient One', correct: false },
            { text: 'Mordo', correct: false }
        ]
    },
    {
        question: 'What is the real name of the Black Widow?',
        answers: [
            { text: 'Natasha Romanoff', correct: true },
            { text: 'Carol Danvers', correct: false },
            { text: 'Wanda Maximoff', correct: false },
            { text: 'Jean Grey', correct: false }
        ]
    },
    {
        question: 'Who is the adoptive father of Gamora?',
        answers: [
            { text: 'Thanos', correct: true },
            { text: 'Star-Lord', correct: false },
            { text: 'Ronan', correct: false },
            { text: 'Drax', correct: false }
        ]
    },
    {
        question: 'What is the name of the super-soldier project that created Captain America?',
        answers: [
            { text: 'Weapon X', correct: false },
            { text: 'Project Rebirth', correct: true },
            { text: 'Operation Treadstone', correct: false },
            { text: 'MKUltra', correct: false }
        ]
    },
    {
        question: 'Which character is played by Scarlett Johansson?',
        answers: [
            { text: 'Black Widow', correct: true },
            { text: 'Scarlet Witch', correct: false },
            { text: 'Captain Marvel', correct: false },
            { text: 'Pepper Potts', correct: false }
        ]
    },
    {
        question: 'Who killed Tony Stark’s parents?',
        answers: [
            { text: 'Red Skull', correct: false },
            { text: 'Winter Soldier', correct: true },
            { text: 'Thanos', correct: false },
            { text: 'Ultron', correct: false }
        ]
    },
    {
        question: 'What is the real name of the Hulk?',
        answers: [
            { text: 'Bruce Banner', correct: true },
            { text: 'Tony Stark', correct: false },
            { text: 'Clint Barton', correct: false },
            { text: 'Steve Rogers', correct: false }
        ]
    },
    {
        question: 'Who is the king of the Inhumans?',
        answers: [
            { text: 'Black Bolt', correct: true },
            { text: 'Maximus', correct: false },
            { text: 'Medusa', correct: false },
            { text: 'Karnak', correct: false }
        ]
    },
    {
        question: 'Who is the leader of the Avengers?',
        answers: [
            { text: 'Iron Man', correct: false },
            { text: 'Captain America', correct: true },
            { text: 'Thor', correct: false },
            { text: 'Hulk', correct: false }
        ]
    },
    {
        question: 'What is the name of the set of documents that regulates the activities of enhanced individuals?',
        answers: [
            { text: 'The Sokovia Accords', correct: true },
            { text: 'The Superhero Registration Act', correct: false },
            { text: 'The Mutant Control Act', correct: false },
            { text: 'The Vigilante Registration Act', correct: false }
        ]
    },
    {
        question: 'What is the real name of Ant-Man?',
        answers: [
            { text: 'Scott Lang', correct: true },
            { text: 'Hank Pym', correct: false },
            { text: 'Sam Wilson', correct: false },
            { text: 'Clint Barton', correct: false }
        ]
    },
    {
        question: 'Which character can control weather?',
        answers: [
            { text: 'Storm', correct: true },
            { text: 'Thor', correct: false },
            { text: 'Loki', correct: false },
            { text: 'Hela', correct: false }
        ]
    },
    {
        question: 'Who is the director of the first Iron Man movie?',
        answers: [
            { text: 'Jon Favreau', correct: true },
            { text: 'Joss Whedon', correct: false },
            { text: 'Russo Brothers', correct: false },
            { text: 'Kenneth Branagh', correct: false }
        ]
    },
    {
        question: 'Which character is the king of Wakanda?',
        answers: [
            { text: 'Black Panther', correct: true },
            { text: 'Killmonger', correct: false },
            { text: 'M’Baku', correct: false },
            { text: 'Shuri', correct: false }
        ]
    },
    {
        question: 'What is the name of Peter Parker’s aunt?',
        answers: [
            { text: 'May Parker', correct: true },
            { text: 'Mary Parker', correct: false },
            { text: 'Margaret Parker', correct: false },
            { text: 'Michelle Parker', correct: false }
        ]
    },
    {
        question: 'Who was the villain in "Guardians of the Galaxy Vol. 2"?',
        answers: [
            { text: 'Ronan', correct: false },
            { text: 'Ego', correct: true },
            { text: 'Nebula', correct: false },
            { text: 'Thanos', correct: false }
        ]
    },
    {
        question: 'What is the real name of Hawkeye?',
        answers: [
            { text: 'Clint Barton', correct: true },
            { text: 'Scott Lang', correct: false },
            { text: 'Steve Rogers', correct: false },
            { text: 'Bruce Banner', correct: false }
        ]
    },
    {
        question: 'What is the name of the villain in "Thor: Ragnarok"?',
        answers: [
            { text: 'Hela', correct: true },
            { text: 'Loki', correct: false },
            { text: 'Surtur', correct: false },
            { text: 'Thanos', correct: false }
        ]
    },
    {
        question: 'Which character can shrink to microscopic size?',
        answers: [
            { text: 'Ant-Man', correct: true },
            { text: 'Hawkeye', correct: false },
            { text: 'Black Widow', correct: false },
            { text: 'Falcon', correct: false }
        ]
    },
    {
        question: 'Who is the villain in "Doctor Strange"?',
        answers: [
            { text: 'Kaecilius', correct: true },
            { text: 'Dormammu', correct: false },
            { text: 'Mordo', correct: false },
            { text: 'Ancient One', correct: false }
        ]
    },
    {
        question: 'Who is the main character in "Black Panther"?',
        answers: [
            { text: 'Killmonger', correct: false },
            { text: 'T’Challa', correct: true },
            { text: 'M’Baku', correct: false },
            { text: 'Shuri', correct: false }
        ]
    },
    {
        question: 'What is the real name of the Falcon?',
        answers: [
            { text: 'Sam Wilson', correct: true },
            { text: 'Scott Lang', correct: false },
            { text: 'Clint Barton', correct: false },
            { text: 'Steve Rogers', correct: false }
        ]
    },
    {
        question: 'Who is the main villain in "Avengers: Endgame"?',
        answers: [
            { text: 'Ultron', correct: false },
            { text: 'Loki', correct: false },
            { text: 'Thanos', correct: true },
            { text: 'Red Skull', correct: false }
        ]
    },
    {
        question: 'What is the real name of the Scarlet Witch?',
        answers: [
            { text: 'Wanda Maximoff', correct: true },
            { text: 'Natasha Romanoff', correct: false },
            { text: 'Carol Danvers', correct: false },
            { text: 'Jean Grey', correct: false }
        ]
    },
    {
        question: 'What is the name of the organization that Natasha Romanoff used to work for?',
        answers: [
            { text: 'KGB', correct: true },
            { text: 'CIA', correct: false },
            { text: 'FBI', correct: false },
            { text: 'MI6', correct: false }
        ]
    },
    {
        question: 'What is the name of Peter Quill’s mother?',
        answers: [
            { text: 'Meredith Quill', correct: true },
            { text: 'Jessica Quill', correct: false },
            { text: 'Amanda Quill', correct: false },
            { text: 'Laura Quill', correct: false }
        ]
    },
    {
        question: 'Which character is played by Benedict Cumberbatch?',
        answers: [
            { text: 'Doctor Strange', correct: true },
            { text: 'Hawkeye', correct: false },
            { text: 'Star-Lord', correct: false },
            { text: 'Iron Man', correct: false }
        ]
    },
    {
        question: 'Who was the first superhero in the Marvel Cinematic Universe?',
        answers: [
            { text: 'Iron Man', correct: true },
            { text: 'Captain America', correct: false },
            { text: 'Hulk', correct: false },
            { text: 'Thor', correct: false }
        ]
    },
    {
        question: 'What is the real name of Captain Marvel?',
        answers: [
            { text: 'Carol Danvers', correct: true },
            { text: 'Monica Rambeau', correct: false },
            { text: 'Natasha Romanoff', correct: false },
            { text: 'Jean Grey', correct: false }
        ]
    },
    {
        question: 'Who plays the character of Loki in the MCU?',
        answers: [
            { text: 'Tom Hiddleston', correct: true },
            { text: 'Chris Hemsworth', correct: false },
            { text: 'Mark Ruffalo', correct: false },
            { text: 'Jeremy Renner', correct: false }
        ]
    },
    {
        question: 'Which character is the adopted brother of Thor?',
        answers: [
            { text: 'Loki', correct: true },
            { text: 'Heimdall', correct: false },
            { text: 'Odin', correct: false },
            { text: 'Sif', correct: false }
        ]
    },
    {
        question: 'What is the real name of the character known as the Winter Soldier?',
        answers: [
            { text: 'Bucky Barnes', correct: true },
            { text: 'Steve Rogers', correct: false },
            { text: 'Sam Wilson', correct: false },
            { text: 'Tony Stark', correct: false }
        ]
    },
    {
        question: 'Who is the main villain in "Thor: The Dark World"?',
        answers: [
            { text: 'Loki', correct: false },
            { text: 'Malekith', correct: true },
            { text: 'Surtur', correct: false },
            { text: 'Hela', correct: false }
        ]
    },
    {
        question: 'Who plays the character of Black Widow in the MCU?',
        answers: [
            { text: 'Scarlett Johansson', correct: true },
            { text: 'Elizabeth Olsen', correct: false },
            { text: 'Brie Larson', correct: false },
            { text: 'Zoe Saldana', correct: false }
        ]
    },
    {
        question: 'Who is the leader of the X-Men?',
        answers: [
            { text: 'Professor X', correct: true },
            { text: 'Cyclops', correct: false },
            { text: 'Wolverine', correct: false },
            { text: 'Storm', correct: false }
        ]
    },
    {
        question: 'What is the name of Tony Stark’s father?',
        answers: [
            { text: 'Howard Stark', correct: true },
            { text: 'Harold Stark', correct: false },
            { text: 'Henry Stark', correct: false },
            { text: 'Hank Stark', correct: false }
        ]
    },
    {
        question: 'What is the name of the AI that Tony Stark creates to replace JARVIS?',
        answers: [
            { text: 'FRIDAY', correct: true },
            { text: 'EDITH', correct: false },
            { text: 'KAREN', correct: false },
            { text: 'ULTRON', correct: false }
        ]
    },
    {
        question: 'Who is the leader of the Black Order?',
        answers: [
            { text: 'Thanos', correct: true },
            { text: 'Proxima Midnight', correct: false },
            { text: 'Corvus Glaive', correct: false },
            { text: 'Ebony Maw', correct: false }
        ]
    },
    {
        question: 'Which character is a sentient tree?',
        answers: [
            { text: 'Groot', correct: true },
            { text: 'Rocket', correct: false },
            { text: 'Drax', correct: false },
            { text: 'Gamora', correct: false }
        ]
    },
    {
        question: 'What is the name of the Marvel character played by Chris Pratt?',
        answers: [
            { text: 'Star-Lord', correct: true },
            { text: 'Hawkeye', correct: false },
            { text: 'Thor', correct: false },
            { text: 'Doctor Strange', correct: false }
        ]
    },
    {
        question: 'What is the name of the character played by Chris Hemsworth?',
        answers: [
            { text: 'Thor', correct: true },
            { text: 'Captain America', correct: false },
            { text: 'Iron Man', correct: false },
            { text: 'Hawkeye', correct: false }
        ]
    },
    {
        question: 'Which character has a pet named Goose?',
        answers: [
            { text: 'Captain Marvel', correct: true },
            { text: 'Black Widow', correct: false },
            { text: 'Hawkeye', correct: false },
            { text: 'Ant-Man', correct: false }
        ]
    },
    {
        question: 'Who is the main villain in "Ant-Man"?',
        answers: [
            { text: 'Yellowjacket', correct: true },
            { text: 'Ghost', correct: false },
            { text: 'Crossbones', correct: false },
            { text: 'Taskmaster', correct: false }
        ]
    },
    {
        question: 'Who is the leader of the Avengers?',
        answers: [
            { text: 'Captain America', correct: true },
            { text: 'Iron Man', correct: false },
            { text: 'Thor', correct: false },
            { text: 'Hulk', correct: false }
        ]
    },
    {
        question: 'Which character has a prosthetic arm?',
        answers: [
            { text: 'Winter Soldier', correct: true },
            { text: 'Iron Man', correct: false },
            { text: 'Hawkeye', correct: false },
            { text: 'Falcon', correct: false }
        ]
    },
    {
        question: 'What is the name of the Marvel superhero played by Paul Rudd?',
        answers: [
            { text: 'Ant-Man', correct: true },
            { text: 'Hawkeye', correct: false },
            { text: 'Doctor Strange', correct: false },
            { text: 'Black Panther', correct: false }
        ]
    },
    {
        question: 'What is the real name of the character known as the Falcon?',
        answers: [
            { text: 'Sam Wilson', correct: true },
            { text: 'Scott Lang', correct: false },
            { text: 'Clint Barton', correct: false },
            { text: 'Steve Rogers', correct: false }
        ]
    },
    {
        question: 'Which character is the main villain in "Spider-Man: Homecoming"?',
        answers: [
            { text: 'Vulture', correct: true },
            { text: 'Mysterio', correct: false },
            { text: 'Doctor Octopus', correct: false },
            { text: 'Green Goblin', correct: false }
        ]
    },
    {
        question: 'What is the real name of the character known as the Wasp?',
        answers: [
            { text: 'Hope Van Dyne', correct: true },
            { text: 'Janet Van Dyne', correct: false },
            { text: 'Natasha Romanoff', correct: false },
            { text: 'Carol Danvers', correct: false }
        ]
    },
    {
        question: 'Which character is the director of S.H.I.E.L.D.?',
        answers: [
            { text: 'Nick Fury', correct: true },
            { text: 'Maria Hill', correct: false },
            { text: 'Phil Coulson', correct: false },
            { text: 'Alexander Pierce', correct: false }
        ]
    },
    {
        question: 'What is the real name of the character known as Black Panther?',
        answers: [
            { text: 'T’Challa', correct: true },
            { text: 'T’Chaka', correct: false },
            { text: 'Killmonger', correct: false },
            { text: 'M’Baku', correct: false }
        ]
    }
];
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
//to start the game
function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
//to select the next question
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
//to show the questions
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
