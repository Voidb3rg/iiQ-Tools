import requests
from bs4 import BeautifulSoup
import json

page = requests.get('https://jandjoy.com/collections/femme?filter.p.m.filter.option_1=Femme&filter.p.product_type=Bonnets&filter.p.product_type=Jupes&filter.p.product_type=Polars&sort_by=created-descending')

# print(page.text)

soup = BeautifulSoup(page.text, 'html.parser')

# print(soup.prettify)

items = soup.find_all('div', class_='w-full')

products = []

for item in items:
    # print(item)
    product = {}
    try:
        product['item_id'] = item['data-item-id']
        image = item.article.find(
            'div', class_='ProductItem__Image tw-relative tw-overflow-hidden').div.img['data-src']
        product['image_src'] = image
        product['description'] = item.article.find(
            'div', class_='ProductItem__Meta tw-py-3 tw-flex tw-flex-col sm:tw-relative').h3.string.strip()
        product['price'] = item.article.find(
            'div', class_='ProductItem__Meta tw-py-3 tw-flex tw-flex-col sm:tw-relative').div.div.span.span.string.strip()

        products.append(product)

    except KeyError as e:
        print(f"----- KeyError: {e}")

json_string = json.dumps(products)
print(json_string)

with open('femme.json', 'w') as file:
    json.dump(json.loads(json_string), file)