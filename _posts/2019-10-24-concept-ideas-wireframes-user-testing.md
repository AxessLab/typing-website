---
layout: post
title:  Concept ideas, wireframes & user testing
date:   2019-10-24 09:30:22 +0200
image:  blog4/image23.png
author: Sofie Hansson
---

It was time to go from problem [read the previous blog post][previous_post] to solution and therefore we created wireframes of the concept. We chose one question that we felt we haven’t got the answer yet, which is:

> How can we create an inspiring product that motivates the user to learn the keyboard while having fun?

## Design studio workshop
We gathered the whole project team to have a design studio workshop, everyone joined and we were 8 people in total with different roles and perspectives on the project. Two people in the project group also has a visual impairment and therefore expert knowledge about typing tutors.

<div class="row">
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image1.jpg" alt="The project team sitting by their desk." class="img-fluid rounded w-100">
  </div>
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image2.jpg" alt="Hampus, Karin and Erik talking and sketching." class="img-fluid rounded w-100">
  </div>
</div>

We did three different exercises in pairs and built on each other's ideas for typing in the dark. At the end we chose the idea that most people felt that we wanted to move forward with.

<div class="row">
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image3.jpg" alt="Emilia skyping with Daniel" class="img-fluid rounded w-100">
  </div>
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image4.jpg" alt="Joakim skyping with Claudio." class="img-fluid rounded w-100">
  </div>
</div>

It was a ninja game that had a storytelling and a level based game. First you chose a ninja you train the character at the gym like Pokemon go. After that you go into a dark cave and there you get a challenge if you do the challenge well you can get different grades of karate belts from red to black. So this is a hypothesis we wanted to move forward with the gamification in combination with a logical way to learn.

<div class="row">
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image5.jpg" alt="Whiteboard with paper sketched" class="img-fluid rounded w-100">
  </div>
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image6.jpg" alt="Paper sketches of ninja game." class="img-fluid rounded w-100">
  </div>
</div>

## Concept
The concept is built on the research about how to learn the keyboard in a pedagogical way, based on the market analysis and interviews with people how has taught kids to type on a keyboard.

### Step by step learning
<ol>
  <li>
    <div>
      <strong>Interaction with the keyboard.</strong>
      <p>
        Just beginning to interact with the keyboard without right or wrongs or just pressing buttons is a really important step to motivate the user to begin to learn. Otherwise this can be a bit of a resistance, so this step is important for beginners to find it fun and intriguing to continue.
      </p>
    </div>
  </li>
  <li>
    <div>
      <strong>Placement of the fingers row 0.</strong>
      <p>
       This is the first step to learn the keyboard starting with F and J because the are marked on the keyboard. This is a starting point to navigate the keyboard without having to look at it. Then you continue with that row also called row 0.
      </p>
    </div>
  </li>
  <li>
    <div>
      <strong>Placement of the fingers row +1 and -1.</strong>
      <p>
        These are the rows above and under row 0. If you can navigate from row 0 to +1 and -1, know which finger to use on what letter you can be faster and more accurate while typing on a keyboard. This also means you don’t have to look at the keyboard. So placement of the fingers are the most important step.
      </p>
    </div>
  </li>
  <li>
    <div>
      <strong>Words and sentences.</strong>
      <p>
        The users wants to quickly start typing easy words to make the task more fun. It’s more motivating to type words instead of just pressing buttons. This could go over to more advanced words and sentences when you are more of an expert.
      </p>
    </div>
  </li>
  <li>
    <div>
      <strong>Speed.</strong>
      <p>
        Users are motivated by being able to type faster and more correct as the progress in their learning. This is why the next step is to measure the speed and being better at that.
      </p>
    </div>
  </li>
</ol>

With these steps to learn in mind we found inspiration from a tool that is used to learn eye tracking. From Look to learn that use 5 areas of learning eye tracking, created by Tobii Dynavox, read more [Look to Learn][look-to-learn].

So this is the ground that we wanted to build a gaming experience on, with a ninja theme. Taking inspiration from common and populaire games like the candy crush saga where you level up in visualisation of a path. When everyone is starting on the easiest level continuing to more advanced levels.

## Wireframes
We started by drawing simple sketches on paper, where we began with the core interaction. This is where user gets to know which letter or word the are supposed to write, in our prototype we started with f and j. Then we made prototypes in [Adobe XD][adobe-xd].

![Design of challenge 1, print screen.][image7]{:class="img-fluid w-100 rounded float-left mr-5 mb-4"}

The challenges are that there are sound feedback that needs to happen in this interaction. First there needs to be a text to speech that reads the letter the user is supposed to write. Then a sound if it was right or wrong and third the letter that the user actually wrote. At the same time we need to think about if the user has a screen reader on and if the text to speech and screen reader will be colliding saying the same things creating an echo that is not pleasten for the user. We will write a blog post about sound interaction only for this project, as it is very complex.

![Design of challenge 1 F and J, print screen.][image8]{:class="img-fluid w-100 rounded float-left mr-5 mb-4"}

We also need to have visualisation on the screen for those of us who can see and are using a zoom tool. So in a simple interaction pressing one letter on the keyboard a lot of things needs to be considered.

![Design of challenge 1 F and J, print screen.][image9]{:class="img-fluid w-100 rounded float-left mr-5 mb-4"}

This was the first challenge for the developers to make and finding and adding sound resources to the prototype, both text to speech but also sound effects.

Then we wanted to add the first step with integrating with the keyboard without being right or wrong, so we added the Ninja theme. First of with an introduction to the game. After that choose your character by using arrow up and down and pressing enter. Which are important keys to learn because people using a screen reader often use these buttons to navigate.

Pressing enter to start the games and different missions are also important because if you have a visual impairment, you won’t you the mouse only the keyboard.

<div class="row">
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image10.png" alt="Design of introduction, print screen." class="img-fluid rounded w-100">
  </div>
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image11.png" alt="Design of choosing character, print screen." class="img-fluid rounded w-100">
  </div>
</div>

<div class="row">
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image12.png" alt="Design of training character, print screen." class="img-fluid rounded w-100">
  </div>
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image13.png" alt="Design of challenge 1 done, print screen." class="img-fluid rounded w-100">
  </div>
</div>

## Iteration
To be able to test the prototype in a realistic way with users it needs to be developed because the prototyping tools doesn't give sound feedback, only visual. So the next step was to add more details to the prototype with ninja theme and sounds, to be able to test it with users.

### Interaction with the keyboard
We added more content to the prototype and a path to the different levels.

<div class="row">
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image14.png" alt="Design of introduction, print screen." class="img-fluid rounded w-100">
  </div>
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image15.png" alt="Design different challenges, print screen." class="img-fluid rounded w-100">
  </div>
</div>

We added characters with short descriptions of how they look as image description, so the user could choose the one they like.

<div class="row">
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image16.png" alt="Design of choosing character, print screen." class="img-fluid rounded w-100">
  </div>
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image17.png" alt="Design of choosing character, print screen." class="img-fluid rounded w-100">
  </div>
</div>

We added a step to train you ninja, so when the user is pressing different buttons they just make different sounds like boxning or sword sound effects. This is important as a first step of just interacting with the keyboard and having fun. After this training of the ninja character, they get a yellow belt in karate as a reward to keep the user motivated to get more belts.

<div class="row">
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image18.png" alt="Design of training character, print screen." class="img-fluid rounded w-100">
  </div>
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image19.png" alt="Design of character ready, print screen." class="img-fluid rounded w-100">
  </div>
</div>

### Placement of fingers row 0.
The step after that they go in to the core interaction as challenge 1 with finding and using F and J. So that we follow the concept of learning we have set up. We also got feedback from a user with a visual impairment using a zoom tool the have the input field and the letter you’re supposed to write at the same place, so we changed that visualization.

<div class="row">
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image20.png" alt="Design of introduction challenge 1, print screen" class="img-fluid rounded w-100">
  </div>
  <div class="col-md-6 col-xs-12">
    <img src="{{site.baseurl}}/assets/images/blog/blog4/image21.png" alt="Design of challenge 1, print screen." class="img-fluid rounded w-100">
  </div>
</div>

In this project we want to focus on the first steps of interacting with the keyboard because our primary target group are beginners. So step 3, 4 and 5 haven’t in this phase been explored yet.

## User testing
Now that we had a concept and some developed parts of the prototype that both had keyboard interactions, sound feedback and content we wanted to try it with a user of our target group. So we met with a 10 year old boy in 4th grade who just started to learn how to type on a keyboard.
Here’s an image of his laptop he uses in school with some stickers on some of the buttons like f, j shift for example and a braille display he can read and write with.

![Laptop, braille display and a white cane on a table.][image22]{:class="img-fluid w-100 rounded float-left mr-5 mb-4"}


In the user test we tried the concept, interactions and sound feedback from start, choosing ninja, training ninja and the first challenge with F and J.

### Summary of the user test
The things that work well are the ninja theme, the user like the theme and thinks it’s fun and different from other typing tutor games. He understands the concept of training the ninja and sound feedback is enough. He feels motivated to want to get better and wants the black belt in karate as something he wants to accomplish. So the overall concept of gaming, missions, reward and ninja theme works well with this user.

Some things that can be improved is the timing of the sound, text to speech and some navigation. It is sometimes hard to know when then exercise starts and ends. The user realise when he press the wrong button at the f and j interaction and quickly press the right button so for this user  he wouldn’t need a wrong indication feedback on this first level.

We asked if he had an idea of what would be a fun challenges after this level and he said that it would be nice to write words, maybe talking to another ninja. Also the whole alphabet is a fun mission to do and learn. So mostly something with letters or words in a fun context.

![Hands on a keyboard.][image23]{:class="img-fluid w-100 rounded float-left mr-5 mb-4"}


[adobe-xd]: https://www.adobe.com/products/xd.html
[look-to-learn]: https://www.tobiidynavox.com/software/partner-software/look-to-learn/
[previous_post]: {{site.baseurl}}/2019/10/17/defining-the-challenges-and-setting-goals-that-creates-value-for-the-user/
[image7]: {{site.baseurl}}/assets/images/blog/blog4/image7.png
[image8]: {{site.baseurl}}/assets/images/blog/blog4/image8.png
[image9]: {{site.baseurl}}/assets/images/blog/blog4/image9.png
[image22]: {{site.baseurl}}/assets/images/blog/blog4/image22.jpg
[image23]: {{site.baseurl}}/assets/images/blog/blog4/image23.png


