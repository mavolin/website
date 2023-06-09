FROM busybox

WORKDIR /website

COPY assets assets
COPY *.png .
COPY *.ico .
COPY *.svg .
COPY *.xml .
COPY site.webmanifest site.webmanifest
COPY *.html .

CMD ["busybox", "httpd", "-f"]