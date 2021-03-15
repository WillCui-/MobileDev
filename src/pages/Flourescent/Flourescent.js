import React from 'react';
import Lyrics from '../../components/Lyrics';

export default function Flourescent() {
    const url = 'https://music.apple.com/us/album/fluorescent-adolescent/251499221?i=251499489';
    const lyrics = `
# Flourescent Adolescent

Arctic Monkeys

You used to get it in your fishnets  
Now you only get it in your night dress  
Discarded all the naughty nights for niceness  
Landed in a very common crisis  
  
Everything's in order in a black hole  
Nothing seems as pretty as the past though  
That Bloody Mary's lacking in Tabasco  
Remember when you used to be a rascal?  
  
Oh the boy's a slag  
The best you ever had  
The best you ever had is just a memory  
And those dreams weren't as daft as they seem  
Not as daft as they seem,  
My love, when you dream them up...  
  
Flicking through a little book of sex tips  
Remember when the boys were all electric?  
Now when she's told she's gonna get it  
I'm guessing that she'd rather just forget it  
  
Clinging to not getting sentimental  
Said she wasn't going but she went still  
Likes her gentlemen not to be gentle  
Was it a Mecca dauber or a betting pencil?  
  
Oh the boy's a slag  
The best you ever had  
The best you ever had is just a memory  
And those dreams weren't as daft as they seem  
Not as daft as they seem,  
My love, when you dream them up  
  
Oh, Flo, where did you go?  
Where did you go?  
Where did you go? Whoa.  
  
Falling about  
You took a left off Last Laugh Lane  
Just sounding it out  
But you're not coming back again.  
  
You're falling about  
You took a left off Last Laugh Lane  
We're just sounding it out  
But you're not coming back again  
  
You used to get it in your fishnets  
(falling about)  
Now you only get it in your night dress  
Discarded all the naughty nights for niceness  
(you took a left off Last Laugh Lane)  
Landed in a very common crisis  
  
Everything's in order in a black hole  
(we're sounding it out)  
Everything was pretty as the past though  
That Bloody Mary's lacking in Tabasco  
(but you're not coming back again)  
Remember when you used to be a rascal?
`;

    return (
        <Lyrics lyrics={lyrics} url={url} />
    )
}