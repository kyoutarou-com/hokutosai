import pyqrcode
import json

DOMAIN = 'hokutosai.net'
OUTPUT_DIR = 'qr-code'

with open('./dist/assets/config/where.json') as f:
    locations = json.load(f)

for location in locations:
    hash = location['urlHash']
    url = f'https://{DOMAIN}/where.html#{hash}'
    file = f'{OUTPUT_DIR}/qr-{hash}.svg'
    qr_code = pyqrcode.create(url)
    qr_code.svg(file, scale=8)
