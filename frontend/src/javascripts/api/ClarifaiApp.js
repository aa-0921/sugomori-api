export async function ClarifaiApp(url) {
  const Clarifai = require('clarifai');

  const app = new Clarifai.App({ apiKey: process.env.REACT_APP_CLARIFAI_API_KEY });

  const res = await app.models.predict(Clarifai.GENERAL_MODEL, url);

  return await res.outputs[0].data.concepts;
}
