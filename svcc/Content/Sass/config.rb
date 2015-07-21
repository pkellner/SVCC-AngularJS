# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Compass configurations
sass_path = dir
css_path = File.join(dir, "..", "Styles")

# Require any additional compass plugins here.
# options for style are :expanded and :compressed    
# options for environment are :production and :development     (adds line numbers)
output_style = :expanded
environment = :development
