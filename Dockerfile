# Use the official Nginx Alpine image
FROM nginx:alpine

# Remove the default Nginx web files
RUN rm -rf /usr/share/nginx/html/*

# Copy all project files into the Nginx web directory
COPY . /usr/share/nginx/html/

# Expose HTTP port
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]