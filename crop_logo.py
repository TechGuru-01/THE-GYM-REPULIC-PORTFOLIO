from PIL import Image

# Open the original logo
img = Image.open('public/assets/logo.jpg')

# The image is 1080x1080 (assuming standard Instagram size from the looks of it) or similar.
# Let's crop the top part. We'll find the bounding box or just do a fixed crop.
width, height = img.size

# Assuming the seal is in the top center.
# Let's crop a square from the top.
# By looking at the image, the seal takes up about the top 65% of the image.
# We'll crop from y=0 to y=width (to make it a square at the top)
# Actually, the seal seems to be centered horizontally and slightly padded from the top.

# A square crop at the top:
crop_box = (0, 0, width, width)
seal = img.crop(crop_box)

# We can save it as logo_seal.jpg
seal.save('public/assets/logo_seal.jpg')
print("Cropped successfully to", seal.size)
