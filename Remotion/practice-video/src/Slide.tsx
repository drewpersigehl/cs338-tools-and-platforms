import { random, useVideoConfig, Img, staticFile, useCurrentFrame } from "remotion";
 
export const Slide: React.FC<{fileName: string, imgWidth: number, imgHeight: number}> = ({fileName, imgWidth, imgHeight}) => {
  const frame = useCurrentFrame();
  const { width, height, fps, durationInFrames } = useVideoConfig();

  // see how image dimensions compare to video resolution
  // e.g. a larger widthFactor means the video width is larger compared to the image width
  const widthFactor = width / imgWidth;
  const heightFactor = height / imgHeight;
  
  // the image needs to be scaled according to the dimension which most severely differs from the video resolution
  let scaleFactor = widthFactor > heightFactor ? widthFactor : heightFactor;

  // How much do we want to zoom on a slide
  // e.g. 0.2 would be a 20% change in zoom over the slide's duration
  const zoomFactor = 0.1; 

  // figure out what fraction of this slide's duration we've shown so far
  const completionFactor = frame / durationInFrames;
  
  // randomly decide whether to zoom in or out over the slide's duration
  // 0 = zoom in, 1 = zoom out
  const testRandom = Math.floor(random(fileName) * 2);
  if (testRandom === 0) {
    scaleFactor = scaleFactor * (1 + zoomFactor * completionFactor);
} else {
    scaleFactor = scaleFactor * ((1 + zoomFactor) - (zoomFactor * completionFactor));
}
  // randomly decide which corner to start from
  // 0 = top left, 1 = top right, 2 = bottom left, 3 = bottom right
  const cornerChoice = Math.floor(random(fileName) * 4);
  switch(cornerChoice) {
    case 0:
      return (
        <Img 
          src={staticFile(fileName)} 
          style={{
            position: "absolute",
            transform: `scale(${scaleFactor})`,
            transformOrigin: "top left",
            top: 0,
            left: 0
          }} 
        />   
      );
    case 1:
      return (
        <Img 
          src={staticFile(fileName)} 
          style={{
            position: "absolute",
            transform: `scale(${scaleFactor})`,
            transformOrigin: "top right",
            top: 0,
            right: 0
          }} 
        />   
      );
    case 2:
      return (
        <Img 
          src={staticFile(fileName)} 
          style={{
            position: "absolute",
            transform: `scale(${scaleFactor})`,
            transformOrigin: "bottom left",
            bottom: 0,
            left: 0
          }} 
        />   
      );
    case 3:
      return (
        <Img 
          src={staticFile(fileName)} 
          style={{
            position: "absolute",
            transform: `scale(${scaleFactor})`,
            transformOrigin: "bottom right",
            bottom: 0,
            right: 0
          }} 
        />   
      );
    default:
      return (
        <Img 
          src={staticFile(fileName)} 
          style={{
            position: "absolute",
            transform: `scale(${scaleFactor})`,
            transformOrigin: "top left",
            top: 0,
            left: 0
          }} 
        />   
      );
  }
}