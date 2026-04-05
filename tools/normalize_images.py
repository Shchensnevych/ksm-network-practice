import os
from PIL import Image

TARGET_WIDTH = 600
TARGET_HEIGHT = 450
assets_dir = 'assets'

def main():
    print(f"Normalizing images to {TARGET_WIDTH}x{TARGET_HEIGHT}...")
    for root, dirs, files in os.walk(assets_dir):
        for f in files:
            if f.endswith('.png') or f.endswith('.jpg') or f.endswith('.jpeg'):
                path = os.path.join(root, f)
                try:
                    with Image.open(path) as original_img:
                        
                        # We only want to normalize images that were typically 600px wide.
                        # Ignore the wide (940px) mermaid schemas.
                        if original_img.size[0] != 600:
                            print(f"Skipping {f} (Width is {original_img.size[0]}, not 600)")
                            continue
                            
                        if original_img.size == (TARGET_WIDTH, TARGET_HEIGHT):
                            print(f"Skipping {f} (Already {TARGET_WIDTH}x{TARGET_HEIGHT})")
                            continue
                        
                        # Create a new white canvas
                        new_img = Image.new('RGB', (TARGET_WIDTH, TARGET_HEIGHT), (255, 255, 255))
                        
                        # We must work with a copy so we can safely mutate it
                        img = original_img.copy()
                        
                        # If the original image is strictly taller than our canvas, we scale it down first
                        if img.size[1] > TARGET_HEIGHT:
                            ratio = TARGET_HEIGHT / float(img.size[1])
                            new_w = int(img.size[0] * ratio)
                            img = img.resize((new_w, TARGET_HEIGHT), Image.Resampling.LANCZOS)
                        
                        # Calculate coordinates to paste the image perfectly in the center
                        paste_x = (TARGET_WIDTH - img.size[0]) // 2
                        paste_y = (TARGET_HEIGHT - img.size[1]) // 2
                        
                        # Paste while handling alpha channels (transparency)
                        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                            img = img.convert('RGBA')
                            new_img.paste(img, (paste_x, paste_y), img)
                        else:
                            new_img.paste(img, (paste_x, paste_y))
                        
                        # Save it back overwriting the file
                        new_img.save(path)
                        print(f"Normalized {f} (Original height was {original_img.size[1]})")
                except Exception as e:
                    print(f"Error processing {f}: {e}")

if __name__ == '__main__':
    main()
