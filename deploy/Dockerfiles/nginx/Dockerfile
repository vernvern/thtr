FROM nginx:1.13.9
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN chown -R nginx /opt
CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]
