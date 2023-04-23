# PBI Classmate App

PBI Classmate App is a mobile application designed to complement the textbooks provided by Puri Bahasa Indonesia (a language school). The app helps students save and listen to passages and vocabularies from the books. This is a cross-platform app available for both Android and iOS.

## Getting Started

To get started with the PBI Classmate App, follow the steps below.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager)

### Installing

1. Clone this repository to your local machine:

   ```
   git clone git@github.com:shonsirsha/pbiclassmate-app.git
   ```

2. Navigate to the project directory:

   ```
   cd pbiclassmate-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Install pods (packages) for iOS by going to `./ios` and run:

    ```
    pod install
    ```

 5. Install Xcode to run the project on iOS

 6. Install Android Studio to run the project on Android

### Running the App

For macOS:

1. To run the app on iOS:

   ```
   npm run ios
   ```

3. To run the app on Android:

   ```
   npm run android
   ```

3. Please refer to the [official documentation](https://reactnative.dev/docs/running-on-device?platform=android) for other methods to run the app on the same platform (macOS), as well as on other platforms.

### Important directory and files

- `./index.js`: Entrypoint of the app
- `screens`: Contains all the "pages" (screens) React components
- `components`: Contains reusable (react) components
- `context`: Contains React Context files
- `constants`: Contains constant values that are used throughout the app
- `ios`: Contains the Xcode project files for the iOS app.
- `android`: Contains the Android project files for the Android app.