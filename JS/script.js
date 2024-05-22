
var quotesArray = [
    {
        'author': 'Oscar Wilde',
        'quote': 'Be yourself; everyone else is already taken.'
    },
    {
        'author': 'Frank Zappa',
        'quote': 'So many books, so little time.'
    },
    {
        'author': 'Albert Einstein',
        'quote': 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.'
    },
    {
        'author': 'Marcus Tullius Cicero',
        'quote': 'A room without books is like a body without a soul.'
    },
    {
        'author': 'Mae West',
        'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {
        'author': 'Mahatma Gandhi',
        'quote': 'Be the change that you wish to see in the world.'
    },
    {
        'author': 'C.S. Lewis, The Four Loves',
        'quote': 'Friendship ... is born at the moment when one person says to another "What! You too? I thought I was the only one."'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': 'A friend is someone who knows all about you and still loves you.'
    },
    {
        'author': 'Oscar Wilde',
        'quote': 'To live is the rarest thing in the world. Most people exist, that is all.'
    },
    {
        'author': 'Mahatma Gandhi',
        'quote': 'Live as if you were to die tomorrow. Learn as if you were to live forever.'
    },
    {
        'author': 'Stephen Chbosky',
        'quote': 'We accept the love we think we deserve.'
    },
    {
        'author': 'Oscar Wilde',
        'quote': 'I am so clever that sometimes I don\'t understand a single word of what I am saying.'
    },
    {
        'author': 'Ralph Waldo Emerson',
        'quote': 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'
    },
    {
        'author': 'Albert Einstein',
        'quote': 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.'
    }
];

function randomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    document.querySelector('#quote').textContent = `\"${quotesArray[randomIndex].quote}\"`;
    document.querySelector('#quoteAuthor').textContent = `-- ${quotesArray[randomIndex].author}`;
}
