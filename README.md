# Boostcamp Frontend

## To run the project locally:

1. Open Terminal.
2. Cd Boostcamp.
3. Npm i.
4. Create a .env file.
5. Search team slack for API_URL and put into .env.
6. Npm start.
7. i for iOS, a for Android.

## Component Tree

- App
  - TaskTypeScreen
    - Logo
      - Star
        - TaskTypeCard (OnScreen)
        - TaskTypeCard (OffScreen)
  - OnScreen
    - Logo
      - Star
    - TaskDurationCard (Onscreen_Short)
    - TaskDurationCard (Onscreen_Medium)
    - TaskDurationCard (Onscreen_Long)
  - OnScreenShortScreen
    - Logo
      - Star
    - TaskCard
  - OnScreenMediumScreen
    - Logo
      - Star
    - TaskCard
  - OnScreenLongScreen
    - Logo
      - Star
    - TaskCard
  - OffScreen
    - Logo
      - Star
    - TaskDurationCard (Offscreen_Short)
    - TaskDurationCard (Offscreen_Medium)
    - TaskDurationCard (Offscreen_Long)
  - OffScreenShortScreen
    - Logo
      - Star
    - TaskCard
  - OffScreenMediumScreen
    - Logo
      - Star
    - TaskCard
  - OffScreenLongScreen
    - Logo
      - Star
    - TaskCard

## Mvp Tasks:

- Import SVG images from figma to be inserted into TaskTypeCards, TaskDurationCards and TaskCards.
- Create random task fetching functionality.
- Change the safeareaview element when being viewed on android as it only works on ios devices.

## Bonus Tasks:

- Add Star Functionality for task pages.
- Login page with Auth0 React Native.
- Initials Avatar to be created on all screens.
- Typing of all components and props on all pages.
- Testing of all components.
