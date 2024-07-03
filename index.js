// Code your solution here
function findMatching(drivers, name) {
  // Convert the search name to lowercase for case-insensitive matching
  const searchName = name.toLowerCase();

  // Use filter() to find drivers whose lowercase names match the search
  return drivers.filter((driver) => driver.toLowerCase().includes(searchName));
}

function fuzzyMatch(drivers, name) {
  // Convert the search name to lowercase for case-insensitive matching
  const searchName = name.toLowerCase();

  // Use filter() to find drivers whose names start with the search string
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(searchName)
  );
}

function matchName(drivers, name) {
  // Use filter() to find drivers whose name property matches the search name
  return drivers.filter((driver) => driver.name === name);
}
