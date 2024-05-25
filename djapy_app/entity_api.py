import os

import httpx


class ApiCall:
    def __init__(self):
        self.key = os.getenv("BEARER_KEY")
        self.url = os.getenv("API_URL")
        self.headers = {'content-type': 'application/json', 'authorization': 'Bearer ' + self.key}
        self.response = None
        self.data_type = None

    async def get_json_data(self, data_type):
        try:
            self.data_type = data_type
            async with httpx.AsyncClient(headers=self.headers) as client:
                response = await client.get(self.url + "/" + self.data_type)
                response.raise_for_status()
                data = response.json()
                return data
        except httpx.HTTPError as e:
            print('error:', e)
