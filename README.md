# Boostcamp Frontend

## To run the project locally:

1. Open Terminal.
2. Cd Boostcamp.
3. Npm install.
4. Create a .env file.
5. Search team slack for API_URL and put into .env.
6. Npm start.
7. i for iOS, a for Android.

## Component Tree

- App
  - LoginScreen
    - LoginScreenTemplate
  - RegisterScreen
    - LoginScreenTemplate
  - TaskTypeScreen
    - Logo
      - Star
    - Avatar
    - TaskTypeCard (OnScreen)
    - TaskTypeCard (OffScreen)
  - OnScreen
    - DurationScreenTemplate
      - Logo
        - Star
      - Avatar
      - TaskDurationCard (Onscreen_Short)
      - TaskDurationCard (Onscreen_Medium)
      - TaskDurationCard (Onscreen_Long)
  - OnScreenShortScreen
    - TaskScreenTemplate
      - Logo
        - Star
      - Avatar
      - TaskCard
      - StarRating
      - NavigationButtons
  - OnScreenMediumScreen
    - TaskScreenTemplate
      - Logo
        - Star
      - Avatar
      - TaskCard
      - StarRating
      - NavigationButtons
  - OnScreenLongScreen
    - TaskScreenTemplate
      - Logo
        - Star
      - Avatar
      - TaskCard
      - StarRating
      - NavigationButtons
  - OffScreen
    - DurationScreenTemplate
      - Logo
        - Star
      - Avatar
      - TaskDurationCard (Offscreen_Short)
      - TaskDurationCard (Offscreen_Medium)
      - TaskDurationCard (Offscreen_Long)
  - OffScreenShortScreen
    - TaskScreenTemplate
      - Logo
        - Star
      - Avatar
      - TaskCard
      - StarRating
      - NavigationButtons
  - OffScreenMediumScreen
    - TaskScreenTemplate
      - Logo
        - Star
      - Avatar
      - TaskCard
      - StarRating
      - NavigationButtons
  - OffScreenLongScreen
    - TaskScreenTemplate
      - Logo
        - Star
      - Avatar
      - TaskCard
      - StarRating
      - NavigationButtons
