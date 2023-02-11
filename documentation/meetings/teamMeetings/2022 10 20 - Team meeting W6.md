# 2022/10/20 - Team Meeting W6

Created: October 20, 2022
Created by: Anonymous

Meeting time: Oct. 20th 17:00,-18:40

Meeting location: Online through discord

Attendees: Lydia, Brenden, Ali, Jeena

Note Taker: Jeena

# Transcript

A: in terms of feedback, Jeena please mention if you won't show up

Update we were talking about if project was feasible w/ gema

B:

thank you for req report J and L

apart from that not involved

L:

Jeena is sick, we will move on

A:

when we began, i mentioned we might present

there was miscommunication

I said on monday we present req presentation, but agenda changed

im not annoyed

B:

yes i did

were only using second to last layer for turning images to vector

A:

B:

My concern is the fact that were still glossing over the vgg16 regardless of implemenmtation

didnt talk about scope

i want to talk about

A

to be frank it was just us in the meeting

B:

overall scope making a webapp takes time

making sure it works

A:

im annoyed that wait what did you discuss

L: im sorry i wrapped up, but i wrapped up because i thought the scope is doable

A thats the thing B if

B i know i know but i THOUGHT I missed something but i wanted to ask you guys

B i said i have a few questions but i want to meet my team before i ask these question

im not clear about what the algo actually outputs

L i will mention

B: i thought we agreed to scale down away from algo completely

A: this is the the part im confused i specifically mentioned that questions will be about database

i mentioned it in the beginning that the scope of project

If scope is something is something we need to clarify

L for time this question

if you need to confirm then just ask me in the meeting

if its something else then

B: L the way you were wrapping up

I thought

L calm down B

B i feel like im missing something

L: I had my assumption about it

B: i just dont know what the new scale

we should have figured out

B and L were there for

We have issues with algorithm implememtation

we believe its a lot of work

every issue is piling up

Gema

discussing online vs local database

Matt said not comfy with online database

he said comfy with rosen database

Lydia just say it

L: i asked about onedrive

he said not a good idea

onedrive not much memory, cloud not secure

we will

when algo is done training

export csv

if another data scientist needs it they can use

just local

A|: thats the update

we’re getting better understanding of algo

B did you look at algo documentation

A: L do you understand

L: I need your feedback are you

A: all done with the updates

L brief descp. of project

for Rosen the company they will take inspection, they will put the videos in the local database, videos will turn into images

after putting in the database

our job is to help the data scientists

what they do is they want to identify fish in the inspection they upload image of the fish upload it to our system

once the data scientist uploads the image, it goes to backend, algo will vectorize it

data base includes images

it will query 10 images from db

10 images most likely to be fish display it to frontend

data scientist goes over each image and selects the fishes

by doing that labels the images

sends them back

the submit will take all 10 images

algo now has 10 images plus one

algorithm retrains

so before retraining thats one iteration

so this happens

multiple iterations

stop point when the data scientist decide to stop

when it should stop when all images sent back are correct or when data scientist is done

basically that’s all

yes

from very abstract perspective

based on the description i understand what

B i understand the issue is

L i will cover that later

J: my question

L: how do algos fit it in the use context

vgg16 is not

we’re not using the whole thing

we are just using one of the layer

that layers should be built into the active learning algo

what does the layer do

we need to vectorize image

algo understands numbers

we only have 1 algo

we will not implement

moving on

as for active learning i asked how long it be

basically what she did was

find a package and make it quickly

i think we can cut it down to two weeks

do a two week task

i think its scaled down on that case

A:

I'm ok with going through

L: online pyhton packages

not sure which we will use

theres packages that do what we want

we can find something

copy paste

what we emphasize on is API

in the future they can use API of algo

B does that answer your concern

B does that answer your concern

B: okay

 i dont think scope was scaled down

we realized what the project was

L: Im not trying to blame

i blame rosen they never fully explained anything

at least now we know blender is optional

B: we can find videos online

A: we can 

B: moving away from blender

you werent there

I mentioned the scale should be either web app or algo

i have lot of concern about web app in general

idk how fast or long it will take

Gema said that ROSEN cam eto them asking  for an algo and a web app

i criticized them for webapp 

A: I agree what youre sayong has some merit

one the idea of capstone

but i dont think theres a point 

i think to be frank its redundant

we know what we have to do

the least we can do we can work out react js and django

we are trying to get a better angle on vgg16

i think even if we dont get it done, as long as we keep doing stuff, if we dont finish project its okay

i dont think sitting around will do anything

we cant wait it out

its starting to get 

we’re getting behind

L We can get started on what we know

A: remember you have teams as a resource

we have teams for a reason

just text on there

maybe

A: get started on webapp so we have SOMETHING

L: can i handle this

if you have concerns 

what you want to hear

i know your concern what would you want to hear what do you want to acheive

B: i just want to know if we want to scale it down

do we want to scale it down further

i didnt say we dont start

A: you re not saying, to whole group, weve been confused for two weeks

L: the focus, shift to get started not just confusion

B, i think the scope is scaled down our knowledge

our impression of project was big,

can we finish this i talked to other people and other teams

we will be lucky 

ambiguity of completeion is universal

A and I think scope is scaled down

my understanding of project is we can make really shitty one

Data scientist determine when to stop iteration

We can just use that function

this thing is vague, i dont think its a problem

maybe the algo can be really shitty 

and the website will be 

B: i get it

Im concerned by the time we finish web app we dont have time to do algo

this is personal

i like to do things one by one

L: i think you mentioned i am going to remake milestones and order of project

Multiple things happening in the project

i am pm, so its not your problem, it is mine

i think learning algo wont be put to the end

algo is easy to make but training takes time

i asked N?? it took 2 days

they want skeleton 

they will train it themselves

B: i got that

same way that matt talked about DB

they will uproot and point at server

L: that was a suggestion

Already debunked the solution, copy paste method

write a good user manual that is not focus of project

A: it seems like youre not comfortable

B: ithink we should do only the webapp

A: L said the milestones are changed, L wants to take resp 
whatever we work on even if its not finished we did our best

L: i just want to make you less worried, capstone is wacky for a reason you dont know if you will finish

B:

if i was doing by myself i would only do frontend

L : i think we have agreement

we can move on

okay theres a subpoint update other teams

we should do something for them 

we should talk to them, we should share our meeting notes.

B: A, did Luca ever send you the updated model 

A: i expected him not to send

L: do we agree with sharing info with other teams

A: i will send them client meeting notes

L:

the req report

ill ask for deadline extension

i didnt want it to go like prsentation

B:

you have teammates

i could have jumped in and helped

im not trying to blame

im just saying i want to help

you just need to tell ushow to help

if we can all pitch in

L: thank you for support, when i need help i will ping you

the reason why i didnt ping any of you

non functional requirements there is nothing i need help or clarification with

main task is the DFD which requires a full knowledge of project

it feels like me task but 

B: i think you shouldered it immediately, you could have helped

L: if thats something you want to do then

if i say i can handle and i dont really need help 

A: we want to help we dont know how to let you know

L: i think its one person task, if you think im doing not enough then 

A : i htink writing the req helps me understand more

L: another point, idk how to divide the tasks up

A: i would've been cool

L: i will asign sections to review

im just making the skeleton i need help for some stuff ill ping you guys

i did ask jeena and it was fine

ill email gema

L

- Brenden and Ali will do research into docker for web app

B: Users will label images themselves

A: Users will only need to label a set of 10

L: if the user submits a picture of a fish, then the algorithm will output a set of 10 images

- Ali and Brenden work in Figma to make mock UI for web app
- mock-up to be done before next client meeting

B: This weeks gitstats will be lighter because of the project and client complications

so this means as long as your individual score is above 20 we get full marks

A: individual score will be what you get after this week

Feature wishlist: 

- Undo submit of images feature

# Notes

Share client meeting notes with other teams

undo submit of images feature

Ali and Brenden work in Figma to make mock UI for web app