FROM busybox

WORKDIR /website

COPY assets/css/main.css assets/css/main.css
COPY assets/fonts assets/fonts
COPY assets/img assets/img
COPY assets/vendor assets/vendor
COPY *.png .
COPY *.ico .
COPY *.svg .
COPY *.xml .
COPY site.webmanifest site.webmanifest
COPY *.html .
COPY *.js .

CMD ["busybox", "httpd", "-f"]