# Pet Dating App

**Joseph Kaufman**<br />
**Computer Systems and Information Sciences**<br />
**Prof. Henderson**<br />
**May 2023**<br />

## I. Statement of Purpose
In the ideal world, potential adopters could adopt a cat or a dog without the concept 
of an animal they don’t choose being euthanized. However, this is not the case. Around 
1.5 million animals are put down in shelters each year. Many of these animals are 
capable of being a fantastic pet, but shelters are full and need to make room for 
incoming animals. In order to combat this, I propose that a pet adoption app is 
created that is catered towards younger generations. With an ever increasing size 
of the internet and the popularity of apps like Tik Tok, this generation is not 
being accounted for as much on the adoption scene. Tik Tok has approximately 
[100 million](https://www.nbcnews.com/politics/congress/tiktok-now-150-million-active-users-us-ceo-tell-congress-rcna75607) 
regular American users. The pet adoption app will help drive demand by 
showing animals in ways that are addicting and easy to learn. Even though animal 
euthenasia is high, fighting it by using apps could decrease that number to more 
modest numbers.

## II. Research & Background
### **UX Design**
#### Figma
[Figma](https://www.figma.com/) is powerful software used to create elegant user interfaces. It is used by Airbnb, Spotify, Uber, and many more 
[companies](https://8designers.com/blog/what-big-companies-use-figma#:~:text=It's%20no%20wonder%20companies%20like,for%20businesses%20of%20all%20sizes.).
Figma is used by dragging and dropping layers onto a screen. This
simplicity of use enabled me to develop a user interface very rapidly.
#### Principles
UX design follows a few [key principles](https://uxplanet.org/mobile-ux-design-key-principles-dee1a632f9e6):
1. Simplicity
2. Make Buttons [42-72 pixels](https://uxmovement.com/mobile/optimal-size-and-spacing-for-mobile-buttons/#:~:text=The%20highest%20accuracy%20was%20found,the%20middle%20of%20the%20range.)
3. Place Buttons [Near Thumb](https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php)
4. Use Buttons for Data Validation
5. Simple Onboarding

### **Dating App Key Features**
#### Filtering
Although filters can vary from app to app, [Bumble](https://bumble.com/), [Tinder](https://tinder.com/), and [Hinge](https://hinge.co/) allow users to filter by 
age, sexual orientation, and distance. This helps users eliminate those they are not likely to 
match with and only shows profiles within their preferences. Bumble and Hinge have many more filters
which can range from fun questions to lifestyle questions.
#### Swiping
Swiping is a staple of dating apps popularized by Tinder.
A user is shown another user's profile. Here they have the choose to either swipe left or swipe 
right. Swiping left hides the profile. Swiping right likes the profile.
#### Matching
If two users swipe right on each other's profile, they match. The app will notify users and 
now...
#### Chatting
They can start messaging one another. Bumble adds a little twist to this common feature.
On the app, [only women are allowed to start chats](https://bumble.com/en/help/how-does-messaging-work-on-bumble#:~:text=Keep%20in%20mind%20that%20on,to%20lock%20in%20your%20connection.). This helps to seperate it from most other dating apps.

### **Dating App Algorithms**
#### Elo Rating
The first algorithm that dating apps employ is called the Elo Rating.
[Elo Ratings](https://www.chess.com/terms/elo-rating-chess) were originally created to show the rankings of chess players.
The higher the elo rating the higher the chance of them beating their opponent.
On dating apps, these scores are used to determine the [chances of being swiped right on](https://www.theverge.com/2019/3/15/18267772/tinder-elo-score-desirability-algorithm-how-works).
In other terms, it is an attractiveness rating. The goal of the app is to get the user
hooked as soon as possible. They show the user the most attractive users on the platform,
inflating the percieved number of attractive users.
Attractiveness ratings have received a lot of questions regarding its ethics.

#### Similarity Algorithm 
Once the app has a little more data on a particular user, the app is able to implement a 
Similarity Algorithm. These algorithms tailor better to the individual preferences of users.
They serve as predictive algorithms that look at your swipe history and who similar users have
liked in the past. Let's use John and Greg to help explain.
* John likes Sarah, Jane, and Leah.
* Greg likes Sarah and Jane. 
Who is should Greg be shown next? Greg should be shown Leah. 
Although similarity algorithms are more complex, this helps give a foundation for how they operate.

### **Petfinder**
[Petfinder](https://www.petfinder.com/) is a pet adoption website that has been around since 1996.
It is the most poopular pet adoption app and has 14,000 animal shelters throughout North America. They are owned by Purina and make revenue via ads placed on their website. The main premise is to allow users to look up animals on the site. They can search by breed, age, energy, coat, location, and a variety of other factors. 

### **Common Mobile Languages**
The ideal language for this application would be:
* 1. Multiplatform
* 2. Low Learning Curve
* 3. Performant
* 4. Size
#### Angular Mobile UI
A [Google language](https://angular.io/) that is adaptable and multiplatform. However, it is a bit clunkier on the size
and its learning curve is fairly high so this is not a good option for the project.
#### Swift
[Swift](https://swift.org/) is an easy to learn programming language created by Apple. 
It is compatible with IOS devices, but lacks the ability to be cross platform. There are better options out there
than Swift.
#### Vue
[Vue](https://vuejs.org/) is a Javascript framework that is [lightweight, quick](https://jelvix.com/blog/js-frameworks-is-vuejs-better-than-react#:~:text=Vue%20is%20faster%20and%20smaller,therefore%2C%20finding%20hires%20is%20faster.) and cross platform. 
However, it lacks a large amount of documentation and libraries for more complex apps. 
#### React Native
React Native seems like the perfect compromise between speed, performance, learning curve, and size. It is relatively lightweight, fairly perfomant, cross platform, and I have backround in React which will make this slightly easier to use than the other frameworks.
### **Common Mobile Databases**[label](https://sqlite.org/index.html)
#### SQLite
[A simplified version of SQL](https://sqlite.org/index.html) catering to Mobile apps. It has the basic features of SQL, but information is stored locally on a mobile app. The datatypes are simplified to [NULL, INTEGER, REAL, TEXT, and BLOB](https://www.sqlite.org/datatype3.html). With Expo this is not compatible because Expo is a cross-platform compiler that is loaded through the cloud. Each time the app reloads the database for the app itself will reload.
#### Firebase
[Google database](https://firebase.google.com/) that offers a free server and database through the cloud. It is a NoSQL solution and simplifies the process of conncecting servers and a backend. Some functionality is highly limited, especially in regards to quering. Another big issue is in regards to the free services running out when the app hits a certain usage level. Another major issue with firebase is that it cannot be converted over to SQL easily. However, due to it's ease of use and free/quick set up this is the best free compromise.

### Cross-Platform Development
For applications it has become more common place to create a single application that can be used on multilpe 
operating systems. This can [save costs](https://www.vizteck.com/post/cross-platform-app-development-costs-how-much-you-save) overall by preventing maintenance of identical systems with different 
languages. There are some drawbacks to this. Although some languages are relatively universal, [native
functionalities are not](https://www.appschopper.com/blog/pros-cons-cross-platform-mobile-app-development/). These need to be accounted for in addition to your code itself. This can involve
[permissions](https://docs.expo.dev/guides/permissions/) or different calls to native functionalities with different commands depending on operating system.
This can leave issues only discovered during testing. 

[IOS](https://www.apple.com/ios/ios-16/) is Apple's mobile operating system and [Android](https://www.android.com/) is Google's mobile operating system. Each of these
systems have their own app stores. IOS is a little harder to get an app. The app is required to 
be cross-compaptible with all of Apple's mobile devices including their Ipads. Apple also has a 
[strict review process](https://developer.apple.com/ios/submit/) that makes it much harder to get into the app store. 
Google is [much easier to upload apps to and it requires a one-time paid account](https://support.google.com/googleplay/android-developer/answer/9859152?hl=en).

## III. Project Languages, Software, and Hardware
### Project Languages
* [React Native](https://reactnative.dev/)
* [JavaScript](https://developer.oracle.com/languages/javascript.html)
### Project Libraries
* **Node Package Manager**
  * [react-tinder-card](https://www.npmjs.com/package/react-tinder-card)
  * [expo-location](https://docs.expo.dev/versions/latest/sdk/location/)
  * [react-native-dropdown-picker](https://www.npmjs.com/package/react-native-dropdown-picker)
  * [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
  * [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
  * [@react-native-community/hooks](https://www.npmjs.com/package/@react-native-community/hooks)
  * [@miblanchard/react-native-slider](https://github.com/miblanchard/react-native-slider)
  * [@reduxjs/toolkit](https://redux-toolkit.js.org/)
  * [react-redux](https://react-redux.js.org/)
* **Google Firebase**
  * [Firestore Database](https://firebase.google.com/docs/firestore)
### Additional Software Needed
* [Expo Go](https://expo.dev/client)
* [Expo](https://expo.dev/)
### Hardware
* Iphone 11 (Mac OS)
* Windows PC
 
## IV. Project Requirements

## V. Project Implementaiton, Description, and Explanation

## VI. Test Plan

## VII. Test Results

## VIII. Challenges Overcome

## IV. Future Enhancements

## 

## Terms of Use
Joseph Kaufman is the creator of this application and any use, 
copying of source code, or modificaiton of the document without 
consent is prohibited. Professor's may use the demo, UI screenshots, or run the app.
They are prohibited from sharing the source code.
