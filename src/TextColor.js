export default function tcolor() {
  const R = Math.random(1) * 255;
  const G = Math.random(1) * 255;
  const B = Math.random(1) * 255;
  return 'RGB(' + R + ',' + G + ',' + B + ')';
}
