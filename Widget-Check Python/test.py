import requests
from bs4 import BeautifulSoup
import json
import csv

class hotel:

    def __init__(self, id, url):
        self.id = id
        self.url = url

urlList = []

with open(r'C:\Github\Repositories\iiQ-Tools\Widget-Check Python\urls.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=';')
    next(reader, None) # Skip the header
    
    # Unpack the row directly in the head of the for loop.
    for hotel_id, hotel_url in reader:
        #convert the urls to strings
        id = float(hotel_id)
        url = str(hotel_url)
        urlList.append(hotel(id, url))







    #for row in urlList:
        #print(', '.join(row))
print(urlList[0].url)
#filename = "C:\Github\Repositories\iiQ-Tools\Widget-Check Python\urls.csv"
#f = open(filename, "r")
#datas = f.read().split() #datas is already a list
#f.close()
#print(datas)


def widgetCheck(hotel_url):
    page = requests.get(hotel_url)
    # print(page)
    soup = BeautifulSoup(page.text, 'html.parser')
    #scripts = soup.find_all(
    #    'script', attrs={'src'})
    ca = soup.select("script[src*=customer]")
    iiq = soup.select('iframe[id*=iiqcheck]')
    print(hotel_url)
    if ca:
        print('ca')
        return('ca')
    
    elif iiq:
        print('iiq')
        return('iiq')
    else:
        print('Nichts gefunden!')
        return('Nichts gefunden!')
    

for url in urlList:
    widgetCheck(urlList.url)
