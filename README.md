# Pet Dating App

**Joseph Kaufman**<br />
**Computer Systems and Information Sciences**<br />
**Prof. Henderson**<br />
**May 2023**<br />

## Terms of Use
Joseph Kaufman is the creator of this application and any use, 
copying of source code, or modificaiton of the document without 
consent is prohibited. Professor's may use the demo, UI screenshots, or run the app.
They are prohibited from sharing the source code.

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
  * [react-tinder-card](https://www.npmjs.com/package/react-tinder-card): used for card swipe animation.
  * [expo-location](https://docs.expo.dev/versions/latest/sdk/location/): gets the location of the user.
  * [react-native-dropdown-picker](https://www.npmjs.com/package/react-native-dropdown-picker): used for breed dropdowns.
  * [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/): uses native functionalities to access camera roll.
  * [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/): used for gradient at bottom of pet cards.
  * [@react-native-community/hooks](https://www.npmjs.com/package/@react-native-community/hooks): used to get access native keyboard.
  * [@miblanchard/react-native-slider](https://github.com/miblanchard/react-native-slider): used in max distance slider.
  * [@reduxjs/toolkit](https://redux-toolkit.js.org/): accessory tool to simplify react redux.
  * [react-redux](https://react-redux.js.org/): global state management tool for JavaScript applications.
* **Google Firebase**
  * [Firestore Database](https://firebase.google.com/docs/firestore): free database hosted hosted through the cloud.
### Additional Software Needed
* [Expo Go](https://expo.dev/client): mobile IOS app that connects to Expo to loads compiled code through cloud.
* [Expo](https://expo.dev/): additional software that enables native development and compilation without native code.
### Hardware
* Iphone 11 (Mac OS)
* Windows PC
## IV. Project Requirements
<table>
  <tr>
    <th>ID Number</th>
    <td>1</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Function</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Users will be shown pets once logged in. This will entail information such as name, age, description, and medical status.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>This information is vital for potential adopters to know.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>When a pet is shown, the above information will be available to users</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>High</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>None</td>
  </tr>
</table>
</br>

<table>
  <tr>
    <th>ID Number</th>
    <td>2</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Function</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>User will be able to swipe left or right on pets.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>Key functionality of most dating apps.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>Pet cards can be swiped left or right when finger is dragged upon it.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>High</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>1</td>
  </tr>
</table>
</br>

<table>
  <tr>
    <th>ID Number</th>
    <td>3</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Functional</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Pet is saved to liked pets when swiped right upon.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>Users need to be able to see saved pets and access them for future reference.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>Liked pets appear in the liked pets page.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>High</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>2</td>
  </tr>
</table>
</br>

<table>
  <tr>
    <th>ID Number</th>
    <td>4</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Functional</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>When pet is swiped left upon it is no longer shown.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>Pet has already been seen and should be moved.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>Pet is no longer in view and the user does not see it.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Medium</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>2</td>
  </tr>
</table>

<table>
  <tr>
    <th>ID Number</th>
    <td>5</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Functional</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>When on a liked pets page, users will be able to tap on pet and see information regarding pet name, description, and age.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>Seeing extra information is key to help the user decide further upon concrete information.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>When user taps on bottom banner, more information regarding the pet will appear.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Medium</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>1 & 2</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>6</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Usability</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Animal Shelters and Regular users will be able to communicate over messaging.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>In order to arrange adoptions, it is vital to first establish contact with the shelter.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>When a message is sent via messaging, it appears in the recipients inbox.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Medium</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>None</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>7</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Functional</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Animal Shelters will be able to upload animals with the following information: name, age, activity level, description, and price.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>Relevant information for interested parties.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>Animals have information easily accessible when viewed.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Medium</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>None</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>8</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Functional</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Animal shelters will be able to add animals to the cat or dog section.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>You can’t see pets if you can’t upload them.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>Shelters are able to upload pets.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>High</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>7</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>9</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Functional</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Animal shelters will be able to preview their pets and see information as regular users would see.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>Helps animal shelters know see what potential adopters will see.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>View is relatively the same as what adopters can see.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Medium</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>7 & 8</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>10</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Functional</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Users will be able to tap through photos and see each photo of the pet.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>Helps get a more well rounded idea of what the pet looks like.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>User taps on the right to see the next image. Users taps on the left to see the previous image.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Medium</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>7 & 8, 2 & 3</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>11</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Functional</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Users will be able to filter pets based on size, age, breed, housetrained, cat friendliness, dog friendliness, or kid friendliness.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>Helps users get to pets they are more likely to adopt.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>When filter is active, pets reflect the choices.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Medium</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>None</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>12</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Look and Feel</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>The primary theme of the app will consist of green resting upon a light background.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>Consistency helps an app look professional.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>No major changes in theme across pages.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Medium</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>None</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>13</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Functional</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Animal shelters will be able to upload photos from their device onto the app.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>Helps shelters upload animals quicker after taking photos.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>Photos on App reflect those uploaded.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Medium</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>None</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>14</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Usability</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>The user will never be more than 3 clicks away from any main screen.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>Makes the app easier for users to click through.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>Self explanatory</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Medium</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>None</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>15</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Performance</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Pet cards will load in under 5 seconds when the user first logs into the app.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>No one wants to use an app that takes a long time to load.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>Self explanatory</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Low</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>None</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>16</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Usability</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Users under 30 can figure out how to navigate the app in under 5 minutes</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>With apps, you only have a short amount of time to win over users for them to continue use.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>After 5 minutes, the user can get to the home screen in under 20 seconds.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Low</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>None</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>17</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Usability</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Creating an account takes under 5 minutes.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>The more steps it takes to create an account, the more unlikely the user will do it.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>User can quickly and efficiently create an account in less than 5 minutes.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Medium</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>None</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>18</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Usability</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Users can use biometrics to login.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>It’s a faster and more efficient way to sign into an account.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>Face-Id pops up on the Iphone whenever a user signs in. This will give them their password and username.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Low</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>None</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>19</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Functional</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Users can save at least 10 liked pets.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>Important for later viewing and sharing, as well as contacting animal shelters.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>Swipe right on 10 pets, 10 pets appear in their liked pets./</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Medium</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>2 & 3</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>ID Number</th>
    <td>20</td>
  </tr>
  <tr>
    <th>Type</th>
    <td>Functional</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Animal shelters can create at least 20 pets.</td>
  </tr>
  <tr>
    <th>Rationale</th>
    <td>Animal shelters have numerous pets, they need to be able to upload them.</td>
  </tr>
  <tr>
    <th>Fit Criterion</th>
    <td>20 pets are stored on the app.</td>
  </tr>
  <tr>
    <th>Priority</th>
    <td>Medium</td>
  </tr>
  <tr>
    <th>Dependencies</th>
    <td>None</td>
  </tr>
</table>
</br >

## V. Project Implementaiton, Description, and Explanation
### Sign Up Page
#### Implementation
(Sign Up Page Screenshot Here)
#### Description
Sign Up page allows adopters and animals shelters to create accounts.
#### Explanation
The page is relatively straight forward. Both screens are relatively the same except that animal shelters are required to enter in their address. Aside from that, users are required to enter in their name, email, and password. This ensures that pets are saved to the database with the correct information.

### Log In Page
#### Implementation
(Log In Page Screenshot)
#### Description
Users can log in by entering their email and password. If the account exists then they will be pressented with the Animal Shelter Pets screen or the Find Pets screen depending on their permissions.
#### Explanation
This page is key in storing user information and assigning them to their proper pages. It makes the logging in process seamless and provides the users the same experience with loggin ing.

### Find Pets Page
#### Implementation
(Screenshot)
#### Description
Potential adopters will be presented with pets they can choose from here.
#### Explanation
Animals will be shown based upon filters set in the filter page. From there the shelter can swipe left of right on a pet. Swiping left signifies that they are hiding the pet. Swiping right signifies that they are saving the pet. In addition to swipe functionality there are various buttons the user can press. If the user presses the << symbol, the previous swipe is undone. If the user taps on the chat icon, the user opens a chat with the animal shelter. If the user taps on the heart button, the pet is liked and it autoswipes for the user. 

At the top right of the pet card there are picture progress dots. They show which picture in the selection the user is on. They can tap on the right side of the photo to show the next photo. If they tap on the left side it shows the previous pet. If the user decides to tap on the animal's name, it will display more information about the pet.

### Filter Pets Page
#### Implementation
(Screenshot)
#### Description
Users can filter what pets they see based upon certain criteria.
#### Explanation
Users will be able to filter pets by:
* Age
* Breed
* Weight
* Price
* Size
* Distance
* Coat
* Friendly with dogs, cats, kids
* Housetrained Status

By tapping on various buttons the user can select what criteria they would like to set for a pet they are searching for.

### Liked Pets Page
#### Implementation
(Screenshhot)
#### Description
After a pet is liked, they will be able to see it in their liked pets page.
#### Explanation
Inside this page, a user can start messaging shelters, review information on their liked pets,
and unlike the pets. This information is vital in the decision process of whether or not
the pet will be a fit in a home. This gives users the opportunity to unsave a pet to narrow down their
search.

### Messaging Page
#### Implementation
(Screenshot)
#### Description
Users and animals shelters are able to send messages back and forth.
#### Explanation
Users are able to tap on certain chats where they can send messages. Once inside of the chat they can
see previous messages. Animal Shelters are not permitted to start chats, but potential adopters are.
A user has a list of recently liked pets where they can start chats with the pets.

### Animal Shelter Pets Page
#### Implementation
(Screenshot)
#### Description
Animal Shelters will be able to tap between a dogs and cats page showing all of their pets.
If they tap on a specific pet, they will be able to see a preview of that pet. Animal shelters can also add pets from this page.
#### Explanation
Animal shelters can see all of their pets on this screen. They can also tap and scroll around the page
to see all of their pets. 

### Add Pet Screens
#### Implementation
(Screenshot)
#### Description
Animal Shelters are able to add a new pet with specific information relating to the pet.
#### Explanation
They will be able to tap through each screen after adding required information.
After they have entered all the required information, they will be asked to upload
six photos of the pet.

### Pet Preview (Liked Pets and Animal Shelter Pets)
#### Implementation
(Screenshot)
#### Description
When a user clicks on a pet it will display the pet's information.
#### Explanation
A user will be able to see everything as is displayed
when it is in a pet card. The same funcitonality will
be present except for swiping aspects. This feature
is offered to shelters and regular users. However, 
animal shelter's buttons will not work for chatting
or liking a pet.

## VI. Test Plan
<table>
  <tr>
    <th>Page</th>
    <td>Log In</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>Iphone suggest email upon textbox tap</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
    <ol>
      <li>Sign in with the email “josephandrewkaufman@gmail.com” and password “password”.</li>
      <li>Tap on either the email or password textbox</li>
      <li>Iphone’s password manager should popup with suggested passwords</li>
      <li>Find the email “josephandrewkaufman@gmail.com” and tap it</li>
      <li>Use FaceID</li>
    </ol>
</td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>Textboxes are populated with the email “josephandrewkaufman@gmail.com” and password “password”.</td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>Same as expected</td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>None required</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td>Log In</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>Password Hide and Unhide</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td><ol>
    <li>Enter “Password123” into the password textbox</li>
    <li>Tap on the Eye icon</li>
    </ol></td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>
      <ol> 
        <li>Eye icon has strikethrough</li> 
        <li>The password “Password123” is visible in the textbox</li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>Same as expected</td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>None required</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td>Log In</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>Invalid Account Credentials</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
      <ol>
        <li>Type in the email “josephandrewkaufman@gmail.com”</li>
        <li>Type in the password “Password”</li>
        <li>Click the  Log In button</li>  
      </ol>  
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>Alert Popup: “Invalid credentials: please try again”</td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>Same as expected</td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>None required</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td>Log In & Animal Shelter</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>Logging in with Animal Shelter Account yields Animal Shelter Page</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
      <ol>
        <li>Enter the email “josephandrewkaufman@gmail.com”</li>
        <li>Enter the password “password”</li>
        <li>Click Log In</li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>A page with a similar format appears: (Screenshot 1)</td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>Same as expected (Screenshot 2)</td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>None required</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td>Log In & Find Pets</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>Logging in with Regular Account yields Find Pets Page</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
      <ol>
        <li>Enter the email “test@gmail.com”</li>
        <li>Enter the password “1234password”</li>
        <li>Click Log In</li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>A page with a similar format appears: (Screenshot 3)</td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>Same as expected: (Screenshot 3)</td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>None Required</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td>Sign Up</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>Cannot create an account with the same email.</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>Case 1: Create an Animal Shelter with the same email as an existing account
      <ol>
        <li>Input shelter name as “John Doe”</li>
        <li>Input email as “josephandrewkaufman@gmail.com”</li>
        <li>Input password as “test”</li>
        <li>Hit the Next Button</li>
        <li>Input street address as “Address”</li>
        <li>Input country as test</li>
        <li>Input zip code as 1234</li>
        <li>Click Sign Up</li>
      </ol>
      Case 2: Create an Animal Shelter with the same email, but different case as an existing account
      <ol>
        <li>Input shelter name as “John Doe”</li>
        <li>Input email as “Josephandrewkaufman@gmail.com”</li>
        <li>Input password as “test”</li>
        <li>Hit the Next Button</li>
        <li>Input street address as “Address”</li>
        <li>Input country as test</li>
        <li>Input zip code as 1234</li>
        <li>Click Sign Up</li>
      </ol>
      Case 3: Create a Regular User with the same email as an existing account
      <ol>
        <li>Input shelter name as “John Doe”</li>
        <li>Input email as “josephandrewkaufman@gmail.com”</li>
        <li>Input password as “test”</li>
      </ol>
      Case 4: Create an Regular User with the same email, but different case as an existing account
      <ol>
        <li>Input shelter name as “John Doe”</li>
        <li>Input email as “Josephandrewkaufman@gmail.com”</li>
        <li>Input password as “test”</li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>Case 1: receive popup “Email is already used, please use a different one.” </br>
        Case 2: receive popup “Email is already used, please use a different one.”</br>
        Case 3: receive popup “Email is already used, please use a different one.”</br>
        Case 4: receive popup “Email is already used, please use a different one.”
    </td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>Case 1: receive popup “Email is already used, please use a different one.” </br>
        Case 2: receive popup “Email is already used, please use a different one.”</br>
        Case 3: receive popup “Email is already used, please use a different one.”</br>
        Case 4: receive popup “Email is already used, please use a different one.”
    </td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>Initially failed Cases 2 and 3. Force lowercase on email inputs to prevent overlap due to case differences.</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td>Sign Up</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>Sign Up User Should not permit blank fields</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
    Case 1: Regular User
      <ol>
        <li>Don’t add any information for Sign up</li>
        <li>Click Sign Up </li>
      </ol>
      Case 2: Animal Shelter
      <ol>
        <li>Don’t add any information for Sign up</li>
        <li>Check the button “Register as an Animal Shelter/Breeder”</li>
        <li>Click Next Button</li>
        <li>Click Sign Up</li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>Case 1: Nothing happens </br>
        Case 2: Nothing happens
    </td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>Case 1: Nothing happens </br>
        Case 2: Nothing happens
    </td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>Initially failed Cases 2 and 3. Added statement to prevent error from occurring when text is not found.</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td></td>
  </tr>
  <tr>
    <th>Test</th>
    <td>Sign Up User</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
      Case 1: Regular User
      <ol>
        <li>Type “AddUserTest” as name</li>
        <li>Type “AddUserTest@gmail.com” for email</li>
        <li>Type “password” for password</li>
        <li>Click Signup</li>
      </ol>
      Case 2: Animal Shelter
      <ol>
        <li>Type “AddShelterTest” as name</li>
        <li>Type “AddShelterTest@gmail.com” for email</li>
        <li>Type “password” for password</li>
        <li>Check “Register as an Animal Shelter/Breeder.” box</li>
        <li>Click Next</li>
        <li>Type “Address” for address</li>
        <li>Type “Country” for country</li>
        <li>Type “1234” for zip code</li>
        <li>Click Signup</li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>Case 1: show the Find Pets screen </br>
        Case 2: show the Animal Shelter screen
    </td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>Case 1: show the Find Pets screen </br>
        Case 2: show the Animal Shelter screen</td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>Initially Case 2 fail: Firebase error when adding without information in address line 2.
        Removed bug for when no Address Line 2 is available
    </td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td>Password Hide and Unhide</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>
      Password Hide and Unhide
    </td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
      <ol>
        <li>Enter “Password123” into the password textbox</li>
        <li>Tap on the Eye icon</li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>
      <ol>
        <li>Eye icon has strikethrough</li>
        <li>The password “Password123” is visible in the textbox</li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>Same as expected</td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>None required</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td>Sign Up & Log In</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>Sign Up and Log In toggle works</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>Case 1: Tap on Log In Tab </br>
        Case 2: Tap on Sign up Tab
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>
      Case 1: Log In Tab is Bolded with Green underline and Sign up is grayed out </br>
      Case 2:Sign up tab is bolded with Green Underline and Log In is grayed ou
    </td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>Same as expected</td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>None required</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td>Animal Shelter Pets</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>Scroll when pets exceed size of page</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
    Case 1: Dog page
      <ol>
        <li>Add four or more pets to the dog page</li>
        <li>Use your finger to scroll</li>
      </ol>
    Case 2: Cat page
      <ol>
        <li>Add four or more pets to the dog page</li>
        <li>Use your finger to scroll to reveal the bottom half of the pets</li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>Case 1: be able to see all of the pets added upon scrolling </br>
        Case 2: be able to see all of the pets added upon scrolling
</td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>Case 1: be able to see all of the pets added upon scrolling </br>
        Case 2: be able to see all of the pets added upon scrolling
    </td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>None needed</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td>Animal Shelter Pets</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>Tap on a pet reveals an overlay/popup window</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
      Case 1: animal shelter dogs
      <ol>
        <li>Click on one of the pets</li>
      </ol>
      Case 2: animal shelter cats
      <ol>
        <li>Click on one of the pets</li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>Case 1 and 2: Screen should look similar: (Screenshot 4)</td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>(Screenshot 5)</td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>None needed</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td>Animal Shelter Pet Overlay</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>Exit button test</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
      <ol>
        <li>Click on exit button</li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>Animal Shelter Pets screen is shown again</td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>Animal Shelter Pets screen is shown again</td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>None needed</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td>Animal Shelter Pet Overlay</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>When a user taps off of the Pet Card at any point, the overlay and the Pet Card will disappear.</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
      <ol>
        <li>Tap anywhere outside of the Pet Card’s borders (green area depicted below) (Screenshot 6)</li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>Show animal shelter pets</td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>Show animal shelter pets</td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>None needed</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td>Animal Shelter Pet Overlay</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>Tapping on moves photo and updates progress bar</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
      Case 1: Right tap
      <ol>
        <li>Tap on right side of pet card photo (make sure not to touch near the info section on the bottom)</li>
      </ol>
      Case 2: Left tap
      <ol>
        <li>Tap on left side of pet card photo (make sure not to touch near the info section on the bottom)</li>
      </ol>
      (Screenshot 7)
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td>Case 1: show next photo and update progress bar to right </br>
        Case 2: show previous photo and update progress bar to left
    </td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td>Case 1 & 2 resulted as expected</td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td>None needed</td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td>Animal Shelter Pet Card Overlay</td>
  </tr>
  <tr>
    <th>Test</th>
    <td>More information when pet is tapped on</td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
      <ol>
        <li>Tap on the pet’s name at the bottom of the pet card</li>
      </ol>
      Male or Female (required)
      <li>Shown and visible with appropriate gender symbol</li>
      Pet’s breed (required)
      <li>Shows one or more breeds or the text (mixed)</li>
      Price (required)
      <li>A price is shown greater than or equal to $0</li>
      Weight (required)
      <li>Any weight above 0 lbs</li>
      Friendly With (required)
      <li>Shows Baby, Dog, and Cat icons with either a check or an x next to it</li>
      House Trained (required)
      <li>Says “House Trained” or “Not House Trained”</li>
      Energy (required)
      <li>Shows either:
        <li>“Sedentary Energy”</li>
        <li>“Low Energy”</li>
        <li>“Medium Energy”</li>
        <li>“High Energy”</li>
        <li>“Very High Emergy”</li>
      </li>
      Pet Description (optional)
      <li>May or may not contain text</li>
      
      Medical status 
      May or may not contain text
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td</td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td></td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td></td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td></td>
  </tr>
  <tr>
    <th>Test</th>
    <td></td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
      <ol>
        <li></li>
        <li></li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td</td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td></td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td></td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td></td>
  </tr>
  <tr>
    <th>Test</th>
    <td>
      <ol>
        <li></li>
        <li></li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td</td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td</td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td></td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td></td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td></td>
  </tr>
  <tr>
    <th>Test</th>
    <td>
      <ol>
        <li></li>
        <li></li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td</td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td</td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td></td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td></td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td></td>
  </tr>
  <tr>
    <th>Test</th>
    <td></td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
      <ol>
        <li></li>
        <li></li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td</td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td></td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td></td>
  </tr>
</table>
</br >

<table>
  <tr>
    <th>Page</th>
    <td></td>
  </tr>
  <tr>
    <th>Test</th>
    <td></td>
  </tr>
  <tr>
    <th>Test Steps</th>
    <td>
      <ol>
        <li></li>
        <li></li>
      </ol>
    </td>
  </tr>
  <tr>
    <th>Expected Results</th>
    <td</td>
  </tr>
  <tr>
    <th>Actual Result</th>
    <td></td>
  </tr>
  <tr>
    <th>Changes Made</th>
    <td></td>
  </tr>
</table>
</br >

## VII. Test Results

## VIII. Challenges Overcome

## IV. Future Enhancements
