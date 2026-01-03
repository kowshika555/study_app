export const content = {
  "early-learners": {
    label: "Early Learners (4-6 Years)",
    color: "#FFB7D5",
    games: [
      {
        id: "alphabet-adventure",
        title: "Alphabet Adventure",
        icon: "🅰️",
        levels: {
          easy: [
            { question: "Which letter comes after A?", options: ["B", "C", "D", "E"], answer: "B" },
            { question: "Which letter comes before Z?", options: ["Y", "X", "W", "V"], answer: "Y" },
            { question: "Which letter is for 'Apple'?", options: ["A", "B", "C", "D"], answer: "A" },
            { question: "Which letter is for 'Ball'?", options: ["B", "A", "M", "S"], answer: "B" },
            { question: "Click the letter C", options: ["C", "G", "O", "Q"], answer: "C" },
            { question: "What is the first letter of 'Dog'?", options: ["D", "G", "F", "E"], answer: "D" },
            { question: "Which letter comes after M?", options: ["N", "L", "O", "P"], answer: "N" },
            { question: "Which letter looks like a circle?", options: ["O", "U", "I", "E"], answer: "O" },
            { question: "What is the first letter of 'Sun'?", options: ["S", "C", "Z", "X"], answer: "S" },
            { question: "How many letters in 'CAT'?", options: ["3", "2", "4", "1"], answer: "3" },
            { question: "Which letter is for 'Elephant'?", options: ["E", "F", "L", "H"], answer: "E" },
            { question: "Which letter comes after S?", options: ["T", "R", "U", "V"], answer: "T" },
            { question: "Which letter starts 'Bird'?", options: ["B", "D", "P", "Q"], answer: "B" },
            { question: "Which letter starts 'Fish'?", options: ["F", "S", "T", "V"], answer: "F" },
            { question: "Click the letter L", options: ["L", "I", "T", "J"], answer: "L" },
            { question: "What letter starts 'Mango'?", options: ["M", "N", "H", "W"], answer: "M" },
            { question: "Which letter comes after B?", options: ["C", "D", "E", "F"], answer: "C" },
            { question: "Which letter comes after D?", options: ["E", "F", "G", "H"], answer: "E" },
            { question: "Which letter comes after F?", options: ["G", "H", "I", "J"], answer: "G" },
            { question: "Which letter comes after H?", options: ["I", "J", "K", "L"], answer: "I" },
            { question: "Which letter starts 'Octopus'?", options: ["O", "P", "Q", "R"], answer: "O" },
            { question: "Which letter starts 'Rabbit'?", options: ["R", "B", "P", "S"], answer: "R" },
            { question: "Click the letter X", options: ["X", "K", "Y", "V"], answer: "X" },
            { question: "Click the letter P", options: ["P", "Q", "B", "R"], answer: "P" },
            { question: "What letter starts 'Zebra'?", options: ["Z", "S", "X", "Y"], answer: "Z" }
          ],
          medium: [
            { question: "What starts with 'B'?", options: ["Banana", "Apple", "Cat", "Dog"], answer: "Banana" },
            { question: "What starts with 'P'?", options: ["Panda", "Lion", "Tiger", "Bear"], answer: "Panda" },
            { question: "Pick the word for '🚗'", options: ["Car", "Bus", "Train", "Plane"], answer: "Car" },
            { question: "Which one is a color?", options: ["Pink", "Table", "Jump", "Fast"], answer: "Pink" },
            { question: "What starts with 'M'?", options: ["Moon", "Sun", "Star", "Cloud"], answer: "Moon" },
            { question: "Pick the word for '🍦'", options: ["Ice Cream", "Cake", "Cookie", "Donut"], answer: "Ice Cream" },
            { question: "What starts with 'H'?", options: ["Hat", "Shoe", "Shirt", "Socks"], answer: "Hat" },
            { question: "Which one is a fruit?", options: ["Mango", "Carrot", "Potato", "Onion"], answer: "Mango" },
            { question: "What starts with 'Z'?", options: ["Zebra", "Lion", "Giraffe", "Monkey"], answer: "Zebra" },
            { question: "Pick the word for '🐠'", options: ["Fish", "Bird", "Cat", "Dog"], answer: "Fish" },
            { question: "What starts with 'K'?", options: ["Kite", "Balloon", "Ball", "Toy"], answer: "Kite" },
            { question: "What starts with 'L'?", options: ["Lion", "Elephant", "Monkey", "Snake"], answer: "Lion" },
            { question: "Pick the word for '☀️'", options: ["Sun", "Moon", "Cloud", "Rain"], answer: "Sun" },
            { question: "What starts with 'T'?", options: ["Tree", "Flower", "Grass", "Bush"], answer: "Tree" },
            { question: "Pick the word for '🦆'", options: ["Duck", "Chicken", "Goose", "Turkey"], answer: "Duck" },
            { question: "What starts with 'S'?", options: ["Star", "Moon", "Planet", "Rocket"], answer: "Star" },
            { question: "Pick the word for '🎈'", options: ["Balloon", "Ball", "Bat", "Bell"], answer: "Balloon" },
            { question: "What starts with 'W'?", options: ["Whale", "Shark", "Fish", "Crab"], answer: "Whale" },
            { question: "Pick the word for '🐸'", options: ["Frog", "Toad", "Lizard", "Snake"], answer: "Frog" },
            { question: "What starts with 'G'?", options: ["Grapes", "Apple", "Berry", "Cherry"], answer: "Grapes" }
          ],
          hard: Array.from({ length: 26 }, (_, i) => ({
            id: `e-a-h-${i}`,
            question: "Find the lowercase letter for: " + String.fromCharCode(65 + i),
            options: [
              String.fromCharCode(97 + i),
              String.fromCharCode(97 + (i + 1) % 26),
              String.fromCharCode(97 + (i + 2) % 26),
              String.fromCharCode(97 + (i + 5) % 26)
            ],
            answer: String.fromCharCode(97 + i)
          }))
        }
      },
      {
        id: "phonics-fun",
        title: "Phonics Fun",
        icon: "🔊",
        levels: {
          easy: [
            { type: "sound-match", image: "🐶", options: ["Woof", "Meow", "Moo", "Quack"], answer: "Woof" },
            { type: "sound-match", image: "🐱", options: ["Meow", "Woof", "Hiss", "Roar"], answer: "Meow" },
            { type: "sound-match", image: "🐮", options: ["Moo", "Baa", "Oink", "Neigh"], answer: "Moo" },
            { type: "sound-match", image: "🐷", options: ["Oink", "Moo", "Quack", "Cluck"], answer: "Oink" },
            { type: "sound-match", image: "🦁", options: ["Roar", "Meow", "Squeak", "Chirp"], answer: "Roar" },
            { type: "sound-match", image: "🐤", options: ["Tweet", "Quack", "Moo", "Roar"], answer: "Tweet" },
            { type: "sound-match", image: "🐸", options: ["Ribbit", "Buzz", "Hiss", "Croak"], answer: "Ribbit" },
            { type: "sound-match", image: "🐍", options: ["Hiss", "Buzz", "Rawr", "Pop"], answer: "Hiss" },
            { type: "sound-match", image: "🐑", options: ["Baa", "Moo", "Oink", "Meow"], answer: "Baa" },
            { type: "sound-match", image: "🦆", options: ["Quack", "Tweet", "Honk", "Hoot"], answer: "Quack" },
            { type: "sound-match", image: "🐘", options: ["Trumpet", "Roar", "Squeak", "Bark"], answer: "Trumpet" },
            { type: "sound-match", image: "🐵", options: ["Chatter", "Moo", "Meow", "Roar"], answer: "Chatter" },
            { type: "sound-match", image: "🦉", options: ["Hoot", "Chirp", "Tweet", "Bark"], answer: "Hoot" },
            { type: "sound-match", image: "🐴", options: ["Neigh", "Moo", "Baa", "Oink"], answer: "Neigh" },
            { type: "sound-match", image: "🐝", options: ["Buzz", "Hiss", "Hum", "Pop"], answer: "Buzz" },
            { type: "sound-match", image: "🐺", options: ["Howl", "Bark", "Growl", "Purr"], answer: "Howl" },
            { type: "sound-match", image: "🦜", options: ["Squawk", "Whistle", "Tweet", "Chirp"], answer: "Squawk" },
            { type: "sound-match", image: "🐓", options: ["Cock-a-doodle-doo", "Cluck", "Quack", "Chip"], answer: "Cock-a-doodle-doo" },
            { type: "sound-match", image: "🐁", options: ["Squeak", "Purr", "Hiss", "Bark"], answer: "Squeak" },
            { type: "sound-match", image: "🐅", options: ["Growl", "Meow", "Moo", "Baa"], answer: "Growl" }
          ],
          medium: [
            { question: "Which word rhymes with 'Cat'?", options: ["Bat", "Dog", "Fish", "Bird"], answer: "Bat" },
            { question: "Which word rhymes with 'Sun'?", options: ["Run", "Sky", "Hot", "Day"], answer: "Run" },
            { question: "Which word rhymes with 'Toy'?", options: ["Boy", "Car", "Play", "Fun"], answer: "Boy" },
            { question: "Which word rhymes with 'Cake'?", options: ["Bake", "Eat", "Sweet", "Pie"], answer: "Bake" },
            { question: "Which word rhymes with 'Ball'?", options: ["Tall", "Big", "Red", "Bounce"], answer: "Tall" },
            { question: "Which word rhymes with 'Fly'?", options: ["Sky", "Bird", "Wing", "High"], answer: "Sky" },
            { question: "Which word rhymes with 'Pen'?", options: ["Hen", "Write", "Ink", "Paper"], answer: "Hen" },
            { question: "Which word rhymes with 'Tree'?", options: ["Bee", "Leaf", "Green", "Root"], answer: "Bee" },
            { question: "Which word rhymes with 'Book'?", options: ["Look", "Read", "Page", "Story"], answer: "Look" },
            { question: "Which word rhymes with 'Rain'?", options: ["Train", "Water", "Cloud", "Wet"], answer: "Train" },
            { question: "Which word rhymes with 'Dog'?", options: ["Log", "Cat", "Rat", "Hat"], answer: "Log" },
            { question: "Which word rhymes with 'House'?", options: ["Mouse", "Horse", "Tree", "Wall"], answer: "Mouse" },
            { question: "Which word rhymes with 'Hat'?", options: ["Mat", "Mop", "Map", "Man"], answer: "Mat" },
            { question: "Which word rhymes with 'Jar'?", options: ["Star", "Car", "Far", "All of these"], answer: "All of these" },
            { question: "Which word rhymes with 'Bell'?", options: ["Shell", "Well", "Tell", "All of these"], answer: "All of these" }
          ],
          hard: [
            { question: "How many syllables in 'Banana'?", options: ["3", "1", "2", "4"], answer: "3" },
            { question: "How many syllables in 'Apple'?", options: ["2", "1", "3", "4"], answer: "2" },
            { question: "How many syllables in 'Butterfly'?", options: ["3", "2", "4", "5"], answer: "3" },
            { question: "How many syllables in 'Cat'?", options: ["1", "2", "3", "0"], answer: "1" },
            { question: "How many syllables in 'Dinosaur'?", options: ["3", "4", "2", "5"], answer: "3" },
            { question: "How many syllables in 'Elephant'?", options: ["3", "2", "4", "1"], answer: "3" },
            { question: "How many syllables in 'Umbrella'?", options: ["3", "2", "4", "5"], answer: "3" },
            { question: "How many syllables in 'Watermelon'?", options: ["4", "3", "5", "2"], answer: "4" },
            { question: "How many syllables in 'Octopus'?", options: ["3", "2", "4", "1"], answer: "3" },
            { question: "How many syllables in 'Sun'?", options: ["1", "2", "3", "4"], answer: "1" },
            { question: "How many syllables in 'Ice Cream'?", options: ["2", "1", "3", "4"], answer: "2" },
            { question: "How many syllables in 'Computer'?", options: ["3", "2", "4", "1"], answer: "3" },
            { question: "How many syllables in 'Television'?", options: ["4", "3", "5", "2"], answer: "4" },
            { question: "How many syllables in 'Magic'?", options: ["2", "1", "3", "4"], answer: "2" },
            { question: "How many syllables in 'Adventure'?", options: ["3", "2", "4", "5"], answer: "3" }
          ]
        }
      }
    ]
  },
  "primary-school": {
    label: "Primary School (7-10 Years)",
    color: "#4ECDC4",
    games: [
      {
        id: "math-master",
        title: "Math Master",
        icon: "➗",
        levels: {
          easy: Array.from({ length: 30 }, (_, i) => ({
            question: `${i + 1} + ${i + 2} = ?`,
            options: [`${(i + 1) + (i + 2)}`, `${(i + 1) + (i + 2) + 1}`, `${(i + 1) + (i + 2) - 2}`, "0"],
            answer: `${(i + 1) + (i + 2)}`
          })),
          medium: Array.from({ length: 30 }, (_, i) => ({
            question: `${(i + 10) * 2} - ${i + 5} = ?`,
            options: [`${(i + 10) * 2 - (i + 5)}`, "10", "15", "50"],
            answer: `${(i + 10) * 2 - (i + 5)}`
          })),
          hard: Array.from({ length: 30 }, (_, i) => ({
            question: `${i + 4} x ${i + 3} = ?`,
            options: [`${(i + 4) * (i + 3)}`, `${(i + 4) * (i + 3) + 5}`, "120", "200"],
            answer: `${(i + 4) * (i + 3)}`
          }))
        }
      },
      {
        id: "science-explorer",
        title: "Science Explorer",
        icon: "🧬",
        levels: {
          easy: [
            { question: "What do plants need to grow?", options: ["Sunlight & Water", "Candy", "Toys", "Darkness"], answer: "Sunlight & Water" },
            { question: "Which animal lays eggs?", options: ["Chicken", "Dog", "Cat", "Lion"], answer: "Chicken" },
            { question: "What part of the plant is underground?", options: ["Roots", "Leaves", "Flower", "Stem"], answer: "Roots" },
            { question: "How many legs does a spider have?", options: ["8", "6", "4", "10"], answer: "8" },
            { question: "Which is a solid?", options: ["Ice", "Water", "Steam", "Juice"], answer: "Ice" },
            { question: "What do bees make?", options: ["Honey", "Milk", "Juice", "Water"], answer: "Honey" },
            { question: "Which planet is ours?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: "Earth" },
            { question: "What is the sun?", options: ["A Star", "A Planet", "A Moon", "A Rock"], answer: "A Star" },
            { question: "Which sense uses your nose?", options: ["Smell", "Sight", "Touch", "Hearing"], answer: "Smell" },
            { question: "What do fish use to breathe?", options: ["Gills", "Lungs", "Nose", "Skin"], answer: "Gills" },
            { question: "Which animal is the king of the jungle?", options: ["Lion", "Tiger", "Elephant", "Bear"], answer: "Lion" },
            { question: "In which season do leaves fall?", options: ["Autumn", "Spring", "Summer", "Winter"], answer: "Autumn" },
            { question: "What is the frozen form of water?", options: ["Ice", "Steam", "Rain", "Mist"], answer: "Ice" },
            { question: "How many colors in a rainbow?", options: ["7", "6", "8", "5"], answer: "7" }
          ],
          medium: [
            { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Earth"], answer: "Mars" },
            { question: "What gas do humans need to breathe?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: "Oxygen" },
            { question: "Which is the largest mammal?", options: ["Blue Whale", "Elephant", "Giraffe", "Shark"], answer: "Blue Whale" },
            { question: "What is the center of an atom?", options: ["Nucleus", "Electron", "Proton", "Neutron"], answer: "Nucleus" },
            { question: "What melts to become water?", options: ["Ice", "Rock", "Glass", "Plastic"], answer: "Ice" },
            { question: "Which force pulls things to Earth?", options: ["Gravity", "Magnetism", "Electricity", "Friction"], answer: "Gravity" },
            { question: "What travels fastest?", options: ["Light", "Sound", "Wind", "A Plane"], answer: "Light" },
            { question: "How many states of matter are common?", options: ["3", "2", "4", "5"], answer: "3" },
            { question: "What is H2O?", options: ["Water", "Salt", "Sugar", "Air"], answer: "Water" },
            { question: "Which is a mammal?", options: ["Dolphin", "Goldfish", "Shark", "Turtle"], answer: "Dolphin" },
            { question: "Which organ pumps blood?", options: ["Heart", "Lungs", "Liver", "Brain"], answer: "Heart" },
            { question: "What do we call the path Earth takes around the sun?", options: ["Orbit", "Spin", "Circle", "Loop"], answer: "Orbit" },
            { question: "Which metal is a liquid at room temperature?", options: ["Mercury", "Gold", "Silver", "Iron"], answer: "Mercury" }
          ],
          hard: [
            { question: "What is the boiling point of water?", options: ["100°C", "0°C", "50°C", "200°C"], answer: "100°C" },
            { question: "How long does it take Earth to orbit the sun?", options: ["365 days", "24 hours", "30 days", "12 months"], answer: "365 days" },
            { question: "What is the largest organ in the human body?", options: ["Skin", "Liver", "Lungs", "Brain"], answer: "Skin" },
            { question: "What is the powerhouse of the cell?", options: ["Mitochondria", "Nucleus", "Ribosome", "Vacuole"], answer: "Mitochondria" },
            { question: "What process do plants use to make food?", options: ["Photosynthesis", "Respiration", "Evaporation", "Digestion"], answer: "Photosynthesis" },
            { question: "What is the hardest natural substance?", options: ["Diamond", "Gold", "Iron", "Steel"], answer: "Diamond" },
            { question: "Which vitamin do we get from sunlight?", options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B"], answer: "Vitamin D" },
            { question: "What is the largest planet in our solar system?", options: ["Jupiter", "Saturn", "Neptune", "Uranus"], answer: "Jupiter" },
            { question: "What do we call a scientist who studies rocks?", options: ["Geologist", "Biologist", "Chemist", "Physicist"], answer: "Geologist" },
            { question: "What is the most common gas in Earth's atmosphere?", options: ["Nitrogen", "Oxygen", "Argon", "Carbon Dioxide"], answer: "Nitrogen" },
            { question: "Who developed the theory of relativity?", options: ["Einstein", "Newton", "Galileo", "Tesla"], answer: "Einstein" },
            { question: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Fe", "Gd"], answer: "Au" },
            { question: "Which layer of the Earth is the hottest?", options: ["Inner Core", "Mantle", "Crust", "Outer Core"], answer: "Inner Core" }
          ]
        }
      }
    ]
  },
  "middle-school": {
    label: "Middle School (11-13 Years)",
    color: "#D1C4E9",
    games: [
      {
        id: "logic-lab",
        title: "Logic Lab",
        icon: "🧠",
        levels: {
          easy: [
            { question: "If A=1, B=2, what is C?", options: ["3", "4", "1", "5"], answer: "3" },
            { question: "Complete the pattern: 5, 10, 15, 20, ...", options: ["25", "30", "21", "22"], answer: "25" },
            { question: "Which word does not belong?", options: ["Apple", "Orange", "Carrot", "Banana"], answer: "Carrot" },
            { question: "If all Bloops are Razzies and all Razzies are Lizzies, are all Bloops Lizzies?", options: ["Yes", "No", "Maybe", "Sometimes"], answer: "Yes" },
            { question: "What is 10% of 100?", options: ["10", "1", "20", "50"], answer: "10" },
            { question: "Which comes first alphabetically?", options: ["Pear", "Peach", "Plum", "Pineapple"], answer: "Peach" },
            { question: "If today is Monday, what was the day before yesterday?", options: ["Saturday", "Sunday", "Friday", "Tuesday"], answer: "Saturday" },
            { question: "A brother and sister have 4 apples. How many each for equal share?", options: ["2", "1", "3", "4"], answer: "2" },
            { question: "What is half of 50?", options: ["25", "20", "30", "15"], answer: "25" },
            { question: "Which number is prime?", options: ["7", "4", "9", "10"], answer: "7" },
            { question: "Find the next: 10, 20, 40, 80, ?", options: ["160", "100", "120", "200"], answer: "160" },
            { question: "If 1=5, 2=25, 3=125, what is 5=?", options: ["1", "625", "3125", "5"], answer: "1" }
          ],
          medium: [
            { question: "What comes next: 2, 4, 8, 16, ...?", options: ["32", "24", "20", "64"], answer: "32" },
            { question: "If 'CAB' is '312', what is 'FAC'?", options: ["613", "512", "621", "123"], answer: "613" },
            { question: "Find the missing number: 1, 4, 9, 16, ?", options: ["25", "20", "30", "24"], answer: "25" },
            { question: "If 3 cats catch 3 mice in 3 minutes, how long for 1 cat to catch 1 mouse?", options: ["3 minutes", "1 minute", "9 minutes", "6 minutes"], answer: "3 minutes" },
            { question: "Which is the odd one out?", options: ["81", "64", "49", "50"], answer: "50" },
            { question: "If you flip a coin 3 times, what is the probability of 3 heads?", options: ["1/8", "1/2", "1/4", "1/6"], answer: "1/8" },
            { question: "What is the square root of 144?", options: ["12", "10", "14", "16"], answer: "12" },
            { question: "If X + 5 = 12, what is X?", options: ["7", "17", "6", "8"], answer: "7" },
            { question: "Complete the sequence: 1, 1, 2, 3, 5, 8, ?", options: ["13", "11", "10", "12"], answer: "13" },
            { question: "What is the value of Pi (to 2 decimal places)?", options: ["3.14", "3.16", "3.12", "3.00"], answer: "3.14" },
            { question: "What is 15% of 200?", options: ["30", "20", "15", "40"], answer: "30" },
            { question: "A shirt cost $20, it's 50% off. What is the price?", options: ["$10", "$5", "$15", "$0"], answer: "$10" }
          ],
          hard: [
            { question: "Complete the sequence: J, F, M, A, M, J, ... (Months)", options: ["J", "A", "S", "O"], answer: "J" },
            { question: "If 5 workers can build a wall in 4 days, how long for 10 workers?", options: ["2 days", "8 days", "4 days", "1 day"], answer: "2 days" },
            { question: "What is the sum of angles in a triangle?", options: ["180°", "90°", "360°", "270°"], answer: "180°" },
            { question: "If a=2 and b=3, what is a^2 + b^2?", options: ["13", "10", "15", "12"], answer: "13" },
            { question: "Which is larger?", options: ["2^5", "5^2", "Both Equal", "Neither"], answer: "2^5" },
            { question: "What is the next prime number after 13?", options: ["17", "15", "19", "21"], answer: "17" },
            { question: "In a group of 30, how many people must share a birth month (min)?", options: ["3", "2", "4", "5"], answer: "3" },
            { question: "What is the probability of rolling a 7 on a standard 6-sided die?", options: ["0", "1/6", "1/12", "1"], answer: "0" },
            { question: "If X and Y are odd, X + Y is always:", options: ["Even", "Odd", "Prime", "Zero"], answer: "Even" },
            { question: "How many degrees in a circle?", options: ["360", "180", "90", "100"], answer: "360" },
            { question: "Solve for x: 2x - 10 = 30", options: ["20", "10", "40", "15"], answer: "20" },
            { question: "What is the diagonal of a 3x4 rectangle?", options: ["5", "7", "6", "4"], answer: "5" }
          ]
        }
      },
      {
        id: "coding-challenge",
        title: "Coding Challenge",
        icon: "💻",
        levels: {
          easy: [
            { question: "Which symbol is used for comments in JavaScript?", options: ["//", "#", "<!--", "**"], answer: "//" },
            { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheet", "None"], answer: "Cascading Style Sheets" },
            { question: "Which tag is used for an image?", options: ["<img>", "<pic>", "<image>", "<src>"], answer: "<img>" },
            { question: "What is the main tag for a website?", options: ["<html>", "<body>", "<head>", "<web>"], answer: "<html>" },
            { question: "Which company created JavaScript?", options: ["Netscape", "Microsoft", "Google", "Apple"], answer: "Netscape" },
            { question: "How do you declare a variable in JS?", options: ["let", "var", "const", "All of these"], answer: "All of these" },
            { question: "What is the result of 1+ '1' in JS?", options: ["'11'", "2", "Error", "NaN"], answer: "'11'" },
            { question: "Which is a loop?", options: ["for", "if", "else", "let"], answer: "for" },
            { question: "What is the extension for JavaScript files?", options: [".js", ".jsx", ".ts", ".html"], answer: ".js" },
            { question: "Which tag is used for the largest heading?", options: ["<h1>", "<h6>", "<head>", "<header>"], answer: "<h1>" }
          ],
          medium: [
            { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighTool Make Loop", "HyperLinks and Text", "None"], answer: "HyperText Markup Language" },
            { question: "What do we use to select an element by ID in CSS?", options: ["#", ".", "*", "@"], answer: "#" },
            { question: "Which function prints to the console in JS?", options: ["console.log()", "print()", "echo()", "write()"], answer: "console.log()" },
            { question: "What is the index of the first element in an array?", options: ["0", "1", "-1", "None"], answer: "0" },
            { question: "How do you call a function named 'myFunc'?", options: ["myFunc()", "call myFunc", "run myFunc", "myFunc[]"], answer: "myFunc()" },
            { question: "Which is not a data type in JS?", options: ["Table", "String", "Number", "Boolean"], answer: "Table" },
            { question: "What does API stand for?", options: ["Application Programming Interface", "Advanced Program Info", "App Process Int", "None"], answer: "Application Programming Interface" },
            { question: "Which operator is used for strict equality?", options: ["===", "==", "=", "!="], answer: "===" },
            { question: "What is 'NaN'?", options: ["Not a Number", "New and Normal", "No available Number", "None"], answer: "Not a Number" },
            { question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Mail", "Desktop on Monitor", "None"], answer: "Document Object Model" }
          ],
          hard: [
            { question: "Which is not a React Hook?", options: ["useData", "useState", "useEffect", "useRef"], answer: "useData" },
            { question: "What is the default port for local development in Vite?", options: ["5173", "3000", "8080", "5000"], answer: "5173" },
            { question: "What is 'hoisting' in JavaScript?", options: ["Moving declarations to top", "Lifting weight", "Array method", "None"], answer: "Moving declarations to top" },
            { question: "Which keyword refers to the current object?", options: ["this", "self", "me", "that"], answer: "this" },
            { question: "What is a 'closure'?", options: ["Function + lexical environment", "Closing a tag", "Ending a loop", "None"], answer: "Function + lexical environment" },
            { question: "What is 'SQL' used for?", options: ["Databases", "Web Styling", "Game Logic", "Mobile Apps"], answer: "Databases" },
            { question: "What is the time complexity of 'binary search'?", options: ["O(log n)", "O(n)", "O(1)", "O(n^2)"], answer: "O(log n)" },
            { question: "What is Git?", options: ["Version Control System", "A Programming Language", "A Database", "A Cloud Server"], answer: "Version Control System" },
            { question: "Which is a 'backend' language?", options: ["Node.js", "HTML", "CSS", "React"], answer: "Node.js" },
            { question: "What is 'JSX'?", options: ["JS XML extension", "Java Syntax", "JSON Structure", "None"], answer: "JS XML extension" }
          ]
        }
      }
    ]
  }
};
