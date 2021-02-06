/* eslint-disable object-curly-newline */

const { Hosts, Locations, ToKnow, db } = require('./index.js');

const hosts = [
  {
    name: 'Dwayne Johnson',
    verified: true,
    photo: 'https://fechostinfo.s3-us-west-1.amazonaws.com/dwayneJohnson',
    joinDate: 'Tue Mar 24 2015 18:00:00 GMT-0600 (Mountain Daylight Time)',
    desc: 'Hello jabroni! I am a former professionial wrestler, Hollywood mega-star, and full-time Airbnb host. When not hosting my mansions for you, I am all around the world, on tv/movie sets, and defeated evil geniuses. Due to my crazy lifestyle, I unfortunately can\'t be there for introducing you to my pad, but i\'m sure you\'ll live in luxury! Make yourself at home, live the life of a hollywood star, just like you are and kick some candy a**!',
    reviews: 978,
    contact: {
      email: 'theRock@jabroni.com',
      phone: '555-123-1273',
    },
    response: {
      rate: 100,
      time: 'within an hour',
    },
    properties: [18, 1, 2],
    messages: [],
  },
  {
    name: 'Elon Musk',
    verified: true,
    photo: 'https://fechostinfo.s3-us-west-1.amazonaws.com/elonMusk',
    joinDate: 'Fri Jul 28 2017 20:00:00 GMT-0600 (Mountain Daylight Time)',
    desc: 'Welcome to my, uh, Airbnb! As everything I did, I strive for almost the best in the world. If it\'s a bit error prone, then that\'s ok. As such, my Airbnb\'s are in the 98% of the best Airbnb\'s, between Bill and I. As I travel the world, I may stop in and crash during your stay. So always be prepared for partying! Feel free to use any cars that may be in the garage, but just fill them back up with gas... ;)',
    reviews: 3762,
    contact: {
      email: 'populateMars@tesla.com',
      phone: '255-739-9227',
    },
    response: {
      rate: 98,
      time: 'within a few hours',
    },
    properties: [19, 3, 4],
    messages: [],
  },
  {
    name: 'Steve Schneider',
    verified: false,
    photo: 'https://fechostinfo.s3-us-west-1.amazonaws.com/JoeScheider',
    joinDate: 'Wed Sept 5 2018 18:00:00 GMT-0600 (Mountain Daylight Time)',
    desc: 'Welcome everyone! My name is Steve and I hope you find my location spectacular! After moving to the Bay Area for family reasons, I quickyl found out this BREATHTAKING house! I knew I had to have it, but as my family grew from 2 to 10 kids, our house just couldn\'t keep up. Instead of selling, I decided to offer it up for tourists and vacationers to truly enjoy the best property (in my mind!) of the Bay Area! Enjoy!!!! (Please don\'t break anything.)',
    reviews: 43,
    contact: {
      email: 'steve@ss.com',
      phone: '555-123-9876',
    },
    response: {
      rate: 83,
      time: 'within a day',
    },
    properties: [20],
    messages: [],
  },
  {
    name: 'Milly Ketchum',
    verified: true,
    photo: 'https://fechostinfo.s3-us-west-1.amazonaws.com/MillyKetchum',
    joinDate: 'Wed Mar 8 2018 18:00:00 GMT-0600 (Mountain Daylight Time)',
    desc: 'Howdy y\'all! Name is Milly, just like Misty. I have to go catch everything I see out there, but my other love is basketball! Memorabilia are scattered throughout my properties, so everyone can enjoy the best sport in the world. There may even be tickets hidden to the next local game, maybe you\'ll find them!',
    reviews: 188,
    contact: {
      email: 'millK@catchThemAll.com',
      phone: '555-123-4412',
    },
    response: {
      rate: 88,
      time: 'within a day',
    },
    properties: [5, 6, 7],
    messages: [],
  },
  {
    name: 'Jon Lasley',
    verified: false,
    photo: 'https://fechostinfo.s3-us-west-1.amazonaws.com/JonLasley',
    joinDate: 'Mon Jan 1 2018 12:00:00 GMT-0600 (Mountain Daylight Time)',
    desc: 'Hello! My home is your home. But when you checkout, make sure you checkout as if your family is coming over for Thanksgiving dinner. All houses are outfitted with the latest technology for smart homes! An iPad controls it all, including the light-up hot tub. Enjoy your stay, and maybe i\'ll see you downtown on fridays!',
    reviews: 50,
    contact: {
      email: 'JonDon@las.com',
      phone: '555-123-1234',
    },
    response: {
      rate: 95,
      time: 'within a few hours',
    },
    properties: [14, 15, 16, 17],
    messages: [],
  },
  {
    name: 'Amanda DeVille',
    verified: true,
    photo: 'https://fechostinfo.s3-us-west-1.amazonaws.com/AmandaDeVille',
    joinDate: 'Mon Aug 3 2020 15:00:00 GMT-0600 (Mountain Daylight Time)',
    desc: 'When not exploring the mountains, I am painting, living life with my husband, and laying back by the pool. My homes are meant to be your homes, so please make it so. I like to party, but please be respectful of the neighbors! My college days allowed me to support my family while enjoying a great time. Please be smart and enjoy!',
    reviews: 20,
    contact: {
      email: 'Chris@email.com',
      phone: '555-123-6789',
    },
    response: {
      rate: 93,
      time: 'within a day',
    },
    properties: [11, 12, 13],
    messages: [],
  },
  {
    name: 'Joe Docker',
    verified: true,
    photo: 'https://fechostinfo.s3-us-west-1.amazonaws.com/JoeDocker',
    joinDate: 'Wed May 1 2019 17:00:00 GMT-0600 (Mountain Daylight Time)',
    desc: 'Hello! MY name is Joe Docker and hope you are finding this place swell! I usually respond to any requests throughout the stay, and try to be as hostful as possible. There are rules to follow, so please read carefully. I am a musician, collector of baseball, and hobbyist of fly-fishin, so their may be items in the house that may be interest to you! Hope you enjoy the decor and enjoy your stay!',
    reviews: 1023,
    contact: {
      email: 'Joe.D@email.com',
      phone: '555-321-5555',
    },
    response: {
      rate: 97,
      time: 'within a few hours',
    },
    properties: [8, 9, 10],
    messages: [],
  },
];

const locations = [
  {
    city: 'Hollywood',
    state: 'California',
    country: 'United States',
    desc: 'Hollywood is a trendy area known for its high-energy nightlife. The fabled Sunset Strip features the Chateau Marmont, a swanky celebrity hideaway, plus comedy clubs and live music venues like the legendary Whiskey a Go Go. Santa Monica Boulevard, awash in rainbow flags, is home to a number of gay bars, dance clubs and shops. Hollywood also offers some of the city’s most buzzworthy restaurants.\n\nWeHo: Located in the heart of metropolitan Los Angeles, at 1.9 square miles, West Hollywood is a robust economic and cultural center instilled with idealism and creativity. The City of West Hollywood is filled with rich history. People from all over the globe visit West Hollywood for its iconic destinations such as The Sunset Strip for its unparalleled historical connection to music, entertainment, architecture, fashion, and culture-making; for Santa Monica Boulevard’s historic LGBT destinations and entertainment establishments; and for the Design District’s shopping, galleries, and restaurants.',
    properties: [1, 3, 6, 7, 18],
  },
  {
    city: 'Austin',
    state: 'Texas',
    country: 'United States',
    desc: 'As Austin grows into a world-class city, there\'s concern in some quarters that it\'s losing its weirdness. But rest assured that Austin retains it\'s many attractive features.\n\nOverall, what attracts many people to Austin are likely the same things that caught your attention; the high quality of life, low cost of living, favorable employment prospects, relatively mild climate, and active music and arts scene.\n\nNeighboorhoods: Downtown is the heart of the city, where it\'s non-stop activity day and night.\n\nCultural attractions fill visitors\' days, and nightlife, shows and concerts keep them busy all night. \n\nThe main district contains within its borders smaller neighborhoods for shopping, nightlife, eateries and galleries.',
    properties: [17, 12, 13, 15, 19],
  },
  {
    city: 'Oakland',
    state: 'California',
    country: 'United States',
    desc: 'Hipsters and hip hop, passionate activists and grassroots entrepreneurs—it takes time to peel back all of the layers that make up the city. To truly appreciate Oakland’s diverse culture, spend some time exploring its neighborhoods. You’ll find prideful locals around every corner, whether it’s at the farmers market in Chinatown or a theater in Uptown. Don’t settle in one spot for too long—there’s a lot of ground to cover in Oakland. Read on for your cheat sheet to The Town’s best.\n\nOld Oakland: Though there are Victorians sprinkled throughout Oakland, this slice of preserved late century architecture is brochure-perfect. Many of the buildings within this six-block stretch look fresh off an 1870s remodel. Back in the day, this was the place to be seen in Oakland, the center of hoighty-toighty society, having the best restaurants, shops and hotels on cobble-stoned streets. And it still is—although it took a serious amount of restoring to bring it back from neglect after the 1906 earthquake. Today, indie retail shops are opening. Chefs at informal eateries are cooking up recipes from their old countries, whether that be Mexico, Barbados, Italy or Vietnam. At the old Swan’s Market, a food hall is coming to life with Mexican Cosecha, wine tasting with Periscope Cellars, and Rosamunde’s sausage and beer. The Friday’s farmers market is one of The Town’s best, with all the local characters buying their delicious provisions.',
    properties: [4, 11, 16, 14, 20],
  },
  {
    city: 'Seattle',
    state: 'Washington',
    country: 'United States',
    desc: 'Seattle is a city of distinct neighbourhoods and urban districts that, though close to one another, change from one street to the next. Some neighbourhoods, notably those near the Duwamish Waterway to southwest of the city centre, are industrial in character, marked by rail yards, wharves, cranes, and low-income housing projects. Others, largely outside the city centre, are showcases for the opulence wrought by Seattle’s booming high-technology sector.\n\nThe downtown district is Seattle’s commercial heart. Of particular interest to visitors is the Pike Place Market, a sheltered area of fresh fish and produce shops, other retail stores, and restaurants. To the east and northeast of the downtown district stand First Hill and Capitol Hill, low bluffs covered by office buildings and commercial properties. Capitol Hill has many stately mansions and is a lively centre for shopping and nightlife. Beyond them are the Central District, the traditional hub of the city’s African American population, and the large residential Madrona neighbourhood, which faces Lake Washington.\n\nTo the north of Pioneer Square, downtown, and the popular neighbourhood of Belltown stands Seattle Center, the 74-acre (30-hectare) site of the 1962 World’s Fair. The centre contains the 605-foot- (184-metre-) high Space Needle, Seattle’s best-known landmark, as well as McCaw Hall (home of the Seattle Opera), Key Arena, the Children’s Museum, the Museum of Pop Culture, and other public buildings. There the high-rise downtown cityscape gives way to the pleasant urban neighbourhoods of Magnolia, which borders Puget Sound, and Queen Anne, located east-southeast of Magnolia between Lake Union, the Lake Washington Ship Canal, and Elliott Bay. South Lake Union was a relatively sleepy area until Amazon.com consolidated all of its offices there in 2010, which led to rapid growth that was partially enabled by a streetcar line that had opened in the neighbourhood in 2007.',
    properties: [2, 5, 8, 9, 10],
  },
];

const otherToKnows = ['Jabroni, it\'s the Rock cave', 'Cabin near seattle, the getaway you need!', 'Giga Mansion of West Hollywood', 'Best Crash pad for Oaklands finests', 'The only apartment in Seattles Needle, Don\'t ask', 'We go to WeHo', 'We go to WeHo too', 'Seattles true finest', 'Across from the needle, Best view in Seattle', 'When you\'re here, you\'re here', 'Oakland\'s only skyrise mansion', 'Cute and quant cottage on outskirts of Austin', 'Delivered Austin BBQ is still the best BBQ in Austin', 'Bay bay for the bay', 'Sweet cozy home, heart of Austin', 'Live like a king in this king sized apartment, Oakland\'s penthouse', 'Walk to the bars, stay away from cars, 6th Street\'s popping household']
  .reduce((m, i) => {
    m.push({
      name: i,
      rules: {
        house: ['Check-in: 4:00 PM', 'Check-out: 11:00A AM', 'No pets', 'No smoking', 'No loud music after 2:00 AM'],
        additional: ['No large events'],
      },
      health: {
        safety: ['Committed to Airbnb\'s enhanced cleaning process.', 'During the COVID-19 pandemic, all hosts and guests must review and follow Airbnb\'s social-distancing and other COVID-19-related guidelines.', 'Carbon monoxide alarm', 'Smoke alarm'],
        acknowledge: ['Security Deposit - if you damage the home, you may be charged up to $500'],
      },
      cancelPolicy: ['Free cancellation for 48hrs', 'After that, cancel before 4:00pm on Feb 12 to get 50% back, minus the service fee'],
      id: m.length + 1,
    });
    return m;
  }, []);

const toKnow = [
  {
    name: 'Hollywood lifeStyle of luxury! Mansion for a star',
    rules: {
      house: ['Self check-in with lockbox', 'Not suitable for children and infants', 'No pets', 'No smoking', 'Only 4 visitors'],
      additional: ['No Film Productions Without Permission', 'No jumping off the balcony into the pool', 'No loud music after 2:00 AM'],
    },
    health: {
      safety: ['Committed to Airbnb\'s enhanced cleaning process.', 'During the COVID-19 pandemic, all hosts and guests must review and follow Airbnb\'s social-distancing and other COVID-19-related guidelines.', 'Carbon monoxide alarm', 'Smoke alarm'],
      acknowledge: ['Must climb stairs - There are 5 stories. The elevator is broken, so you must climb stairs to access bedrooms, kitchen, and basketball court.', 'Security Deposit - if you damage the home, you may be charged up to $500'],
    },
    cancelPolicy: ['Free cancellation for 48hrs', 'After that, cancel before 4:00pm on Feb 12 to get 50% back, minus the first night and service fee'],
    id: 18,
  },
  {
    name: 'Model H is for house',
    rules: {
      house: ['Self check-in with lockbox', 'Check-out: 11:00 AM', 'Not suitable for children and infants', 'Parties only', 'No pets'],
      additional: ['No Jeff Bezos'],
    },
    health: {
      safety: ['Committed to Airbnb\'s enhanced cleaning process.', 'During the COVID-19 pandemic, all hosts and guests must review and follow Airbnb\'s social-distancing and other COVID-19-related guidelines.', 'Carbon monoxide alarm', 'Smoke alarm'],
      acknowledge: ['No Jeff Bezos - Do not allow Jeff Bezos on to the property', 'Security Deposit - if you damage the home, you may be charged to throw an epic party on my birthday'],
    },
    cancelPolicy: ['Free cancellation for 12hrs', 'After that, cancel before 12:00pm on Apr 3 to get 30% back, minus the service fee'],
    id: 19,
  },
  {
    name: 'Bay for days! The best view in the Bay',
    rules: {
      house: ['Check-in: 4:00 PM - 8:00 PM', 'No smoking', 'No pets', 'No parties or events', 'No visitors'],
      additional: ['No loud noise after 11 PM', 'No Candle/Fire Use', 'No Film Productions Without Permission'],
    },
    health: {
      safety: ['Committed to Airbnb\'s enhanced cleaning process.', 'During the COVID-19 pandemic, all hosts and guests must review and follow Airbnb\'s social-distancing and other COVID-19-related guidelines.', 'Carbon monoxide alarm', 'Smoke alarm'],
      acknowledge: ['Security Deposit - if you damage the home, you may be charged up to $125'],
    },
    cancelPolicy: ['Free cancellation from 1 week of booking', 'After that, cancel before 4:00pm on Feb 27 to get 50% back, minus the service fee'],
    id: 20,
  },
  ...otherToKnows,
];

const seedDB = () => {
  Hosts.create(hosts)
    .then(() => Locations.create(locations))
    .then(() => ToKnow.create(toKnow))
    .then(db.disconnect);
};

seedDB();
module.exports.seedDB = seedDB;
module.exports.toKnow = toKnow;
module.exports.hosts = hosts;
module.exports.locations = locations;
module.exports.db = db;
