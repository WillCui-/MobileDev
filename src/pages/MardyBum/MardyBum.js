import React from 'react';
import Lyrics from '../../components/Lyrics';

export default function MardyBum() {
    const url = 'https://music.apple.com/us/album/mardy-bum/121522402?i=121522324';
    const lyrics = `
# Mardy Bum

Arctic Monkeys

Well now then Mardy Bum  
I've seen your frown  
And it's like looking down the barrel of a gun  
And it goes off  
And out come all these words  
Oh there's a very pleasant side to you  
A side I much prefer  
  
It's one that laughs and jokes around  
Remember cuddles in the kitchen  
Yeah, to get things off the ground  
And it was up, up and away  
Oh, but it's right hard to remember  
That on a day like today when you're all argumentative  
And you've got the face on  
  
Well now then Mardy Bum  
Oh I'm in trouble again, aren't I?  
I thought as much  
Cause you turned over there  
Pulling that silent disappointment face  
The one that I can't bear  
  
Well can't we just laugh and joke around  
Remember cuddles in the kitchen  
Yeah, to get things off the ground  
And it was up, up and away  
Oh, but it's right hard to remember  
That on a day like today when you're all argumentative  
And you've got the face on  
  
And yeah I'm sorry I was late  
But I missed the train  
And then the traffic was a state  
And I can't be arsed to carry on in this debate that reoccurs,  
Oh, when you say I don't care  
But of course I do, yeah, I clearly do!  
  
So laugh and joke around  
Remember cuddles in the kitchen  
Yeah, to get things off the ground  
And it was up, up and away  
Oh, but it's right hard to remember  
That on a day like today when you're all argumentative  
And you've got the face on
`;

    return (
        <Lyrics lyrics={lyrics} url={url} />
    )
}