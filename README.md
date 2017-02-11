# FakeBooks
The beginning of a great coding journey with Shirley ;)

## Idea
*So we don't lose sight of the problem (our inspiration!), here are the notes off our whiteboard sess.*
Our awesome (fake)books tool returns a book recommendation based on user selections for what they'd like to read next.

## Models
*Book*
- title 
- author
- synopsis
- attributes[]: each scored as "happy" or "sad" in our metadata on a 1 - 10 scale
- URL

*Vendor* 
- title 
- URL

*Users*
- name
- gender 

## Attributes Dictionary
For any particular attribute, a score of `10` is a high "happiness" score i.e. very exciting read, highly recommended for a feel good search. Conversely, a score of `1` represents a low "happiness" score.
```
{
    exciting: 8,
    drama: 7,
    romantic: 6,
    biography: 4,
    'adult fiction': 2
    religious: 1
}
```

## Books Data
*Let's revisit this later, and take the opportunity to talk about data formats, and databases*
- Bros before Hos - exciting, drama 
- Where did She Go - drama, romance
- 10 steps to fame - biography
- Me, myself and I - adult fiction
- 2 birds - biography
- 4 stones - exciting 
- David and Goliath - religious, drama
