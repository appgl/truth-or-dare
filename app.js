var truth_friends = [
  "tell your most guarded secret.",
  "who is your crush?",
  "from the people in the room who would you slap? and why?",
  "what is the best thing that has ever happened to you?",
  "What is your biggest blessing?",
  "What is your deepest darkest fear?",
  "Speak about your first kiss.",
  "Who is the sexiest person here",
  "What is your biggest regret?",
  "Have you ever cheated or been cheated on?",
  "Speak about your most awkward experience",
  "Who is your best date ever?",
  "What is the biggest lie you have ever told?",
  "What is the most embarrassing picture of you?",
  "Who is the person you most regret kissing?",
  "speak about your most embarrassing vomit story.",
  "What do most people think is true about you, but isn’t?",
  "What is the biggest thing you’ve gotten away with?",
  "What would you do if you were the opposite sex for a month?",
  "What is the most childish thing you still do?",
  "What is something your friends would never expect that you do?",
  "What’s the worst time you let someone take the blame for something you did?",
  "What is the stupidest thing you have ever done?",
  "What is the grossest thing that has come out of your body?",
  "What is the most embarrassing thing in your room?",
  "What is the scariest dream you have ever had?",
  "When was the most inappropriate time you farted?",
  "Who have you loved but they didn’t love you back?",
  "What pictures or videos of you do you wish didn’t exist?",
  "What was the cruelest joke you played on someone?"
]

var dare_friends = [
  "call your crush and ask them on a date.",
  "name the birthday of every friend in the room.",
  "Serenade the person to your right.",
  "Talk in an accent for the next 3 rounds.",
  "Kiss the person to your left.",
  "Attempt to do a magic trick.",
  "Do four cartwheels in row.",
  "Let someone shave part of your body.",
  "Eat five tablespoons of a condiment.",
  "Be someone’s pet for the next 5 minutes.",
  "Attempt to break dance for 30 seconds.",
  "Let the group give you a new hairstyle.",
  "Do the worm.",
  "Curse like sailor for 20 seconds straight.",
  "Sniff the armpits of everyone in the room.",
  "Dance to a song of the group’s choosing.",
  "Take a shower with your clothes on.",
  "Break two eggs on your head.",
  "Do your best impression of a baby being born.",
  "Belly dance like your life depended on it.",
  "Put 4 ice cubes down your pants.",
  "Lick the floor.",
  "For a guy, put on makeup. For a girl, wash off your make up.",
  "Dance with no music for 1 minute.",
  "Let the group pose you in an embarrassing position and take a picture.",
  "Play a song on by slapping your butt cheeks till someone guesses the song.",
  "Give someone your phone and let them send one text to anyone in your contacts.",
  "Depict a human life through interpretive dance.",
  "Let the person to your left draw on your face with a pen.",
  "Let the group look through your phone for 1 minute."
]

/*
Who here has the nicest butt?
Who was the last person you licked?
*/

function genre(val) {
  var x = document.getElementById("selection").value;
  start(val)
}

function start(val) {
  var random = Math.random();
  random = random*(truth_friends.length);
  random = Math.floor(random)
  if (val===1) {
    document.getElementById("answer").innerHTML = truth_friends[random]
  } else {
    document.getElementById("answer").innerHTML = dare_friends[random]
  }
}
