# 2022/11/15 Team Meeting W11

Meeting time: Nov 15th

Meeting location: Online through discord

Attendees: Lydia, Brenden, Ali, Jeena

Note Taker: Jeena

## TLDR

Next Client Meeting, Ali and Lydia are there for the whole thing, Brenden there for first 30 mins, Jeena joins after 30 mins
Need to research on vector databases for querying because we have very large datasets to work with
Probable: use Milvus vector database

## Transcript

A: CM was in person, 3 people showed up which 😕

but its okay b and J didnt show up

we just discussed what we did

just mentioned we finished docker

dcoker good to go

but frontend we have nothing

I mentioned that we were making componenents

why using components is better

he just asked what your progress is

just progress feed back

Point 1:

he wants to present something from ROSEN

I want all of us to show

have to showup for 10-15 mins

1:30 on tuesday

B: I can be there

J: I can't be there

A: its okay youre busy

Point 2

related to database and holding all the images after talking with lysdia and luca

worst case scenario

24 hour video is very long

calculated frames,

2 million for every 24 hours

the more time we use harder it gets

discussion regarding that

the links you saw are related to databases and backend implementations

regards of querying

something to keep in mind

20 million images

ML point of view

vectorizing images

each image is set in dimensions

upto 2nd last layer, images will be vectorized

for every image in 2 mil

reduces accuracy

in terms of runtime its bad

it will not be efficient

so that’s why

that’s mainly it

any questions

B: the max?

A: worst case scenario is 24 hour

B: no way of getting around

A : L said that it is possible to ask them to cut the videos into smaller portions

we were asking to check in backend

vectorize takes too much time

building from scartch

we shouyld gofrom easy to hard

B: my second solution is if we have time

we can parse the video itself

completely out of the scope

it will divide itself

easier way is to set a limit on the length of the video

L:

notify them, give a warning

function to detect

this is all provided we even have time

we will jot it down for later

find a way

B: theres non ay around that

L: there is, it will take a long time

J: SKIP frames

A: another algo detection thing, its hard

idk how long it will take

when we finish, when it can actually run

we will

L: anything else to ask ali?

J: can we start at 2:

L i have things to say

lots of images to vectorize, what we will be storing in the database is vector of reference image and also the vectors of inspection images

now theres another problem because were doing most things on vectors and theres a lot of dimensions if were using vgg16 its going to be hard to query

matt suggested using a vector database, which is what we’re looking into,

we were thinkning of using django

i just want you guys to look at that

any input on vector database

vector databases are used specifically for querying

machine learning

different startegies

Any inputs?

A: Ill make a quick point

if you dont have expereience

the first one at 2pm you click that is matthias reasearch

Lydia and I already discussed this

We’re all in this togther

when you ahve time please go through the article

L:

we were looking tinto melvis thats the direction we’re going in theres a lot of stack overflow in it i dont think we can swict h to mongo db

A: why not both?

L if we only have mongodb it will be hard to query

L if we only have mongo db its like

the vector will be linked with a foreign key

the melvis is not directly supported by mongodb they do want the image to be displayed

idk abut that part yet

so like in the vector db we will storing ref

the vectors of inspection videos

in the regular database we should store the name of the reference

the classificaition and the images

more complexity

so maybe

A: we should discuss this in person

L just updating you guys

next part

task for this week

the breadcrumb is done, button is done

B: no functionality to the button

L : B work on the functinality from now on select what needs to be done

idk if i should be assigning

B: is the button im making a submit button

L:button is onclick

leave

when the component is used, it should intake the function’s name

submission or general use button

i think everyone should have 2 tasks perweek

do you want to pick another task?

B: i thought i was doing func of button what else is there to do

A: the blue bar? its a consistent so make it a component

B: sure

A: i will create the admin page, the fucntionality to upload videos

thats it

thats what im working on

A: we are going back to mongodb, right?

L really depends on how we use database

A: im bringin it up because

for my own understanding mongodb

J:

B: start when we’re making pages
