# CPE 1040 - Introduction to Computer Engineering

## Assignment: Migrating micro:bit Programming from Blocks to JavaScript


#### 2.2 Github commits & tags

1. Working in the Makecode browser environment, you cannot save the JS file of your program in a directory of your choosing. It is stored in an in-browser memory object and is not accessible. (A side note: there might be a Makecode app for Windows which might actually allow that, but there is nothing like that for Mac, to the best of knowledge.) So, you will need to copy the JS from Makecode to another editor (preferably, a code editor with syntax highlighting and code manipulation) and then save and commit it.

2. You need to commit the changes and additions to your assignment for each section or project. This means that there should be _at least_ 12 commits pushed to your remote assignment repository on Github when you are done. I advise you to have more than that, to get used to it.

2. You need to **tag** the final commit for each section. Tags are under _releases_ in the repository bar on the Github page of the assignment repository. The tag should be one of the following `v0.1`, `v0.2`, ..., `v0.12`, for each section, respectively. (Terminology clarification: the `git` command is `git tag`, but tags are counted as _releases_ on Github.)

3. You need to update the assignment repository [README.md](README.md) (this document, in the section [Tags](#tags)) with a short description of your section program or project, **before** you tag. You can do that directly on Github after you push your commits from your local repository.

#### 2.3 Project design

1. For each of the two projects, you need to include a design "document" in the [README.md](README.md) (this document, in the section [Designs](#designs)).

2. The design "document" should follow the _problem-solving tips_ in the [mini-project page](https://makecode.microbit.org/courses/csintro/miniproject).

3. The design "document" should have at least the following sections: Goal, Design process, and JS Language Constructs & Objects. Articulating clearly your engineering work is a key professional skill.

## Resources

### micro:bit 

1. [micro:bit lessons](https://makecode.microbit.org/lessons).

2. [micro:bit ideas](https://microbit.org/ideas/).

3. A list of some more [advanced projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects).

4. The [projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects) at the [awesome micro:bit list](https://github.com/carlosperate/awesome-microbit).


### JavaScript

1. Technically, the language which is used side-by-side with Blocks in the Makecode environment is a subset of [TypeScript](https://makecode.com/language), which itself is a superset of JavaScript (technically, [ECMAScript](https://www.ecma-international.org/ecma-262/10.0/index.html#Title)), with some JS features not implemented in Makecode.

2. The limited [JavaScript mini-tutorial](https://makecode.microbit.org/javascript) in Makecode. Make sure you read it but that can't be your only reference.

3. Official [TypeScript documentation]():
   1. TypeScript in 5 min [tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). _**Highly recommended!** You will need to [download](https://www.typescriptlang.org/index.html#download-links) and install an integrated development envinronment (IDE). The two that I recommend are Visual Studio Code from Microsoft and WebStorm from JetBrains._
   2. The full documentation and reference is under _Handbook_. Bear in mind that you are drinking from the hose. Don't be surprised if not everything is presented in a strictly incremental manner.
   
4. In-browser TypeScript [playground](https://www.typescriptlang.org/play/index.html). Note that micro:bit specific code will not run, but you can still play. _Start making the distinction between a generic multi-purpose programming language (TypeScript) and functionality (libraries, objects, etc.) that is specific to a particular device (micro:bit), though written in the same programming language._

5. A pretty good and very palatable JS tutorial with in-browser coding, by [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript).

6. Extensive and detailed [JS tutorial](https://javascript.info/), with some advanced material thrown in. _**I like this one!**

7. The most authoritative JS resource on the Web, including tutorials and reference, by [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

---

## Tags

### v0.2

**Buttons A and B trigger simple animations [file](section-2.js)**

### v0.3

**Buttons A and B cause fibonacci series to count up or down [file](section-3-Phi-Counter.js)**

### v0.4

**shaking Microbit answers question, should I, Marry, F#ck, Kill [file](section-4-f#ck-marry-kill.js)**

### v0.5

**buttons A triggers a pinwheel animation [file](section-5-spinner.js)**

### v0.7

**buttons A and B cause random pixels to illuminate[file](Section-7-led-random.js)**

### v0.8

**creates some odd conditions on whether leds will light or not dependind on order and combination of button presses [file](section-8-booleanish.js)**

### v0.9

**exactly like the section activity, did not use blocks  [file](section-9-unmodified)**

### v0.10

**went through activity. did not create file**

### v0.11

**was able to complete correct ball animation using arrays [file](section-11-bounce-arrary.js)**

## Designs



### Midterm project

_**Note:** Add your project designs below._

#### Goal

**My goal is to create a simple game mechanic. A bouncing sprite named "ball" shall bounce with good animation. It will traverse left and right as seen by the ground moving beneath. The ball will constantly bounce off of the ground, which will be the bottom row of LEDs illuminated. Super Goal: As the ball moves to the right holes will appear in the ground which one must avoid.**

#### Design process

**In trying to create a good bounce loop the key is to have movement up and down follow the timimg of a parabala. Or said another way the ball/sprite needs to move from fast to slow back to fast before it 'hits' the ground. I could do this in several ways. In traditional animation I would move the sprite one grid point at a time and choose the time between each move by hand. What I want to do here instead was to do it procedurely using for loops and some math. **

#### JS Constructs & objects

**The process for this is to:
-use the count of the for loop
-take the count multiply it by itself. i.e. count=1,2,3,4 result=1,4,9,16
-take the result and multiply it by a delay time, say 14ms
this was i can control the overall timing by just adjust the single delay time, instead of a bunch of individual delays.

So far I've gotton it to work on the way up, but it needs to reverse for the way down.
I think I need to create two states. an Up and a Down state and flip between the two to get the correct result.**

### Final project

#### Goal

**My goal is to create a working game. There should be 3 processes.
1) have ball bounce on hitting button A (completed)
2) procedurally create a gound of varying brightnesses that moves left as you press button B
3) the ground will randomly create 'open' spaces (zero brightness) that if the ball bounces into these spots it will be game over

#### Design process
With the bouncing animation working in one JS file already I began creating the procedural ground program in a seperate file.
For the ground I imagined the bottom 5 pixels being the ground. To percieve movement of the ground I realized I needed to create a variation of brightnesses of the pixels to begin with, then shift those pixels to the left. The eye will track the shifting and percieve it as movement. I didn't want to hand program each new pixel in the ground as it appeared, so I set up an array which had an element was constanly being added to at the end when button B was pressed, while also deleting element 0. The new Element randomly chooses 1 of 5 values of brightness including 0. If 0 is chosesn then theres's 'no' ground and the ball if it lands on that spot will be game over.

#### JS Constructs & objects
-arrays within arrays
-generating random values that then select array elements
