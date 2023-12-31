function maxDistance(movements) {
  let distance = 0;
  let right = movements.match(/>/g)?.length ?? 0;
  let left = movements.match(/</g)?.length ?? 0;

  distance = right - left;
  let extra = movements.length - (right + left);

  return Math.abs(distance) + Math.abs(extra);
}
