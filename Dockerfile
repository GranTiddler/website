FROM nginx
COPY project /usr/share/nginx/html
RUN ls /usr/share/nginx/html
COPY conf /etc/nginx

