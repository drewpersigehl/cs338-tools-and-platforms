import {Composition} from 'remotion';
import {KenBurns} from './KenBurns';

const images = [
  {fileName: "tallbuilding.jpg", width: 2268 , height: 4032},
  {fileName: "widelake.jpg", width: 5120 , height: 1440},
  {fileName: "spongebob.jpg", width: 1920 , height: 1200},
  {fileName: "patrick.jpg", width: 990, height: 592},
  {fileName: "larry.jpg", width: 961 , height: 1167},
]

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={KenBurns}
				durationInFrames={450}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
