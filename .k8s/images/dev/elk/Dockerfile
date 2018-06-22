FROM willdurand/elk

MAINTAINER Webber Takken <webber@takken.io>

ADD logstash/logstash.conf /etc/logstash
ADD logstash/patterns /opt/logstash/patterns

CMD [ "/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/supervisord.conf" ]

ENV PATH /opt/logstash/bin:$PATH

EXPOSE 80
