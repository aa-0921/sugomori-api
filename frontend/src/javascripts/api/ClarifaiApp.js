export async function ClarifaiApp() {
  const Clarifai = require('clarifai');

  const app = new Clarifai.App({ apiKey: 'f8b4214227f34f958228b93cd7db08f1' });

  app.models
    .predict(
      Clarifai.GENERAL_MODEL,
      'https://media-01.creema.net/user/162879/exhibits/4244606/0_3c81efa116f1945288a4cb3e5d7f7cfe_583x585.jpg',
    )
    .then((response) => {
      console.log('Clarifai', response);
    })
    .catch((err) => {
      console.log(err);
    });
}
