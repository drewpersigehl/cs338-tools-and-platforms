# Remotion

## Start a project
We will start by creating a project.

In your terminal enter:
```
npm init video
```
You may be asked to install some packages. Say yes.

Name your video whatever you like. Choose the "Blank" template.

A Node.js project will be built for you. Most of your work will be done within the /src directory.

## Using the example code

We've provided an example project called 'remotion-example' that creates a Ken Burns style video from a set of images.

To use the example code:

1. Clone the repository to your machine
2. Navigate to the remotion-example directory
3. Run 'npm install' in your terminal
4. Run 'npm start' to open the in-browser interface 

Some things to know:

- The image files are located in the /public directory which is on the same level as /src
- Take a look at the Slide.tsx file to see how the Ken Burns zoom-pan effect is created

## Rendering a project

To render an actual .mp4 video file from your Remotion project, simply run the terminal command:
 ```
 npm run build
 ```
 You may need to install FFMPEG before your video can be rendered. See below for instructions.

 The rendering takes a little bit of time, but when it's done your video should be added to the /out directory.

 ### Installing FFmpeg (Windows)

 You may need to install FFmpeg before you are able to render an actual .mp4 of your Remotion project. This process is quick and easy.

 1. Head to the [FFmpeg-Builds repository](https://github.com/BtbN/FFmpeg-Builds/releases) to download the latest build.
 2. Download the most recent version of 'ffmpeg-master-latest-win64-gpl.zip'
 3. Extract the .zip folder and place the inner folder at the root directory of your C: drive
 4. Rename the folder to 'FFmpeg'
 5. Go to Settings > System > About > Advanced system settings > Environment Variables
 6. Edit the 'Path' variable
 7. Add a new entry with the path to the binaries within your 'FFmpeg' folder (e.g. 'C:\FFmpeg\bin\')
 8. Open a new command prompt window
 9. Type 'FFmpeg' and enter. If the installation was successful, you should see the FFmpeg version information printed.