from moviepy.editor import *
input_images = [
    'spongebob.jpg',
    'squidward.jpg',
    'mrkrabs.jpg'
]

clips = []
duration = 5

def zoomIn(t):
    return 1 + 0.03 * t  # Zoom-in.

def zoomInstant(t):
    return 1.10

def movePicture(t):
    return ('center' + 10*(t/5), 'center' + 10*(t/5))

for image in input_images:
    clip = ImageClip(image).set_duration(duration)
    clip = clip.resize(zoomInstant)
    # clip = clip.scroll(x_speed=(0.1*clip.width)/duration, y_speed = (0.1*clip.height)/duration)
    # clip = clip.set_position(movePicture)
    clips.append(clip)
    

video = concatenate(clips, method="compose")
video.write_videofile('test.mp4', fps=24)