import json
import requests

print('Loading function')


def lambda_handler(event, context):
    print(event)

    response = requests.get(
        f'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=52e49030296ec02a634a987236a09fed&artist={event[0]}&album={event[1]}&format=json')

    print(response.json())
    image_url = "https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png"
    album_name = "Album name"
    album_description = "Album description"
    response = response.json()

    if "error" in response:
        if response["error"] == 6:
            image_url = "https://miro.medium.com/max/2800/0*lmhc2x2nf-7oN-RK.jpg"
            album_name = "Album not found!"
            album_description = ""

    else:
        image_url = response["album"]["image"][3]["#text"]
        if not image_url:
            image_url = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b" \
                        "-09782f5ccbab.png "
        album_name = response["album"]["name"]
        if "wiki" in response["album"]:
            album_description = response["album"]["wiki"]["summary"]
        else:
            if len(response['album']['tags']['tag']):
                album_description = f"A {response['album']['tags']['tag'][0]['name']} album by " \
                                    f"{response['album']['artist']}." \
                                    f" This album has {response['album']['listeners']} listeners on last.fm! "
            else:
                album_description = f"An album by " \
                                    f"{response['album']['artist']}." \
                                    f" This album has {response['album']['listeners']} listeners on last.fm! "

    album_info = {
        "url": image_url,
        "description": album_description,
        "name": album_name,
    }

    print(album_info)
    return json.dumps(album_info)
