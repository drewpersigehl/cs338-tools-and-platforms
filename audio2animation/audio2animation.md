# Animating facial images from audio

This uses speech-driven-animation which is a python library written by Konstantinos Vougioukas Stavros Petridis, and Maja Pantic from Imperial College London. The issue with this model is that it was trained on an extremely small dataset, so any faces that aren't very similar to their dataset results in some really weird looking animations. Because of this, we will be animating one of their example faces that actually works, and using another model to animate the face we want to animate. 

This is where the Thin-Plate-Spline-Motion-Model comes in. This model written by Jian Zhao, and Hui Zhang from Tsinghua Univesirty. This basically takes one video file of a face animation, and an image, and essentially animates the image based on the face animation of the video file. Combining these two allows you to create facial animations from an audio file.

## Installation and Setup - speech-driven-animation

To work with speech-driven animation, it's a python package. start by downloading the files from the github (https://github.com/DinoMan/speech-driven-animation). Then navigate to the file and run 

```
$ pip install .
```

Then you need to download the pretrained models from their google drive(https://drive.google.com/drive/folders/17Dc2keVoNSrlrOdLL3kXdM8wjb20zkbF). and add them to the sda/data folder.

## Installation and Setup - Thin-Plate-Spline-Motion-Model

To start with this one you want to download their library from (https://github.com/yoyo-nb/Thin-Plate-Spline-Motion-Model).

Start by running
```
$pip install -r requirements.txt
```

On line 37, you want to change the line from
```
config = yaml.load(f)
```
to 
```
config = yaml.safe_load(f)
```

Then you want to create a folder named 'checkpoints', and download the models from here (https://drive.google.com/drive/folders/1pNDo1ODQIb5HVObRtCmubqJikmR7VVLT) and drag the models into the checkpoints folder.
These are the pre-trained models, but the default, and the one I would reccomend is the vox one. 



## Usage - speech-driven-animation

For speech-driven-animation, create a python file with this code

```
import sda
va = sda.VideoAnimator(gpu=0)
vid, aud = va(image_filename, audio_filename)
va.save_video(vid, aud, output_filename)
```

There will be a example face image in the examples folder, use this as the face to animate, since this one will actually work.
If you try to use any other face with this, it will create some really weird looking face animations, so make sure to use theirs. 

If you run into a bug that says "Torch not compiled with CUDA enabled" you should update your graphics drivers. 

## Usage - thin-plate-spline-motion-model

For thin-plate-spline-motion-model, you will want to start by cropping the image you want animated down to the vague porportions that they have (normal headshot).

Following this, in the same file with the video you want to have something along the lines 

```
import demo
import os

os.system(r"python3 demo.py --config filepath_to_vox-256.yaml --source_image filepath_to_source_image --driving_video filepath_to_driving_video --result_video filepath_to_results_folder")
```

This basically runs the demo file with the necessary inputs. You can go into demo.py and adjust some things, but this was the easiest way I found to do it. Also, make sure the filepath doesn't have spaces since this causes issues in command line since we are essentially running demo.py in the command line. 

If you decide to use one of the other pretrained models, make sure to change the config filepath to the correct one from the config folder

Put the face you want to animate as the source image, and put the filepath of the results of the speech-driven-animation in the driving video, and this will result in the image being animated!

When you try to run this, you may run into some import issues, like ffmpeg-imageio not found, just install the package using pip

## Links 

Speech-Driven-Animation: https://github.com/DinoMan/speech-driven-animation

Research Paper: https://sites.google.com/view/facialsynthesis/home

Thin-Plate-Spline-Motion-Model: https://github.com/yoyo-nb/Thin-Plate-Spline-Motion-Model

Research Paper: https://arxiv.org/abs/2203.14367
# Animating facial images from audio

This uses speech-driven-animation which is a python library written by Konstantinos Vougioukas Stavros Petridis, and Maja Pantic from Imperial College London. The issue with this model is that it was trained on an extremely small dataset, so any faces that aren't very similar to their dataset results in some really weird looking animations. Because of this, we will be animating one of their example faces that actually works.

This is where the Thin-Plate-Spline-Motion-Model comes in. This model written by Jian Zhao, and Hui Zhang from Tsinghua Univesirty. This basically takes one video file of a face animation, and an image, and essentially animates the image based on the face animation of the video file. Combining these two allows you to create facial animations from an audio file.

## Installation and Setup - speech-driven-animation

To work with speech-driven animation, it's a python package. start by downloading the files from the github (https://github.com/DinoMan/speech-driven-animation). Then navigate to the file and run 

```
$ pip install .
```

Then you need to download the pretrained models from their google drive(https://drive.google.com/drive/folders/17Dc2keVoNSrlrOdLL3kXdM8wjb20zkbF). and add them to the sda/data folder.

## Installation and Setup - Thin-Plate-Spline-Motion-Model

To start with this one you want to download their library from (https://github.com/yoyo-nb/Thin-Plate-Spline-Motion-Model).

Start by running
```
$pip install -r requirements.txt
```

On line 37, you want to change the line from
```
config = yaml.load(f)
```
to 
```
config = yaml.safe_load(f)
```

Then you want to create a folder named 'checkpoints', and download the models from here (https://drive.google.com/drive/folders/1pNDo1ODQIb5HVObRtCmubqJikmR7VVLT) and drag the models into the checkpoints folder.
These are the pre-trained models, but the default, and the one I would reccomend is the vox one. 


## Usage - speech-driven-animation

For speech-driven-animation, create a python file with this code

```
import sda
va = sda.VideoAnimator(gpu=0)
vid, aud = va(image_filename, audio_filename)
va.save_video(vid, aud, output_filename)
```

There will be a example face image in the examples folder, use this as the face to animate, since this one will actually work.
If you try to use any other face with this, it will create some really weird looking face animations, so make sure to use theirs. 

If you run into a bug that says "Torch not compiled with CUDA enabled" you should update your graphics drivers. 

## Usage - thin-plate-spline-motion-model

For thin-plate-spline-motion-model, you will want to start by cropping the image you want animated down to the vague porportions that they have (normal headshot).

Following this, in the same file with the video you want to have something along the lines 

```
import demo
import os

os.system(r"python3 demo.py --config filepath_to_vox-256.yaml --source_image filepath_to_source_image --driving_video filepath_to_driving_video --result_video filepath_to_results_folder")
```

This basically runs the demo file with the necessary inputs. You can go into demo.py and adjust some things, but this was the easiest way I found to do it. Also, make sure the filepath doesn't have spaces since this causes issues in command line since we are essentially running demo.py in the command line. 

If you decide to use one of the other pretrained models, make sure to change the config filepath to the correct one from the config folder

Put the face you want to animate as the source image, and put the filepath of the results of the speech-driven-animation in the driving video, and this will result in the image being animated!

When you try to run this, you may run into some import issues, like ffmpeg-imageio not found, just install the package using pip

## Links 

Speech-Driven-Animation: https://github.com/DinoMan/speech-driven-animation

Research Paper: https://sites.google.com/view/facialsynthesis/home

Thin-Plate-Spline-Motion-Model: https://github.com/yoyo-nb/Thin-Plate-Spline-Motion-Model

Research Paper: https://arxiv.org/abs/2203.14367
