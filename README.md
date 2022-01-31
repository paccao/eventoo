# Eventoo, the perfect way to plan, attend and discuss up and coming meetups with other people.

## Background
This project was a hand in assignment where our task was to make a modern web app with Typescript and TDD, test driven development. This was done using the npm package [Testing-Library](https://testing-library.com/) and [Jest-DOM](https://www.npmjs.com/package/@testing-library/jest-dom).

## Team members
- Kristofer @krispad-dev
- Adam @Adam-Bjurhede
- Joel P @paccao

## User stories
We began our project by defining a set of user stories to describe what the user will expect of the application. These helped us define test cases for the test driven development to represent the user stories but also to focus on what needed to be added to the MVP. Here is a list of all user stories we worked on in this project (in Swedish).

- Som gäst vill jag se en lista med Meetups så att jag får en överblick över vilka som finns tillgängliga.
- Som gäst vill jag kunna växla mellan att visa tidigare och kommande meetups så att jag får mer överskådliga vyer.
- Som gäst vill jag att meetups sorteras så satt de som kommer närmast i tid hamnar högst upp i sina respektive listor så att jag enkelt ser vilken meetup som inträffar först.
- Som gäst vill jag kunna se titeln och ämne för ett evenemang så att man snabbt får en bild av vad meetupen kommer handla om.
- Som gäst vill jag veta tid och plats för meetupen så att jag kan ta reda på om jag har möjlighet att ta mig dit.
- Som användare vill jag kunna söka på taggar för att filtrera meetups som intresserar mig.
- Som användare vill jag kunna välja en meetup i listan så att jag kommer till en sida med mer information om den meetupen.
- Som gäst vill jag kunna anmäla att jag ska gå på en meetup så att jag får en indikation på vilka jag är anmäld till.
- Som gäst vill jag kunna avanmäla mig från en meetup så att jag har möjlighet att ändra mig.
- Som gäst vill jag kunna diskutera meetups jag är markerad som anmäld till med andra så att jag kan ställa frågor och lämna feedback.
- Som gäst vill jag att meetups som jag är anmäld till visas i en egen lista högst upp på meetup sidan så att jag snabbt ser vilka jag är anmäld till.
- Som användare vill jag kunna välja arrangörsrollen så att jag får tillgång till arrangörsprivilegier.
- Som arrangör vill jag kunna skapa en meetup så att jag kan nå ut till besökare med information om eventet.
- Som arrangör vill jag inte att besökare ska kunna avanmäla/anmäla sig inom 1h före start av meetup för att kunna planera för hur många som kommer.
- Som arrangör vill jag kunna radera en meetup innan det har börjat så att jag kan ställa in om det behövs.

## Installation
1. This project was built with node.js version 16.13.0. Make sure you have the same version or anything above which generally works aswell by running the command `node -v` in a terminal on your system.
2. To download the required dependecies, make sure you have the package manager npm at version 8.1.3 or above by running the command `npm --version`
3. Now, run `git clone https://github.com/paccao/eventoo.git` in a desired path on your computer.
4. When that is finished, run `cd eventoo` or open the folder in your file explorer.
5. Inside of that path run: `npm install`, which will download the required dependecies for the project. This may take a couple of minutes.

Now you are ready to run the application.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
