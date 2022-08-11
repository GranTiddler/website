FROM nginx

RUN apt-get update
RUN apt-get install -y git

RUN git clone https://github.com/skAdOOdlEs7/website


#RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
#RUN mv /website/conf/* /etc/nginx
RUN mv /website/project/* /usr/share/nginx/html
RUN ls /usr/share/nginx/html
