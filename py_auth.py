import requests

#url = "https://192.168.80.166:4243/qps/mashup/ticket?Xrfkey=abcdefghijklmnop"
cert_file = '/mnt/c/Users/fof/Documents/VM-Auth/Qlik-Cert-Laptop/client.pem'
key_file = '/mnt/c/Users/fof/Documents/VM-Auth/Qlik-Cert-Laptop/client_key.pem'

cert = (cert_file,key_file)

def _getTicket(url):
    payload = "\r\n{\r\n  \"UserDirectory\": \"192.168.80.166\",\r\n  \"UserId\": \"cullin\"\r\n}"
    headers = {
      'x-Qlik-Xrfkey': 'abcdefghijklmnop',
      'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data = payload, cert=cert, verify=False)

    return response.json()['Ticket']

def getSession():
    ticket = _getTicket("https://192.168.80.166:4243/qps/mashup/ticket?Xrfkey=abcdefghijklmnop")
    url = "https://192.168.80.166/mashup/qrs/about?Xrfkey=abcdefghijklmnop&Qlikticket={}".format(ticket)

    payload  = {}
    headers = {
      'x-Qlik-Xrfkey': 'abcdefghijklmnop'
    }

    response = requests.request("GET", url, headers=headers, data = payload, cert=cert, verify=False)

    print(response.cookies['X-Qlik-Session-Mashup'])
    return response.cookies['X-Qlik-Session-Mashup']

# print(getSession())
