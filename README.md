In this project we made a world travel recommandation chatbot. 
After asking the user about the countries he or she enjoyed the most, our chatbot use a dataset with relevant informations about these countries on climate, localisation and popularity in order to calculate the next better destination for our traveler.
We are using a homemade dataset, based on two countries dataset oriented in tourism informations and reshaped by ourselves.

You can test it by creating a Facebook Dev app and connecting it to the chatbot (the file `development.json`, in the `config` folder). The `pageAccessToken` and the `appSecret` are given to you by the webhook, for the last one, you can create it yourself or use the one that already is in the code.

Once you've done it, use flask to start the recommendation algorythm, and node to enable the chatbot.

To use flask, you can access it through virtual env, then set the .py file as flask app.
```shell
set FLASK_APP=reco.py
```
Then run it.
```shell
flask run
```

To run the java script application, open a shell at the place of the "server.js" then install the dependencies.
```shell
npm install
```
Then start the server.
```shell
node server.js
```

If you did not open your ports, your app won't be reachable by your webhook. To solve that problem, you can use ngrok.
```shell
ngrok http 3000
```
