
# Mission Control Application - Finsphera frontend challenge

This is a small Next.js Application, a challenge from Finsphera to evaluate development skills in it's development.


## Tech Stack

Next.js
Typescript
TailwindCSS



## API Reference

#### Get all Launches

This is the SpaceX REST API, an open source project available to get a good amount of information related to Rockets, Launchpads and many more, relevant to this project the Launches route, wich is used to display it's information in this project

```http
  GET https://api.spacexdata.com/v5/launches
```

#### Get upcoming launches

```http
  GET https://api.spacexdata.com/v5/launches/upcoming
```

#### Get past launches

```http
  GET https://api.spacexdata.com/v5/launches/upcoming
```






## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?


## Development

- Development for this project was challenging, started the project with the idea of building the general layout of the project first before working on the features, a good enought layout was built for the project with the most important component built was grid, this grid would display multiple card components that would display all the data.

- First roadblock encountered was the API, I was confused about the information displayed, and not all endpoints being updated to their latest, version.

- Initially getting the data from the API was a smooth experience, with the cards already setup inside the grid, I started getting good ideas on a more final design and started implementing the Modal component.

- Setting up a layout for the modal was quite a challenge with the Sidebar also being a challenge, it was quite some time since I last used Tailwind, so starting this project felt overwelming, this is also when I started finding difficulties with NextJs, and had to rely in proceduros more inline with React.

- Both these challenges ended up taking much of the development time, with the last one being getting data from the API in a more personalized way.

- My plan was to show first all the information available, this info would be cleaned a little noting that there was a small amount of entries in the API that showed many null values.

- I decided to show the Launches filtered by success, as that property seemed good to make a distintion, the API did not allowed querys to filter the data so, after fetching the data it had to be filtered with a filter() method.

- With the filter done, the launches can be shown filtered by the status of the mission being succesful or not.

- The next two filters ended up trickier than anticipated, figured I wanted to use a state to handle the url shift, the plan was to dinamically decide the used URL for the fetchin method, the URL and the other filters are determined by the selection of specified buttons on the sidebar, the sidebar received as a prop a handler method, this handler method was used to get a value from selected buttons, this value would be used to update the corresponding states, had many issues displaying the upcoming and past data set from the API, the issue was with the state the useEffect was watching was incorrect.

- Following completition of the main features, tailwind styling was fixed with help of the documentation.

- No AI was used in the development.
