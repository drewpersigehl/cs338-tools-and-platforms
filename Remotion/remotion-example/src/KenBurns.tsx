import { Sequence, useVideoConfig, Img, staticFile, useCurrentFrame } from "remotion";
import { Slide } from "./Slide"

const images = [
  {fileName: "tallbuilding.jpg", width: 2268 , height: 4032},
  {fileName: "widelake.jpg", width: 5120 , height: 1440},
  {fileName: "spongebob.jpg", width: 1920 , height: 1200},
  {fileName: "patrick.jpg", width: 990, height: 592},
  {fileName: "larry.jpg", width: 961 , height: 1167},
]
 
export const KenBurns: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      {images.map((img, index) => {
        return (
          <Sequence from={90*index} durationInFrames={90}>
            <Slide fileName={img.fileName} imgWidth={img.width} imgHeight={img.height} />
          </Sequence>
        );
      })}
    </>
  );
};