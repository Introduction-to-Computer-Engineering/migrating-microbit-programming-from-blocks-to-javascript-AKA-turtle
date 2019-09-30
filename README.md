# CPE 1040 - Introduction to Computer Engineering

## Assignment: Migrating micro:bit Programming from Blocks to JavaScript

## Tags

### v0.2

**Buttons A and B trigger simple animations [file](section-2.js)**

### v0.3

**Buttons A and B cause fibonacci series to count up or down [file](section-3-Phi-Counter.js)**

### v0.4

**shaking Microbit answers question, should I, Marry, F#ck, Kill [file](section-4-f#ck-marry-kill.js)**

### v0.5

**buttons A triggers a pinwheel animation [file](section-5-spinner.js)**

### v0.6

**midterm [file](mini-project-bounce-working.js)**


### v0.7

**buttons A and B cause random pixels to illuminate [file](Section-7-led-random.js)**

### v0.8

**creates some odd conditions on whether leds will light or not dependind on order and combination of button presses [file](section-8-booleanish.js)**

### v0.9

**exactly like the section activity, did not use blocks  [file](section-9-unmodified)**

### v0.10

**went through activity. did not create file**

### v0.11

**was able to complete correct ball animation using arrays [file](section-11-bounce-arrary.js)**

### v0.12

**Final [file](Final.js)**

## Designs



### Midterm project


#### Goal

My goal is to create a simple game mechanic. A bouncing sprite named "ball" shall bounce with good animation. It will traverse left and right as seen by the ground moving beneath. The ball will constantly bounce off of the ground, which will be the bottom row of LEDs illuminated. Super Goal: As the ball moves to the right holes will appear in the ground which one must avoid.

#### Design process

In trying to create a good bounce loop the key is to have movement up and down follow the timimg of a parabala. Or said another way the ball/sprite needs to move from fast to slow back to fast before it 'hits' the ground. I could do this in several ways. In traditional animation I would move the sprite one grid point at a time and choose the time between each move by hand. What I want to do here instead was to do it procedurely using for loops and some math.

#### JS Constructs & objects

**The process for this is to:**

-use the count of the for loop

-take the count multiply it by itself. i.e. count=1,2,3,4 result=1,4,9,16

-take the result and multiply it by a delay time, say 14ms
this was i can control the overall timing by just adjust the single delay time, instead of a bunch of individual delays.

**So far I've gotton it to work on the way up, but it needs to reverse for the way down.
I think I need to create two states. an Up and a Down state and flip between the two to get the correct result.**

### Final project

#### Goal

**My goal is to create a working game. There should be 3 processes.**
1) have ball bounce on hitting button A (completed)
2) procedurally create a gound of varying brightnesses that moves left as you press button B
3) the ground will randomly create 'open' spaces (zero brightness) that if the ball bounces into these spots it will be game over

#### Design process
With the bouncing animation working in one JS file already I began creating the procedural ground program in a seperate file.
For the ground I imagined the bottom 5 pixels being the ground. To percieve movement of the ground I realized I needed to create a variation of brightnesses of the pixels to begin with, then shift those pixels to the left. The eye will track the shifting and percieve it as movement. I didn't want to hand program each new pixel in the ground as it appeared, so I set up an array which had an element was constanly being added to at the end when button B was pressed, while also deleting element 0. The new Element randomly chooses 1 of 5 values of brightness including 0. If 0 is chosesn then theres's 'no' ground and the ball if it lands on that spot will be game over. the game will determine game over if the ground at the landing point of ball has no illumination and the ball is at position x1,y4

**Got it to work except initial graound won't render so play has to jump and quickly make the first move otherwise game over.**

#### JS Constructs & objects
**-arrays within arrays**

**-generating random values used to select array elements**

**-adding and subtracting elements from arrays**

**-if statement with boolean to determine game over state**
