export function ColorInd(dikt) {
  let res = '';
  if (dikt.health > 50) {
    res = 'healthy';
  } else if (dikt.health > 14) {
    res = 'wounded';
  } else if (dikt.health < 15) {
    res = 'critical';
  }
  return res;
}

function compareNumeric(a, b) {
  let res = 0;
  if (a.health > b.health) {
    res = -1;
  } else if (a.health < b.health) {
    res = 1;
  }
  return res;
}

export function Sort(list) {
  list.sort(compareNumeric);
  return list;
}
