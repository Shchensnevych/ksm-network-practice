import os
from PIL import Image

base = r'c:\Users\Yurec\OneDrive\НМК по дисциплінам\Практика з КСМ\НМК З КСМ практика\Новий формат лекцій\assets\lection3'

MAX_WIDTH = 600

count = 0
if os.path.exists(base):
    for filename in os.listdir(base):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            filepath = os.path.join(base, filename)
            try:
                with Image.open(filepath) as img:
                    width, height = img.size
                    if width > MAX_WIDTH:
                        new_height = int((MAX_WIDTH / width) * height)
                        resized_img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
                        save_format = img.format if img.format else 'PNG'
                        resized_img.save(filepath, format=save_format, quality=95)
                        count += 1
                        print(f"Resized: {filename} (was {width}x{height}, now {MAX_WIDTH}x{new_height})")
            except Exception as e:
                print(f"Error reading {filename}: {e}")

print(f"\nDone! Successfully resized {count} images in lection3.")
