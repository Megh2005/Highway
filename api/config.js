// Vercel serverless function: hands the Google Maps key to the page at runtime.
// The key lives in Vercel's Environment Variables, never in the code or the Git repo.
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const key = process.env.GOOGLE_MAPS_API_KEY;
  if (!key) return res.status(500).json({ error: 'GOOGLE_MAPS_API_KEY is not set' });
  res.status(200).json({ googleMapsKey: key });
}
