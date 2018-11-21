# -*- coding=utf-8 -*-

import logging


logger = logging.getLogger('django.request')


def request_log_middleware(get_response):
    def middleware(request):

        response = get_response(request)

        # request
        msg = '\n\n'
        _dict = eval(request.body.decode('utf-8'))
        msg += '[api] ' + _dict['operationName'] + '\n'
        format_variable = '  - %s : %s'
        variables = (format_variable % x for x in _dict['variables'].items())
        msg += '[variables] ' + '\n' + '\n'.join(variables) + '\n'

        # response
        msg += '[http code] ' + str(response.status_code) + '\n'
        msg += '[return] ' + '\n' + response.content.decode('utf-8')
        msg += '\n'
        msg += '\n'
        logger.info(msg)

        return response
    return middleware
