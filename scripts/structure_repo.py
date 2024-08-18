import os
import shutil

# Define the structure
structure = {
    "assets/css": ["*.css"],
    "assets/js": ["*.js"],
    "templates": ["*.html"],
    "backend": ["*.php"],
    "scripts": ["*.py"],
    "backend/data": ["*.json", "*.whl"]
}

# Create directories and move files
for directory, patterns in structure.items():
    if not os.path.exists(directory):
        os.makedirs(directory)
    
    for pattern in patterns:
        for file in os.listdir('.'):
            if file.endswith(pattern.split('.')[-1]):
                shutil.move(file, os.path.join(directory, file))

print("Files have been structured!")
