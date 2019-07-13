//Variables
const tweetList = document.getElementById('tweet-list');


//Event Listeners
eventListeners();
function eventListeners() {
    //Form submission
    document.querySelector('#form').addEventListener('submit', newTweet);
    //Remove tweet from list
    tweetList.addEventListener('click', removeTweet);
    //Document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad)
}


//Functions
function newTweet(e) {
    e.preventDefault();

    //Read textArea value
    const tweet = document.getElementById('tweet').value;
    //if empty textArea alert else save
    if (tweet === ''){
        alert('Enter some text');
    }else {
        //Create the Remove button
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';
        //Create li
        const li = document.createElement('li');
        li.textContent = tweet;
        //Add remove btn
        li.appendChild(removeBtn);
        //Add to the list
        tweetList.appendChild(li);
        //Save to localeStorage
        addTweetLocalStorage(tweet);
        //Clear textArea
        this.reset();
    }
}

//Remove tweet from DOM
function removeTweet(e) {
    if (e.target.classList.contains('remove-tweet')) {
            e.target.parentElement.remove();
    }
    //Remove from Storage
    removeTweetLocalStorage(e.target.parentElement.textContent);
}

//Add the tweet into the localStorage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetFromStorage();
    //Add tweet into array
    tweets.push(tweet);
    //Convert tweet array into string
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

//Get tweet from Storage
function getTweetFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    //Get the values, if null is returned then we create an empty array
    if (tweetsLS === null) {
        tweets = [];
    }else {
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

//Print LS Tweets on load
function localStorageOnLoad() {
    let tweets = getTweetFromStorage();
    //Loop storage and print value
    tweets.forEach(function (tweet) {
        //Create the Remove button
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';
        //Create li
        const li = document.createElement('li');
        li.textContent = tweet;
        //Add remove btn
        li.appendChild(removeBtn);
        //Add to the list
        tweetList.appendChild(li);
    })
}

//Remove tweet from LS
function removeTweetLocalStorage(tweet) {
    //get tweet from storage
    let tweets = getTweetFromStorage();
    //Remove X from end
    const tweetDelete = tweet.substring(0, tweet.length -1);
    //Loop the tweets and remove selected
    tweets.forEach(function (tweetLS, index) {
        if (tweetDelete === tweetLS) {
            tweets.splice(index, 1)
        }
    });
    //Save data after delete
    localStorage.setItem('tweets', JSON.stringify(tweets));
}