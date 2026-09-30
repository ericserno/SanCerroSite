import fs from 'fs';
import path from 'path';

const src = path.resolve('scraped/assets');
const dest = path.resolve('public/images');
fs.mkdirSync(dest, { recursive: true });

const map = {
  '5bd8b3736e181426ca40655a_sancerro.png': 'hero-welcome.png',
  '5bd8b3736e181426ca40655a_sancerro-p-500.png': 'hero-welcome-sm.png',
  '691e633706de6fc912c0095b_Slide1.PNG': 'turkey-trot-2025.png',
  '691e6797c09cfd6fd3b18ec9_Screenshot-2025-11-19-165741.png': 'paula-serno.png',
  '5bd93f65d39e2624c5b8f852_Aperol-Spritz-02.png': 'san-cerro-spritz.png',
  '637995d254cc505e99faa7ea_IMG_4535.jpg': 'turkey-trot-2022.jpg',
  '6189be696710138316bbd42f_unnamed.jpg': 'turkey-trot-eagles.jpg',
  '6189bce8a57467a70b38f197_logo.png': 'green-jogathon-2021.png',
  '5bd9f7a05062a08fc2954a27_amazonsmile-blog.jpg': 'amazon-smile.jpg',
  '5bd94555d39e26fc63b8fb27_Del_Cerro_Ticket.jpg': 'lottery-ticket.jpg',
  '5bd93a32b5192910f4f02b9e_ExteriorNight_highWEB2.jpg': 'eureka-restaurant.jpg',
  '5bd9348749a1428d778ece0e_Logo-Gecko-Green-medal-year-url.png': 'green-gecko.png',
  '5bd933a56fd44c62709a90ca_348s.jpg': 'nature-thumb.jpg',
  '5bd93355b51929e8a1f02800_images.jpeg': 'recreation-thumb.jpg',
  '5bd93b54d39e260312b8f4da_cowles-mountain-san-diego-hiking-trail-san-carlos-downtown-san-diego-state-university-5.jpg': 'cowles-mountain.jpg',
  '5bd932fe6fd44c60c49a90a3_7847874_G.jpg': 'community-thumb.jpg',
  '5bd933ebb519291645f02824_liquorwall.jpg': 'knb-wall.jpg',
  '5bd8b2c0ea13a98a6a92ff89_footer-bg.jpg': 'footer-bg.jpg',
  '5bd8b2c0ea13a94ae092ff94_3f4eb74a.jpg': 'about-bridge.jpg',
  '5bd8b2c0ea13a9e3c692ff87_bridges.jpg': 'bridges.jpg',
  '5bd8b2c0ea13a9054292ff6d_photo-1438636740648-37d6fed50dad.jpg': 'road.jpg',
  '5bd8b2c0ea13a9285492ff5b_photo-1413977886085-3bbbf9a7cf6e.jpg': 'hills.jpg',
  'favicon.ico': 'favicon.ico',
  'webclip.png': 'webclip.png',
};

for (const [from, to] of Object.entries(map)) {
  const a = path.join(src, from);
  const b = path.join(dest, to);
  if (!fs.existsSync(a)) {
    console.log('missing', from);
    continue;
  }
  fs.copyFileSync(a, b);
  console.log('copied', to);
}

// also copy to app icon locations
fs.copyFileSync(path.join(dest, 'favicon.ico'), path.resolve('src/app/favicon.ico'));
console.log('done');
