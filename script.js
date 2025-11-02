const halloweenQuestions = [
  { sual: "Which spirit is said to return during Halloween night?", cavablar: ["Ghost", "Fairy", "Elf", "Goblin"], duzgun: "Ghost" },
  { sual: "What plant is associated with Halloween traditions?", cavablar: ["Pumpkin", "Sunflower", "Rose", "Cactus"], duzgun: "Pumpkin" },
  { sual: "Which creature is known for rising from the grave?", cavablar: ["Zombie", "Vampire", "Witch", "Cat"], duzgun: "Zombie" },
  { sual: "Which scary film is set on Halloween night?", cavablar: ["Halloween", "Jaws", "E.T.", "Frozen"], duzgun: "Halloween" },
  { sual: "Which candy is shaped like kernels of corn?", cavablar: ["Candy corn", "Gummy bears", "Lollipops", "Chocolate bars"], duzgun: "Candy corn" },
  { sual: "Which full moon is associated with werewolves?", cavablar: ["Halloween moon", "Harvest moon", "Blue moon", "Blood moon"], duzgun: "Harvest moon" },
  { sual: "What do witches often ride?", cavablar: ["Broomstick", "Car", "Bicycle", "Horse"], duzgun: "Broomstick" },
  { sual: "Which monster is known for having bolts on its neck?", cavablar: ["Frankenstein", "Dracula", "Mummy", "Zombie"], duzgun: "Frankenstein" },
  { sual: "What is the traditional Halloween color besides black?", cavablar: ["Orange", "Green", "Purple", "Red"], duzgun: "Orange" },
  { sual: "Which animal is believed to be a witch’s familiar?", cavablar: ["Black cat", "Dog", "Owl", "Bat"], duzgun: "Black cat" },
  { sual: "What game involves trying to catch apples with your teeth?", cavablar: ["Bobbing for apples", "Apple toss", "Apple pie race", "Candy hunt"], duzgun: "Bobbing for apples" },
  { sual: "What do vampires drink according to legend?", cavablar: ["Blood", "Water", "Milk", "Juice"], duzgun: "Blood" },
  { sual: "Which candy is commonly given out on Halloween?", cavablar: ["Chocolate", "Peanuts", "Bread", "Cheese"], duzgun: "Chocolate" },
  { sual: "What is a carved pumpkin called?", cavablar: ["Jack-o'-lantern", "Pumpkin face", "Scary pumpkin", "Spooky squash"], duzgun: "Jack-o'-lantern" },
  { sual: "Which creature is said to howl at the moon?", cavablar: ["Werewolf", "Ghost", "Zombie", "Vampire"], duzgun: "Werewolf" },
  { sual: "Which supernatural being sleeps in a coffin?", cavablar: ["Vampire", "Zombie", "Ghost", "Witch"], duzgun: "Vampire" },
  { sual: "Which candy is often yellow, orange, and white?", cavablar: ["Candy corn", "Gummy worms", "Chocolate bar", "Lollipop"], duzgun: "Candy corn" },
  { sual: "Which vegetable was originally carved before pumpkins?", cavablar: ["Turnip", "Potato", "Carrot", "Onion"], duzgun: "Turnip" },
  { sual: "Which famous magician was portrayed as scary in Halloween decorations?", cavablar: ["Witch", "Harry Houdini", "Dracula", "Frankenstein"], duzgun: "Witch" },
  { sual: "What is the night before Halloween called?", cavablar: ["All Hallows' Eve", "Halloween Night", "Samhain", "Trick Night"], duzgun: "All Hallows' Eve" },
  { sual: "Which creature can only be killed by a silver bullet?", cavablar: ["Werewolf", "Vampire", "Zombie", "Ghost"], duzgun: "Werewolf" },
  { sual: "Which monster is wrapped in bandages?", cavablar: ["Mummy", "Zombie", "Frankenstein", "Ghost"], duzgun: "Mummy" },
  { sual: "Which famous vampire lived in Transylvania?", cavablar: ["Dracula", "Count Chocula", "Nosferatu", "Edward Cullen"], duzgun: "Dracula" },
  { sual: "Which candy is chewy and worm-shaped?", cavablar: ["Gummy worms", "Candy corn", "Chocolate bar", "Lollipop"], duzgun: "Gummy worms" },
  { sual: "Which sound is often associated with ghosts?", cavablar: ["Boo", "Meow", "Woof", "Clap"], duzgun: "Boo" },
  { sual: "Which Halloween creature has green skin and bolts?", cavablar: ["Frankenstein", "Zombie", "Vampire", "Werewolf"], duzgun: "Frankenstein" },
  { sual: "Which color is commonly associated with magic and mystery?", cavablar: ["Purple", "Red", "Blue", "Orange"], duzgun: "Purple" },
  { sual: "Which bird is often linked to witches?", cavablar: ["Owl", "Crow", "Eagle", "Parrot"], duzgun: "Owl" },
  { sual: "Which monster comes from Egyptian tombs?", cavablar: ["Mummy", "Vampire", "Zombie", "Ghost"], duzgun: "Mummy" },
  { sual: "Which mythical creature is half man, half horse?", cavablar: ["Centaur", "Minotaur", "Goblin", "Troll"], duzgun: "Centaur" },
  { sual: "Which candy is often pumpkin-flavored?", cavablar: ["Pumpkin candy", "Chocolate", "Gum", "Lollipop"], duzgun: "Pumpkin candy" },
  { sual: "What do you say when you knock on doors for candy?", cavablar: ["Trick or treat", "Hello", "Boo", "Give me candy"], duzgun: "Trick or treat" },
  { sual: "Which creature is half bat, half man in legends?", cavablar: ["Vampire", "Werewolf", "Goblin", "Zombie"], duzgun: "Vampire" },
  { sual: "Which Halloween game involves trying to bite a hanging treat?", cavablar: ["Bobbing for apples", "Pin the tail", "Candy hunt", "Pumpkin toss"], duzgun: "Bobbing for apples" },
  { sual: "Which monster has a flat head and stitches?", cavablar: ["Frankenstein", "Vampire", "Zombie", "Ghost"], duzgun: "Frankenstein" },
  { sual: "Which animal is often a symbol of death?", cavablar: ["Black cat", "Owl", "Bat", "Snake"], duzgun: "Black cat" },
  { sual: "Which mythical creature turns into a bat?", cavablar: ["Vampire", "Werewolf", "Zombie", "Ghost"], duzgun: "Vampire" },
  { sual: "Which candy is small, triangle-shaped, and colorful?", cavablar: ["Candy corn", "Gum", "Chocolate", "Lollipop"], duzgun: "Candy corn" },
  { sual: "Which monster's face is often green in cartoons?", cavablar: ["Frankenstein", "Vampire", "Mummy", "Zombie"], duzgun: "Frankenstein" },
  { sual: "Which fruit is traditionally used in bobbing games?", cavablar: ["Apple", "Pumpkin", "Orange", "Pear"], duzgun: "Apple" },
  { sual: "Which creature sleeps in a coffin?", cavablar: ["Vampire", "Ghost", "Zombie", "Witch"], duzgun: "Vampire" },
  { sual: "Which Halloween symbol is carved into pumpkins?", cavablar: ["Jack-o'-lantern", "Ghost", "Witch", "Bat"], duzgun: "Jack-o'-lantern" },
  { sual: "Which candy is sticky and chewy?", cavablar: ["Gummy worms", "Candy corn", "Chocolate bar", "Lollipop"], duzgun: "Gummy worms" },
  { sual: "Which monster comes back to life in horror stories?", cavablar: ["Zombie", "Vampire", "Ghost", "Witch"], duzgun: "Zombie" },
  { sual: "Which bird is a symbol of wisdom and night?", cavablar: ["Owl", "Crow", "Eagle", "Parrot"], duzgun: "Owl" },
  { sual: "Which magical creature rides a broomstick?", cavablar: ["Witch", "Vampire", "Zombie", "Ghost"], duzgun: "Witch" },
  { sual: "Which monster is wrapped in linen bandages?", cavablar: ["Mummy", "Frankenstein", "Vampire", "Zombie"], duzgun: "Mummy" },
  { sual: "Which Halloween figure is famous for scaring children?", cavablar: ["Ghost", "Witch", "Vampire", "Pumpkin"], duzgun: "Ghost" },
  { sual: "Which Halloween candy is usually orange, yellow, and white?", cavablar: ["Candy corn", "Chocolate", "Gum", "Lollipop"], duzgun: "Candy corn" },
  { sual: "Which mythical creature howls at the full moon?", cavablar: ["Werewolf", "Vampire", "Zombie", "Ghost"], duzgun: "Werewolf" },
  { sual: "Which color is commonly associated with Halloween night?", cavablar: ["Black", "Red", "Blue", "Green"], duzgun: "Black" },
  { sual: "Which supernatural being is famous for haunting houses?", cavablar: ["Ghost", "Witch", "Vampire", "Zombie"], duzgun: "Ghost" },
  { sual: "Which Halloween symbol glows from inside?", cavablar: ["Jack-o'-lantern", "Ghost", "Witch", "Pumpkin"], duzgun: "Jack-o'-lantern" },
  { sual: "Which game involves trying to eat a hanging treat without hands?", cavablar: ["Bobbing for apples", "Candy hunt", "Pumpkin toss", "Trick or treat"], duzgun: "Bobbing for apples" },
  { sual: "Which monster is famous for having fangs?", cavablar: ["Vampire", "Zombie", "Frankenstein", "Ghost"], duzgun: "Vampire" }
];

const geographyQuestions = [
  { sual: "What is the capital of France?", cavablar: ["Paris", "London", "Berlin", "Madrid"], duzgun: "Paris" },
  { sual: "Which is the largest continent?", cavablar: ["Asia", "Africa", "Europe", "Australia"], duzgun: "Asia" },
  { sual: "Which ocean is the biggest?", cavablar: ["Pacific", "Atlantic", "Indian", "Arctic"], duzgun: "Pacific" },
  { sual: "What is the longest river in the world?", cavablar: ["Nile", "Amazon", "Yangtze", "Mississippi"], duzgun: "Nile" },
  { sual: "Which country has the largest population?", cavablar: ["China", "India", "USA", "Indonesia"], duzgun: "China" },
  { sual: "Which is the smallest country in the world?", cavablar: ["Vatican City", "Monaco", "Malta", "San Marino"], duzgun: "Vatican City" },
  { sual: "Which desert is the largest in the world?", cavablar: ["Sahara", "Arabian", "Gobi", "Kalahari"], duzgun: "Sahara" },
  { sual: "Mount Everest is located in which mountain range?", cavablar: ["Himalayas", "Andes", "Alps", "Rockies"], duzgun: "Himalayas" },
  { sual: "Which country has the longest coastline?", cavablar: ["Canada", "Australia", "Russia", "USA"], duzgun: "Canada" },
  { sual: "Which continent is known as the 'Dark Continent'?", cavablar: ["Africa", "Asia", "Europe", "South America"], duzgun: "Africa" },
  { sual: "What is the capital of Japan?", cavablar: ["Tokyo", "Beijing", "Seoul", "Bangkok"], duzgun: "Tokyo" },
  { sual: "Which country has the most time zones?", cavablar: ["Russia", "USA", "Canada", "China"], duzgun: "Russia" },
  { sual: "Which river flows through Egypt?", cavablar: ["Nile", "Amazon", "Yangtze", "Mississippi"], duzgun: "Nile" },
  { sual: "Which is the smallest continent by area?", cavablar: ["Australia", "Europe", "Antarctica", "South America"], duzgun: "Australia" },
  { sual: "Which country is famous for its fjords?", cavablar: ["Norway", "Sweden", "Finland", "Iceland"], duzgun: "Norway" },
  { sual: "Which desert is located in northern China and southern Mongolia?", cavablar: ["Gobi", "Sahara", "Kalahari", "Arabian"], duzgun: "Gobi" },
  { sual: "Which is the largest island in the world?", cavablar: ["Greenland", "Madagascar", "Borneo", "Sumatra"], duzgun: "Greenland" },
  { sual: "Which European capital is divided by the Danube River?", cavablar: ["Budapest", "Vienna", "Prague", "Berlin"], duzgun: "Budapest" },
  { sual: "Which US state is the largest by area?", cavablar: ["Alaska", "Texas", "California", "Montana"], duzgun: "Alaska" },
  { sual: "Which mountain is the highest in Africa?", cavablar: ["Kilimanjaro", "Atlas", "Kenya", "Ruwenzori"], duzgun: "Kilimanjaro" },
  { sual: "Which country is known as the Land of the Rising Sun?", cavablar: ["Japan", "China", "Thailand", "India"], duzgun: "Japan" },
  { sual: "Which ocean is Bermuda Triangle located in?", cavablar: ["Atlantic", "Pacific", "Indian", "Arctic"], duzgun: "Atlantic" },
  { sual: "Which country has the most pyramids?", cavablar: ["Sudan", "Egypt", "Mexico", "Peru"], duzgun: "Sudan" },
  { sual: "Which is the highest waterfall in the world?", cavablar: ["Angel Falls", "Niagara Falls", "Iguazu Falls", "Victoria Falls"], duzgun: "Angel Falls" },
  { sual: "Which country is home to the Great Barrier Reef?", cavablar: ["Australia", "USA", "South Africa", "Brazil"], duzgun: "Australia" },
  { sual: "Which country has a maple leaf on its flag?", cavablar: ["Canada", "USA", "UK", "Germany"], duzgun: "Canada" },
  { sual: "Which African country is the largest by area?", cavablar: ["Algeria", "Sudan", "Libya", "Egypt"], duzgun: "Algeria" },
  { sual: "Which US state is famous for its geysers and Yellowstone?", cavablar: ["Wyoming", "California", "Montana", "Alaska"], duzgun: "Wyoming" },
  { sual: "Which European country has the most volcanoes?", cavablar: ["Italy", "Iceland", "Greece", "Spain"], duzgun: "Italy" },
  { sual: "Which river flows through Paris?", cavablar: ["Seine", "Thames", "Danube", "Rhine"], duzgun: "Seine" },
  { sual: "Which is the largest lake in Africa?", cavablar: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"], duzgun: "Lake Victoria" },
  { sual: "Which mountain range forms the border between France and Spain?", cavablar: ["Pyrenees", "Alps", "Carpathians", "Apennines"], duzgun: "Pyrenees" },
  { sual: "Which US river is known as the 'Big Muddy'?", cavablar: ["Missouri", "Mississippi", "Colorado", "Rio Grande"], duzgun: "Missouri" },
  { sual: "Which European country has the longest coastline?", cavablar: ["Norway", "Greece", "Italy", "Spain"], duzgun: "Norway" },
  { sual: "Which desert is located in North America?", cavablar: ["Mojave", "Sahara", "Gobi", "Kalahari"], duzgun: "Mojave" },
  { sual: "Which is the smallest ocean in the world?", cavablar: ["Arctic", "Atlantic", "Indian", "Pacific"], duzgun: "Arctic" },
  { sual: "Which country has the highest population in Europe?", cavablar: ["Germany", "France", "UK", "Italy"], duzgun: "Germany" },
  { sual: "Which island country is south of India?", cavablar: ["Sri Lanka", "Maldives", "Indonesia", "Japan"], duzgun: "Sri Lanka" },
  { sual: "Which country is known as the Land of the Midnight Sun?", cavablar: ["Norway", "Sweden", "Finland", "Iceland"], duzgun: "Norway" },
  { sual: "Which river forms part of the border between USA and Mexico?", cavablar: ["Rio Grande", "Mississippi", "Colorado", "Missouri"], duzgun: "Rio Grande" },
  { sual: "Which country has the most islands in the world?", cavablar: ["Sweden", "Indonesia", "Canada", "Philippines"], duzgun: "Sweden" },
  { sual: "Which African lake is shared by Tanzania, Uganda, and Kenya?", cavablar: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Turkana"], duzgun: "Lake Victoria" },
  { sual: "Which mountain range is in western USA?", cavablar: ["Rockies", "Appalachians", "Sierra Nevada", "Alps"], duzgun: "Rockies" },
  { sual: "Which Asian country has the most volcanoes?", cavablar: ["Indonesia", "Japan", "Philippines", "China"], duzgun: "Indonesia" },
  { sual: "Which European capital is known as the 'City of Canals'?", cavablar: ["Venice", "Amsterdam", "Bruges", "Stockholm"], duzgun: "Venice" },
  { sual: "Which country is the largest by area in South America?", cavablar: ["Brazil", "Argentina", "Peru", "Colombia"], duzgun: "Brazil" },
  { sual: "Which strait separates Europe and Asia?", cavablar: ["Bosphorus", "Malacca", "Gibraltar", "Hormuz"], duzgun: "Bosphorus" },
  { sual: "Which desert is located in southwestern USA?", cavablar: ["Sonoran", "Sahara", "Gobi", "Kalahari"], duzgun: "Sonoran" },
  { sual: "Which country is famous for the fjords of Geiranger?", cavablar: ["Norway", "Iceland", "Finland", "Sweden"], duzgun: "Norway" },
  { sual: "Which river flows through London?", cavablar: ["Thames", "Seine", "Danube", "Rhine"], duzgun: "Thames" },
  { sual: "Which US state is famous for its Great Lakes?", cavablar: ["Michigan", "New York", "Ohio", "Wisconsin"], duzgun: "Michigan" },
  { sual: "Which mountain is the highest in the world?", cavablar: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"], duzgun: "Mount Everest" },
  { sual: "Which European country has Venice, Florence, and Rome?", cavablar: ["Italy", "Spain", "France", "Portugal"], duzgun: "Italy" },
  { sual: "Which South American country is known for the Amazon rainforest?", cavablar: ["Brazil", "Peru", "Colombia", "Venezuela"], duzgun: "Brazil" },
  { sual: "Which island nation is in the Indian Ocean and famous for its tea?", cavablar: ["Sri Lanka", "Maldives", "Mauritius", "Seychelles"], duzgun: "Sri Lanka" },
  { sual: "Which river flows through Cairo?", cavablar: ["Nile", "Amazon", "Yangtze", "Mississippi"], duzgun: "Nile" },
  { sual: "Which country is the largest by area in the world?", cavablar: ["Russia", "Canada", "USA", "China"], duzgun: "Russia" }
];


const historyQuestions = [
  { sual: "Who was the first President of the United States?", cavablar: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], duzgun: "George Washington" },
  { sual: "In which year did World War II end?", cavablar: ["1945", "1939", "1918", "1963"], duzgun: "1945" },
  { sual: "Which empire was ruled by Julius Caesar?", cavablar: ["Roman Empire", "Ottoman Empire", "British Empire", "Persian Empire"], duzgun: "Roman Empire" },
  { sual: "When did the French Revolution begin?", cavablar: ["1789", "1776", "1804", "1799"], duzgun: "1789" },
  { sual: "Who discovered America in 1492?", cavablar: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"], duzgun: "Christopher Columbus" },
  { sual: "What year did the Berlin Wall fall?", cavablar: ["1989", "1991", "1985", "1979"], duzgun: "1989" },
  { sual: "Who was known as the 'Maid of Orléans'?", cavablar: ["Joan of Arc", "Queen Elizabeth I", "Cleopatra", "Marie Antoinette"], duzgun: "Joan of Arc" },
  { sual: "Which war was fought between the North and South in the USA?", cavablar: ["Civil War", "World War I", "Revolutionary War", "War of 1812"], duzgun: "Civil War" },
  { sual: "Who was the first man to walk on the moon?", cavablar: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], duzgun: "Neil Armstrong" },
  { sual: "When did the Titanic sink?", cavablar: ["1912", "1905", "1920", "1898"], duzgun: "1912" },
  { sual: "Who was the first emperor of Rome?", cavablar: ["Augustus", "Nero", "Caligula", "Julius Caesar"], duzgun: "Augustus" },
  { sual: "In which year did the American Civil War start?", cavablar: ["1861", "1776", "1812", "1848"], duzgun: "1861" },
  { sual: "Who wrote the Declaration of Independence?", cavablar: ["Thomas Jefferson", "Benjamin Franklin", "John Adams", "James Madison"], duzgun: "Thomas Jefferson" },
  { sual: "Which war ended with the Treaty of Versailles?", cavablar: ["World War I", "World War II", "Napoleonic Wars", "Cold War"], duzgun: "World War I" },
  { sual: "Who was the last Tsar of Russia?", cavablar: ["Nicholas II", "Alexander III", "Peter the Great", "Ivan IV"], duzgun: "Nicholas II" },
  { sual: "Which ancient civilization built the pyramids?", cavablar: ["Egyptians", "Mesopotamians", "Romans", "Greeks"], duzgun: "Egyptians" },
  { sual: "Who was the British Prime Minister during WWII?", cavablar: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Tony Blair"], duzgun: "Winston Churchill" },
  { sual: "Which empire was ruled by Genghis Khan?", cavablar: ["Mongol Empire", "Ottoman Empire", "Persian Empire", "Roman Empire"], duzgun: "Mongol Empire" },
  { sual: "Who was the first female Prime Minister of the UK?", cavablar: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"], duzgun: "Margaret Thatcher" },
  { sual: "Which battle marked the end of Napoleon's reign?", cavablar: ["Battle of Waterloo", "Battle of Trafalgar", "Battle of Leipzig", "Battle of Austerlitz"], duzgun: "Battle of Waterloo" },
  { sual: "When was the United Nations founded?", cavablar: ["1945", "1919", "1939", "1950"], duzgun: "1945" },
  { sual: "Who was the first Chancellor of Germany?", cavablar: ["Otto von Bismarck", "Angela Merkel", "Adolf Hitler", "Konrad Adenauer"], duzgun: "Otto von Bismarck" },
  { sual: "Which empire built the Great Wall of China?", cavablar: ["Qin Dynasty", "Han Dynasty", "Tang Dynasty", "Ming Dynasty"], duzgun: "Qin Dynasty" },
  { sual: "Who led the Russian Revolution in 1917?", cavablar: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nicholas II"], duzgun: "Vladimir Lenin" },
  { sual: "When was the Magna Carta signed?", cavablar: ["1215", "1066", "1492", "1776"], duzgun: "1215" },
  { sual: "Who was the first President of South Africa after apartheid?", cavablar: ["Nelson Mandela", "F.W. de Klerk", "Thabo Mbeki", "Cyril Ramaphosa"], duzgun: "Nelson Mandela" },
  { sual: "Which civilization created cuneiform writing?", cavablar: ["Sumerians", "Egyptians", "Romans", "Greeks"], duzgun: "Sumerians" },
  { sual: "Who discovered penicillin?", cavablar: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Thomas Edison"], duzgun: "Alexander Fleming" },
  { sual: "Which war was fought from 1939 to 1945?", cavablar: ["World War II", "World War I", "Korean War", "Vietnam War"], duzgun: "World War II" },
  { sual: "Who was the founder of the Mongol Empire?", cavablar: ["Genghis Khan", "Kublai Khan", "Tamerlane", "Attila"], duzgun: "Genghis Khan" },
  { sual: "Which year did India gain independence?", cavablar: ["1947", "1950", "1935", "1945"], duzgun: "1947" },
  { sual: "Who was the first President of the Republic of Turkey?", cavablar: ["Mustafa Kemal Atatürk", "Sukarno", "Ho Chi Minh", "Reza Shah"], duzgun: "Mustafa Kemal Atatürk" },
  { sual: "Which battle was fought in 1066 in England?", cavablar: ["Battle of Hastings", "Battle of Agincourt", "Battle of Waterloo", "Battle of Tours"], duzgun: "Battle of Hastings" },
  { sual: "Who invented the printing press?", cavablar: ["Johannes Gutenberg", "Leonardo da Vinci", "Isaac Newton", "Galileo Galilei"], duzgun: "Johannes Gutenberg" },
  { sual: "Which empire was led by Suleiman the Magnificent?", cavablar: ["Ottoman Empire", "Roman Empire", "Persian Empire", "Mongol Empire"], duzgun: "Ottoman Empire" },
  { sual: "Who was the famous female pharaoh of Egypt?", cavablar: ["Hatshepsut", "Cleopatra", "Nefertiti", "Nefertari"], duzgun: "Hatshepsut" },
  { sual: "Which war ended in 1815 with Napoleon's defeat?", cavablar: ["Napoleonic Wars", "World War I", "World War II", "Seven Years' War"], duzgun: "Napoleonic Wars" },
  { sual: "Who was the first emperor of China?", cavablar: ["Qin Shi Huang", "Han Wudi", "Kangxi", "Yuan Shizu"], duzgun: "Qin Shi Huang" },
  { sual: "When did the Cold War officially end?", cavablar: ["1991", "1989", "1990", "1992"], duzgun: "1991" },
  { sual: "Who led the Soviet Union during World War II?", cavablar: ["Joseph Stalin", "Vladimir Lenin", "Leon Trotsky", "Nikita Khrushchev"], duzgun: "Joseph Stalin" },
  { sual: "Which US President issued the Emancipation Proclamation?", cavablar: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "James Madison"], duzgun: "Abraham Lincoln" },
  { sual: "Who was the first man to circumnavigate the globe?", cavablar: ["Ferdinand Magellan", "Christopher Columbus", "James Cook", "Marco Polo"], duzgun: "Ferdinand Magellan" },
  { sual: "Which event started on October 29, 1929?", cavablar: ["Wall Street Crash", "French Revolution", "Great Fire of London", "Boston Tea Party"], duzgun: "Wall Street Crash" },
  { sual: "Who was the first President of the United States to be impeached?", cavablar: ["Andrew Johnson", "Richard Nixon", "Bill Clinton", "Donald Trump"], duzgun: "Andrew Johnson" },
  { sual: "Which empire was ruled by Alexander the Great?", cavablar: ["Macedonian Empire", "Roman Empire", "Persian Empire", "Egyptian Empire"], duzgun: "Macedonian Empire" },
  { sual: "Which country was divided by the Berlin Wall?", cavablar: ["Germany", "Korea", "Vietnam", "Ireland"], duzgun: "Germany" },
  { sual: "Who wrote the 'Iliad' and the 'Odyssey'?", cavablar: ["Homer", "Virgil", "Sophocles", "Plato"], duzgun: "Homer" },
  { sual: "Which battle was fought during the American Revolutionary War?", cavablar: ["Battle of Bunker Hill", "Battle of Gettysburg", "Battle of Yorktown", "Battle of Midway"], duzgun: "Battle of Bunker Hill" },
  { sual: "Who was the first Prime Minister of India?", cavablar: ["Jawaharlal Nehru", "Mahatma Gandhi", "Indira Gandhi", "Rajiv Gandhi"], duzgun: "Jawaharlal Nehru" },
  { sual: "Which civilization built Machu Picchu?", cavablar: ["Inca", "Maya", "Aztec", "Olmec"], duzgun: "Inca" },
  { sual: "Who signed the Treaty of Paris in 1783?", cavablar: ["United States", "France", "Britain", "Spain"], duzgun: "United States" },
  { sual: "Which Russian leader initiated perestroika?", cavablar: ["Mikhail Gorbachev", "Vladimir Putin", "Boris Yeltsin", "Leon Trotsky"], duzgun: "Mikhail Gorbachev" },
  { sual: "Who was the first Emperor of Japan?", cavablar: ["Emperor Jimmu", "Emperor Meiji", "Emperor Hirohito", "Emperor Taisho"], duzgun: "Emperor Jimmu" },
  { sual: "Which city was the capital of the Byzantine Empire?", cavablar: ["Constantinople", "Rome", "Athens", "Alexandria"], duzgun: "Constantinople" },
  { sual: "Who was the first President of France?", cavablar: ["Louis-Napoleon Bonaparte", "Charles de Gaulle", "Georges Clemenceau", "Napoleon Bonaparte"], duzgun: "Louis-Napoleon Bonaparte" }
];

const movieQuestions = [
  { sual: "Who directed the movie 'Inception'?", cavablar: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"], duzgun: "Christopher Nolan" },
  { sual: "Which movie won the Oscar for Best Picture in 2020?", cavablar: ["Joker", "Parasite", "1917", "Once Upon a Time in Hollywood"], duzgun: "Parasite" },
  { sual: "Who played Jack in the movie 'Titanic'?", cavablar: ["Leonardo DiCaprio", "Brad Pitt", "Tom Hanks", "Johnny Depp"], duzgun: "Leonardo DiCaprio" },
  { sual: "What is the name of the toy cowboy in 'Toy Story'?", cavablar: ["Woody", "Buzz Lightyear", "Andy", "Jessie"], duzgun: "Woody" },
  { sual: "Who is the main villain in 'Star Wars'?", cavablar: ["Darth Vader", "Luke Skywalker", "Han Solo", "Yoda"], duzgun: "Darth Vader" },
  { sual: "Which actress plays Hermione Granger in 'Harry Potter'?", cavablar: ["Emma Watson", "Emma Stone", "Natalie Portman", "Jennifer Lawrence"], duzgun: "Emma Watson" },
  { sual: "In which year was the first 'Avengers' movie released?", cavablar: ["2010", "2012", "2015", "2008"], duzgun: "2012" },
  { sual: "Which film series features the character 'Frodo Baggins'?", cavablar: ["Harry Potter", "The Lord of the Rings", "The Hobbit", "Percy Jackson"], duzgun: "The Lord of the Rings" },
  { sual: "Who directed 'Jurassic Park'?", cavablar: ["Steven Spielberg", "James Cameron", "Peter Jackson", "Ridley Scott"], duzgun: "Steven Spielberg" },
  { sual: "Which movie features the song 'Let It Go'?", cavablar: ["Tangled", "Frozen", "Moana", "Brave"], duzgun: "Frozen" },
  { sual: "Who directed 'The Dark Knight'?", cavablar: ["Christopher Nolan", "Tim Burton", "Zack Snyder", "Guy Ritchie"], duzgun: "Christopher Nolan" },
  { sual: "Who played Tony Stark in 'Iron Man'?", cavablar: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"], duzgun: "Robert Downey Jr." },
  { sual: "Which movie won Best Picture at the Oscars in 1994?", cavablar: ["Forrest Gump", "Pulp Fiction", "The Shawshank Redemption", "Speed"], duzgun: "Forrest Gump" },
  { sual: "Who played Neo in 'The Matrix'?", cavablar: ["Keanu Reeves", "Brad Pitt", "Will Smith", "Johnny Depp"], duzgun: "Keanu Reeves" },
  { sual: "Which movie is about the fictional kingdom of Wakanda?", cavablar: ["Black Panther", "Thor", "Wonder Woman", "Doctor Strange"], duzgun: "Black Panther" },
  { sual: "Who directed 'Avatar'?", cavablar: ["James Cameron", "Steven Spielberg", "Peter Jackson", "Ridley Scott"], duzgun: "James Cameron" },
  { sual: "Which movie features the line 'I'll be back'?", cavablar: ["Terminator", "Predator", "RoboCop", "Total Recall"], duzgun: "Terminator" },
  { sual: "Who voiced Simba in the original 'Lion King'?", cavablar: ["Matthew Broderick", "James Earl Jones", "Jeremy Irons", "Jonathan Taylor Thomas"], duzgun: "Matthew Broderick" },
  { sual: "Which movie has a character called Jack Sparrow?", cavablar: ["Pirates of the Caribbean", "The Hobbit", "The Lord of the Rings", "Harry Potter"], duzgun: "Pirates of the Caribbean" },
  { sual: "Which movie is directed by Quentin Tarantino?", cavablar: ["Pulp Fiction", "Inception", "Avatar", "The Dark Knight"], duzgun: "Pulp Fiction" },
  { sual: "Who played Forrest Gump?", cavablar: ["Tom Hanks", "Brad Pitt", "Leonardo DiCaprio", "Johnny Depp"], duzgun: "Tom Hanks" },
  { sual: "Which film features a DeLorean time machine?", cavablar: ["Back to the Future", "Terminator", "The Matrix", "Interstellar"], duzgun: "Back to the Future" },
  { sual: "Who played Harry Potter?", cavablar: ["Daniel Radcliffe", "Rupert Grint", "Tom Felton", "Elijah Wood"], duzgun: "Daniel Radcliffe" },
  { sual: "Which movie is about a ship called 'The Pequod'?", cavablar: ["Moby Dick", "Titanic", "Pirates of the Caribbean", "Jaws"], duzgun: "Moby Dick" },
  { sual: "Who directed 'Schindler's List'?", cavablar: ["Steven Spielberg", "Martin Scorsese", "Clint Eastwood", "Ridley Scott"], duzgun: "Steven Spielberg" },
  { sual: "Which film is a musical by Lin-Manuel Miranda?", cavablar: ["Hamilton", "In the Heights", "Dear Evan Hansen", "West Side Story"], duzgun: "In the Heights" },
  { sual: "Which movie features King Kong?", cavablar: ["King Kong", "Godzilla", "Jurassic Park", "Avatar"], duzgun: "King Kong" },
  { sual: "Who played Joker in 'The Dark Knight'?", cavablar: ["Heath Ledger", "Joaquin Phoenix", "Jack Nicholson", "Jared Leto"], duzgun: "Heath Ledger" },
  { sual: "Which animated movie features a snowman named Olaf?", cavablar: ["Frozen", "Tangled", "Moana", "Coco"], duzgun: "Frozen" },
  { sual: "Who played Gandalf in 'The Lord of the Rings'?", cavablar: ["Ian McKellen", "Christopher Lee", "Viggo Mortensen", "Orlando Bloom"], duzgun: "Ian McKellen" },
  { sual: "Which movie is about a ring that must be destroyed?", cavablar: ["The Lord of the Rings", "Harry Potter", "The Hobbit", "Percy Jackson"], duzgun: "The Lord of the Rings" },
  { sual: "Who directed 'Titanic'?", cavablar: ["James Cameron", "Steven Spielberg", "Peter Jackson", "Christopher Nolan"], duzgun: "James Cameron" },
  { sual: "Which movie features the character Elsa?", cavablar: ["Frozen", "Tangled", "Moana", "Brave"], duzgun: "Frozen" },
  { sual: "Who played Wonder Woman in the 2017 movie?", cavablar: ["Gal Gadot", "Margot Robbie", "Scarlett Johansson", "Emma Watson"], duzgun: "Gal Gadot" },
  { sual: "Which film series has a character named Bilbo Baggins?", cavablar: ["The Hobbit", "The Lord of the Rings", "Harry Potter", "Narnia"], duzgun: "The Hobbit" },
  { sual: "Who directed 'Dunkirk'?", cavablar: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Ridley Scott"], duzgun: "Christopher Nolan" },
  { sual: "Which movie is about dreams within dreams?", cavablar: ["Inception", "The Matrix", "Shutter Island", "Interstellar"], duzgun: "Inception" },
  { sual: "Who voiced Woody in 'Toy Story'?", cavablar: ["Tom Hanks", "Tim Allen", "Billy Crystal", "John Goodman"], duzgun: "Tom Hanks" },
  { sual: "Which movie is about a planet called Pandora?", cavablar: ["Avatar", "Star Wars", "Guardians of the Galaxy", "Interstellar"], duzgun: "Avatar" },
  { sual: "Who directed 'Gladiator'?", cavablar: ["Ridley Scott", "Steven Spielberg", "James Cameron", "Christopher Nolan"], duzgun: "Ridley Scott" },
  { sual: "Which movie features the quote 'May the Force be with you'?", cavablar: ["Star Wars", "Star Trek", "Guardians of the Galaxy", "Avengers"], duzgun: "Star Wars" },
  { sual: "Who played Iron Man in the MCU?", cavablar: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"], duzgun: "Robert Downey Jr." },
  { sual: "Which movie features a ship called the 'Black Pearl'?", cavablar: ["Pirates of the Caribbean", "Titanic", "The Poseidon Adventure", "Moby Dick"], duzgun: "Pirates of the Caribbean" },
  { sual: "Who directed 'The Shining'?", cavablar: ["Stanley Kubrick", "Alfred Hitchcock", "Martin Scorsese", "Ridley Scott"], duzgun: "Stanley Kubrick" },
  { sual: "Which movie features the characters Mike and Sulley?", cavablar: ["Monsters, Inc.", "Toy Story", "Finding Nemo", "Shrek"], duzgun: "Monsters, Inc." },
  { sual: "Who played Captain Jack Sparrow?", cavablar: ["Johnny Depp", "Orlando Bloom", "Geoffrey Rush", "Ian McShane"], duzgun: "Johnny Depp" },
  { sual: "Which movie is about a basketball team overcoming odds?", cavablar: ["Space Jam", "Coach Carter", "Remember the Titans", "Hoosiers"], duzgun: "Remember the Titans" },
  { sual: "Who directed 'Pulp Fiction'?", cavablar: ["Quentin Tarantino", "Steven Spielberg", "James Cameron", "Christopher Nolan"], duzgun: "Quentin Tarantino" },
  { sual: "Which movie features a young wizard named Harry?", cavablar: ["Harry Potter", "Percy Jackson", "The Sorcerer's Apprentice", "Fantastic Beasts"], duzgun: "Harry Potter" },
  { sual: "Who played Black Panther in the MCU?", cavablar: ["Chadwick Boseman", "Michael B. Jordan", "Anthony Mackie", "Chris Evans"], duzgun: "Chadwick Boseman" },
  { sual: "Which movie features the character Elsa and Anna?", cavablar: ["Frozen", "Tangled", "Moana", "Brave"], duzgun: "Frozen" }
];



// function

// arrayi qarisdir
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 10-luq random sual sec
function selectRandomQuestions(array, count = 10) {
  const shuffled = shuffleArray([...array]);
  return shuffled.slice(0, count);
}

// mode secimi
const mode = localStorage.getItem("quizMode") || "halloween"; 
let suallar = [];

if (mode === "halloween") {
  suallar = selectRandomQuestions(halloweenQuestions, 10);
  document.body.style.background = "linear-gradient(orange, orangered)";
  document.querySelector("h1").textContent = "Halloween Quiz";
  document.querySelector("h1").style.fontFamily = "Creepster, cursive";
} else if (mode === "geography") {



  suallar = selectRandomQuestions(geographyQuestions, 10);
  document.body.style.background = "linear-gradient(skyblue, green)";
  document.querySelector("h1").textContent = "Geography Quiz";
  document.querySelector("h1").style.fontFamily = "Arial";
  document.body.style.fontFamily = "Arial, sans-serif";


} else if (mode === "history") {




  suallar = selectRandomQuestions(historyQuestions, 10);
  document.body.style.background = "linear-gradient(brown, gold)";
  document.querySelector("h1").textContent = "History Quiz";
  document.querySelector("h1").style.fontFamily = "Arial";

}else if(mode==="Movie"){

  suallar = selectRandomQuestions(movieQuestions, 10);
  document.body.style.background = "linear-gradient(yellow, orangered)";
  document.querySelector("h1").textContent = "Movie Quiz";
  document.querySelector("h1").style.fontFamily = "Arial";
}


// suallari yazmaq
const suallarolandiv = document.getElementById("suallarolandiv");
let sualHTML = "";
for (let i = 0; i < suallar.length; i++) {
  sualHTML += `<p>${i + 1}. ${suallar[i].sual}</p>`;
  for (let j = 0; j < suallar[i].cavablar.length; j++) {
    let item = suallar[i].cavablar[j];
    sualHTML += `
      <label class="option">
        <input type="radio" name="${i}" value="${item}" />
        <span class="dot"></span>
        <span class="text">${item}</span>
      </label><br>
    `;
  }
  sualHTML += "<br>";
}
suallarolandiv.innerHTML = sualHTML;

//moda uygun font

if (mode === "geography" || mode === "history" || mode==="Movie") {
  document.querySelectorAll("#suallarolandiv p").forEach(p => {
    p.style.fontFamily = "Arial";
  });
} else if (mode === "halloween") {
  document.querySelectorAll("#suallarolandiv p").forEach(p => {
    p.style.fontFamily = "Creepster, cursive";
  });
}


//cavab yoxlama ve neticve
const suallarigonderbtn = document.getElementById("suallarigonderbtn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const halloweenmode = document.getElementById("halloweenmode");
const geographymode = document.getElementById("geographymode");
const historymode  =document.getElementById("historymode");
const moviemode =document.getElementById("moviemode")

// sesler
const failaudio = document.getElementById("failaudio");
const escapeaudio = document.getElementById("escapeaudio");
const fail = document.getElementById("fail");
const clap = document.getElementById("clap");

suallarigonderbtn.onclick = function () {
  let xal = 0;
  for (let i = 0; i < suallar.length; i++) {
    let secimler = document.getElementsByName(i);
    for (let j = 0; j < secimler.length; j++) {
      if (secimler[j].checked && secimler[j].value === suallar[i].duzgun) {
        xal++;
      }
    }
  }
  moviemode.style.display="none"
  historymode.style.display ="none"
  halloweenmode.style.display = "none";
  geographymode.style.display = "none";
  suallarolandiv.style.display = "none";
  suallarigonderbtn.style.display = "none";
  loading.classList.remove("hidden");

  setTimeout(function () {
    loading.classList.add("hidden");
    result.classList.remove("hidden");

    if (mode === "halloween") {
      if (xal < 5) {
        result.innerHTML = `<h3 id="dead">You got ${xal} / ${suallar.length} correct! <br> <span id="youdied">You died</span></h3>`;
        failaudio.play();
      } else {
        result.innerHTML = `<h3 id="live">You got ${xal} / ${suallar.length} correct! <br> <span id="youescaped">You escaped</span></h3>`;
        escapeaudio.play();
      }
    } else if (mode === "geography") {
      if (xal < 5) {
        result.innerHTML = `<h3 id="lost">You got ${xal} / ${suallar.length} correct! <br> <span id="youlost">You lost</span></h3>`;
        fail.play();
      } else {
        result.innerHTML = `<h3 id="won">You got ${xal} / ${suallar.length} correct! <br> <span id="youwon">You won</span></h3>`;
        clap.play();
      }
    } else if (mode === "history") {
      if (xal < 5) {
        result.innerHTML = `<h3 id="lost">You got ${xal} / ${suallar.length} correct! <br> <span id="youlost">You lost</span></h3>`;
        fail.play();
      } else {
        result.innerHTML = `<h3 id="won">You got ${xal} / ${suallar.length} correct! <br> <span id="youwon">You won</span></h3>`;
        clap.play();
      }
    }else if(mode==="Movie"){
      if(xal<5){
         result.innerHTML = `<h3 id="lost">You got ${xal} / ${suallar.length} correct! <br> <span id="youlost">You lost</span></h3>`;
        fail.play();
      }else{
        result.innerHTML = `<h3 id="won">You got ${xal} / ${suallar.length} correct! <br> <span id="youwon">You won</span></h3>`;
        clap.play();
      }
    }
  }, 2000);
};

// timer
let vaxt = 60;
const vaxtDiv = document.getElementById("vaxt");
let timer = setInterval(() => {
  vaxt--;
  vaxtDiv.innerHTML = `Time left ${vaxt}s`;
  if (vaxt <= 0) {
    clearInterval(timer);
    alert("Time is up!");
    suallarigonderbtn.click();
  }
}, 1000);

suallarigonderbtn.addEventListener("click", () => {
  clearInterval(timer);
});

// mode deyis
function setMode(mode) {
  localStorage.setItem("quizMode", mode);
  location.reload();
}
