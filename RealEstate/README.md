# Real estate

App to show users the properties that a company has available for rent.

# Badge-CodeClimate

![Badge-CodeClimate](https://api.codeclimate.com/v1/badges/428f2f5480d6406d530c/maintainability)

# Badge-DeepScan

[![DeepScan grade](https://deepscan.io/api/teams/13574/projects/16578/branches/358950/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=13574&pid=16578&bid=358950)

# Starting

These instructions allow you to get a copy of the running project on your local machine for development and testing purposes.

## Pre-requirements

Things you need to install the software and how to install them.

```
React Native also requires Java SE Development Kit (JDK), Nodejs y Android Studio
```

## Installation

A series of steps that tells you what you must run have a develpment environment to run the project.

_Download and install Android Studio._

```
While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:
Android SDK
Android SDK Platform
Android Virtual Device
If you are not already using Hyper-V: Performance (Intel ® HAXM) (See here for AMD or Hyper-V).
```

_Install the Android SDK._

_Configure the ANDROID HOME environment variable._

```
The React Native tools require some environment variables to be set up in order to build apps with native code.
Open the Windows Control Panel.
Click on User Accounts, then click User Accounts again
Click on Change my environment variables
Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK
```

_Add platform-tools to Path._

```
Open the Windows Control Panel.
Click on User Accounts, then click User Accounts again.
Click on Change my environment variables
Select the Path variable.
Click Edit.
Click New and add the path to platform-tools to the list.
```

_Configure application to run._
   
```
cd ProjectName
npm install @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --save react-native-vector-icons
npx react-native start
npx react-native run-android
```

# Build and run the app

_Clone the repository._

```
git clone Link
```

_Go to the project folder and install the packages.._

```
cd ProjectName
npm install
```

_Execute the following command for run in Android from your terminal._

```
npx react-native run-android
```

# Authors

* Flores Méndez Jacqueline
