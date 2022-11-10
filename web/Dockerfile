FROM php:8-apache

RUN mkdir /var/www/html/filesystem
COPY project /var/www/html
RUN chown -R www-data:www-data /var/www
COPY conf.* /etc/apache2/sites-available
