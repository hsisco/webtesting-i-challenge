module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// - Items have `name`, `durability` and `enhancement`.
// - The item's `enhancement` it's a number from 0 to 20.
// - The item's `durability` it's a number from 0 to 100.

function succeed(item) {
// - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    return { ...item, enhancement = item.enhancement + 1};
  }
}

function fail(item) {
// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
  if (item.enhancement < 15) {
    item.durability - 5;
  } else if (item.enhancement >= 15) {
      item.durability - 10;
  } else if (item.enhancement > 16) {
    item.enhancement - 1;
  } else { 
    return { ...item };
  }
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
