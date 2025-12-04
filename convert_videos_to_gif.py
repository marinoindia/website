#!/usr/bin/env python3
"""
Convert videos to optimized GIFs using ffmpeg with palette generation
for better quality and smaller file sizes.
"""

import argparse
import subprocess
from pathlib import Path

def convert_video_to_gif(video_path, output_dir=None, max_width=800, fps=15, speed=3.0):
    """
    Convert a video to an optimized GIF using ffmpeg palette method.
    
    Args:
        video_path: Path to the input video file
        output_dir: Directory to save the GIF (default: same as video)
        max_width: Maximum width for the GIF (default: 800px)
        fps: Frames per second for the GIF (default: 15)
        speed: Speed multiplier (default: 3.0 for 3x speed)
    """
    video_path = Path(video_path)
    
    if output_dir is None:
        output_dir = video_path.parent
    else:
        output_dir = Path(output_dir)
    
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Output GIF path
    gif_path = output_dir / f"{video_path.stem}.gif"
    palette_path = output_dir / f"{video_path.stem}_palette.png"
    
    print(f"Converting {video_path.name} to GIF at {speed}x speed...")
    
    try:
        # Step 1: Generate palette from video (with speed adjustment)
        palette_cmd = [
            'ffmpeg',
            '-i', str(video_path),
            '-vf', f'setpts=PTS/{speed},fps={fps},scale={max_width}:-1:flags=lanczos,palettegen',
            '-y',  # Overwrite output file
            str(palette_path)
        ]
        
        subprocess.run(palette_cmd, check=True, capture_output=True)
        print(f"  ✓ Palette generated")
        
        # Step 2: Create GIF using the palette (with speed adjustment)
        gif_cmd = [
            'ffmpeg',
            '-i', str(video_path),
            '-i', str(palette_path),
            '-lavfi', f'setpts=PTS/{speed},fps={fps},scale={max_width}:-1:flags=lanczos[x];[x][1:v]paletteuse',
            '-y',  # Overwrite output file
            str(gif_path)
        ]
        
        subprocess.run(gif_cmd, check=True, capture_output=True)
        print(f"  ✓ GIF created: {gif_path.name}")
        
        # Clean up palette file
        if palette_path.exists():
            palette_path.unlink()
        
        # Get file sizes
        video_size = video_path.stat().st_size / (1024 * 1024)  # MB
        gif_size = gif_path.stat().st_size / (1024 * 1024)  # MB
        
        print(f"  ✓ Size: {video_size:.2f} MB → {gif_size:.2f} MB")
        print()
        
        return True
        
    except subprocess.CalledProcessError as e:
        print(f"  ✗ Error converting {video_path.name}: {e}")
        if palette_path.exists():
            palette_path.unlink()
        return False

def parse_args():
    parser = argparse.ArgumentParser(
        description="Convert videos in google-maps-media to optimized GIFs."
    )
    parser.add_argument(
        "--max-width",
        type=int,
        default=800,
        help="Maximum width of the output GIF (default: 800px)",
    )
    parser.add_argument(
        "--fps",
        type=int,
        default=15,
        help="Frames per second for the GIF (default: 15)",
    )
    parser.add_argument(
        "--speed",
        type=float,
        default=3.0,
        help="Playback speed multiplier (default: 3.0x)",
    )
    return parser.parse_args()


def main():
    args = parse_args()
    # Directory containing videos
    media_dir = Path(__file__).parent / "google-maps-media"
    
    # Find all video files
    video_extensions = ['*.mp4', '*.mov', '*.avi', '*.mkv', '*.webm']
    video_files = []
    
    for ext in video_extensions:
        video_files.extend(media_dir.glob(ext))
        video_files.extend(media_dir.glob(ext.upper()))
    
    if not video_files:
        print("No video files found in google-maps-media folder")
        return
    
    print(f"Found {len(video_files)} video file(s) to convert\n")
    
    # Convert each video at 3x speed
    success_count = 0
    for video_file in sorted(video_files):
        if convert_video_to_gif(
            video_file,
            max_width=args.max_width,
            fps=args.fps,
            speed=args.speed,
        ):
            success_count += 1
    
    print(f"\nConversion complete: {success_count}/{len(video_files)} videos converted successfully")

if __name__ == "__main__":
    main()

