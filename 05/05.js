function cyberReindeer(road, time) {
  let arrRoad = [road];
  let index = 0;

  for (let i = 0; i < time - 1; i++) {
    if (i == 4) road = road.replaceAll("|", "*");
    if (road[index + 1] != "|") {
      index++;
    }
    let newRoad = road.split("");
    newRoad[index] = "S";
    newRoad[0] = ".";
    newRoad = newRoad.join("");
    arrRoad.push(newRoad);
  }
  return arrRoad;
}
