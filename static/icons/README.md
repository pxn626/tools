# PWA Icons

This directory should contain the following icon files for PWA support:

## Required Icons

| File | Size | Purpose |
|------|------|---------|
| icon-72x72.png | 72x72 | Android Chrome |
| icon-96x96.png | 96x96 | Android Chrome |
| icon-128x128.png | 128x128 | Android Chrome |
| icon-144x144.png | 144x144 | Android Chrome |
| icon-152x152.png | 152x152 | iOS Safari |
| icon-192x192.png | 192x192 | Android Chrome |
| icon-384x384.png | 384x384 | Android Chrome |
| icon-512x512.png | 512x512 | Android Chrome |

## How to Generate Icons

1. Use a tool like [RealFaviconGenerator](https://realfavicongenerator.net/) or [PWA Asset Generator](https://github.com/nicholasalx/pwa-asset-generator)

2. Or use this quick command with ImageMagick:
   ```bash
   # From a source image (e.g., logo.png)
   for size in 72 96 128 144 152 192 384 512; do
     convert logo.png -resize ${size}x${size} icon-${size}x${size}.png
   done
   ```

3. Or use online tools:
   - https://realfavicongenerator.net/
   - https://www.pwabuilder.com/imageGenerator

## Quick Start

You can use the included `icon.svg` as a temporary icon. Convert it to PNG:

```bash
# Using Inkscape
for size in 72 96 128 144 152 192 384 512; do
  inkscape icon.svg -w $size -h $size -o icon-${size}x${size}.png
done
```
