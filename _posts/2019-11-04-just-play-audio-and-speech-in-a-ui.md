---
layout: post
title:  Just play audio? - audio and speech in a UI
date:   2019-11-04 15:30:22 +0200
image:  speech-icon.png
author: Erik Zetterström
---

Creating a user interface accessible for you is easy. Creating a user interface accessible by all is really, really difficult.

## Audio and text to speech in a user interface
![post-thumb]({{site.baseurl}}/assets/images/blog/blinded-icon.png){:class="img-fluid w-25 rounded float-left mr-3 p-3"}

There are many guidelines for how visual content should be designed to avoid excluding users, but there are few guidelines describing how audio content should be designed to avoid excluding users.

Some users will be distracted if there are too many things calling for their attention, audio can be very distracting. Other users prefer having content read to them in certain situations, while others require all content to be spoken. User testing in this project made these different needs very clear. Maybe there is room for more guidelines on these issues in WCAG, but that’s a whole other project.

## Web Speech and other TTS services
![post-thumb]({{site.baseurl}}/assets/images/blog/speech-icon.png){:class="img-fluid w-25 rounded float-right ml-3 p-3"}

In recent years the Web Speech API and other text-to-speech, TTS, services have made it much easier to provide users with spoken content. In Sweden, there is still one big obstacle left. Currently, Microsoft Windows does not ship with a Web Speech compatible Swedish voice.

For this reason we decided to use Google Cloud TTS. The Google Cloud TTS API returns an audio file with the spoken text back to your application. This file needs to be played by the browser, using an `<audio>` tag or the Web audio API.

## `<audio>`
The easiest and quickest way to play audio is to use the widely supported audio HTML-element. There are some limitations to take into account. Most crucial to beware of is the fact that you can’t just play audio whenever you like. During 2018 most web browsers decided to let the needs of the many outweigh the needs of the few by removing the possibility to autoplay audio. Audio is only permitted to play when a user has interacted with the web page.

![post-thumb]({{site.baseurl}}/assets/images/blog/ear-icon.png){:class="img-fluid w-25 rounded float-left mr-3 p-3"}

For most serious applications this is not a problem, but for some users, audio is the user interface. We are trying to design a user interface for all users. Regardless if they are using a screen-reader or not. So no audio playing, no interface.

I understand the reasons for disabling autoplay, having content play without your say can be really annoying. Sighted or not. The autoplay policy was also extended to include the Web Speech text to speech API. Making it even harder to play unwanted content, or in our case to play spoken instructions. A possible improvement to the current state of play would be to make it possible to ask for user consent to autoplay, just as you can ask for permission to use the camera or microphone.

Ideally, we would have liked to greet users on the start page, but due to the recent restrictions just mentioned, we had to compromise. Our start page is silent, we rely on users with screen readers to have it turned on and read the starting instructions.

Then we end starting instructions by saying something like “press enter to begin practice”, load the practice page and wait for the user to press enter, then audio playback can begin.

How do we stop the screen reader from conflicting with our interface on the practice page? We use `role=”application”`, but that’s a whole other blog post.

Please [try our prototype][prototype] (only in Swedish at the time of writing) and give us your feedback.



## Further reading
Google on the autoplay changes
[https://developers.google.com/web/updates/2018/11/web-audio-autoplay](https://developers.google.com/web/updates/2018/11/web-audio-autoplay)

Mozilla about Web Speech API - speech synthesis
[https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)

## Image attribution
[https://pixabay.com/illustrations/speech-icon-voice-talking-audio-2797263/](https://pixabay.com/illustrations/speech-icon-voice-talking-audio-2797263/)
[https://pixabay.com/illustrations/blinded-icon-private-icon-private-2797396/](https://pixabay.com/illustrations/blinded-icon-private-icon-private-2797396/)
[https://pixabay.com/illustrations/ear-icon-ear-hearing-ear-phenotype-2797533/](https://pixabay.com/illustrations/ear-icon-ear-hearing-ear-phenotype-2797533/)

[prototype]: https://typing-prod.herokuapp.com/



