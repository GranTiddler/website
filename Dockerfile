FROM nginx
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY project /usr/share/nginx/html
RUN ls /usr/share/nginx/html
COPY conf /etc/nginx
