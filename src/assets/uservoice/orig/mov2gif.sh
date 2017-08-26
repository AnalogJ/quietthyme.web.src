#!/usr/bin/env bash
#
# Method 0 raw resize
ffmpeg -i $1 -vf scale=800:-1 -crf 0 -preset veryslow -r 10 -f gif - | gifsicle --optimize=3 --delay=4 > $1.gif

# Method 0 raw
#ffmpeg -i $1 -r 10 -f gif - | gifsicle --optimize=3 --delay=5 > $1-raw.gif


### Method 1 with pallet
#palette="/tmp/palette.png"
#filters="fps=10"
#ffmpeg -v warning -i $1 -vf "$filters,palettegen" -y $palette
#ffmpeg -v warning -i $1 -i $palette -lavfi "$filters [x]; [x][1:v] paletteuse" -r 10 -f gif - | gifsicle --optimize=3 --delay=4 > $1-pallet.gif

## Method 2 without pallet
##ffmpeg -i $1 -vf scale=800:-1 -r 10 -f gif - | gifsicle --optimize=3 --delay=5 > $1-nopalette.gif




# BEST QUALITY, CURRENTY IN USE. no rezie, framerate 10, delay 4
#ffmpeg -i $1  -pix_fmt rgb24 -r 10 -f gif - | gifsicle --optimize=3 --delay=4 > $1-best.gif