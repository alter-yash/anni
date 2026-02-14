# 📁 Assets Guide

## Images

Place all your images in the appropriate folders:

### Recommended Structure:
```
public/
  └── assets/
      ├── images/
      │   ├── characters/
      │   │   ├── bride-sprite.png
      │   │   ├── groom-sprite.png
      │   │   └── hug-sprite.png
      │   ├── years/
      │   │   ├── year1.jpg
      │   │   ├── year2.jpg
      │   │   ├── year3.jpg
      │   │   ├── year4.jpg
      │   │   ├── year5.jpg
      │   │   └── year6.jpg
      │   └── floating/
      │       ├── float1.jpg
      │       ├── float2.jpg
      │       └── float3.jpg
      └── audio/
          └── romantic-song.mp3
```

## Image Specifications

### Character Sprites (Pixel Art)
- **Format:** PNG with transparency
- **Recommended Size:** 64x96px (or 128x192px for retina)
- **Style:** Pixel art, 8-bit or 16-bit aesthetic
- **Create using:**
  - Piskel (https://www.piskelapp.com/) - Free, browser-based
  - Aseprite (Paid, professional tool)
  - Pixilart (https://www.pixilart.com/) - Free online

#### Character Poses Needed:
1. **bride-sprite.png**: Female character in red lehenga, facing right
2. **groom-sprite.png**: Male character in white sherwani, facing left
3. **hug-sprite.png**: Both characters embracing

### Year Photos
- **Format:** JPG or WebP (for web optimization)
- **Recommended Size:** 1200x1200px (square)
- **Aspect Ratio:** 1:1 (square) works best for Polaroid effect
- **File Size:** Keep under 500KB each (compress using TinyPNG.com)

### Floating Background Photos
- **Format:** JPG or WebP
- **Recommended Size:** 600x600px
- **File Size:** Keep under 200KB each (these animate, so smaller is better)

## Audio

### Background Music
- **Format:** MP3 (best browser compatibility)
- **Bitrate:** 128kbps (good quality, reasonable file size)
- **Duration:** 3-5 minutes (it loops anyway)
- **File Size:** Keep under 5MB
- **Mood:** Romantic, lo-fi, instrumental works best

### Recommended Music Sources:
- **Free/Royalty-Free:**
  - Bensound (https://www.bensound.com/)
  - Free Music Archive (https://freemusicarchive.org/)
  - YouTube Audio Library
  
- **Your Own Music:**
  - Your special song together
  - First dance song
  - Song from your first date

## Optimization Tips

### Image Optimization Tools:
1. **TinyPNG** (https://tinypng.com/)
   - Compress JPG/PNG without visible quality loss
   - Reduces file size by 50-80%

2. **Squoosh** (https://squoosh.app/)
   - Google's image optimizer
   - Convert to WebP for better compression

3. **ImageOptim** (Mac only)
   - Drag and drop optimization
   - Lossless compression

### Audio Optimization:
1. **Audacity** (Free)
   - Trim silence from beginning/end
   - Normalize volume
   - Export at 128kbps MP3

2. **Online Audio Converter**
   - Convert formats
   - Adjust bitrate

## Quick Reference

### Where to Update Image Paths:

**Home.jsx** (Character sprites):
- Line 117: Bride sprite
- Line 142: Groom sprite  
- Line 167: Hug sprite
- Line ~45: Floating photos array

**Journey.jsx** (Year photos):
- Line ~12: `memories` array
- Update each `imageUrl` property

**Letter.jsx** (Audio):
- Line 25: Audio file path

## File Naming Best Practices

✅ **Good:**
- `year1.jpg`
- `bride-sprite.png`
- `romantic-song.mp3`

❌ **Avoid:**
- `IMG_1234.jpg` (not descriptive)
- `Photo From Mom.png` (spaces in filename)
- `Year 1 Photo (Final) (2).jpg` (too complex)

### Rules:
- Use lowercase
- Use hyphens instead of spaces
- Keep names short and descriptive
- No special characters

## Storage Tips

### During Development:
- Keep original high-res photos in a separate backup folder
- Use optimized versions in the `/public/assets/` folder
- Test with different image qualities to find best balance

### For Deployment:
- All optimized images should be in `/public/assets/`
- These will be included in the build
- Don't reference images from external servers (slower loading)

## Copyright & Privacy

⚠️ **Important:**
- Only use photos you own or have permission to use
- Be mindful of other people in photos (get consent if sharing publicly)
- If deploying publicly, consider what you're comfortable sharing
- For private viewing only, you have more flexibility

## Testing Checklist

Before finalizing:
- [ ] All images load correctly
- [ ] No broken image icons
- [ ] Images are optimized (total site under 10MB)
- [ ] Audio plays on all browsers
- [ ] No lag during animations
- [ ] Mobile images load quickly
- [ ] Backup copies of all originals saved

---

Need help? Check the main README.md for more detailed instructions!
