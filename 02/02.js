function manufacture(gifts, materials) {
  // Code here
  return gifts.filter((g) => g.split("").every((m) => materials.includes(m)));
}
