import fs from 'fs';
import path from 'path';

export async function GET() {
  // Read the config.yml file from the public directory
  const configPath = path.join(process.cwd(), 'public', 'admin', 'config.yml');
  const config = fs.readFileSync(configPath, 'utf-8');

  return new Response(config, {
    status: 200,
    headers: {
      'Content-Type': 'text/yaml',
    },
  });
}
