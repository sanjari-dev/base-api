module.exports = it("sha", () => {
  expect("9aaa55f07f1b50312f22680623a6d21316885488").toBe(sanari.helpers.sha());
  expect("9aaa55f07f1b50312f22680623a6d21316885488").toBe(sanari.helpers.sha(null));
  expect("9aaa55f07f1b50312f22680623a6d21316885488").toBe(sanari.helpers.sha(null));
  expect("9aaa55f07f1b50312f22680623a6d21316885488").toBe(sanari.helpers.sha(''));
  expect("9aaa55f07f1b50312f22680623a6d21316885488").toBe(sanari.helpers.sha({}));
  expect("9aaa55f07f1b50312f22680623a6d21316885488").toBe(sanari.helpers.sha({ id: 1 }));
  expect("9aaa55f07f1b50312f22680623a6d21316885488").toBe(sanari.helpers.sha([]));
  expect("0ea61b309b4fa7d869b185cf540afd6e49fc79b3").toBe(sanari.helpers.sha("!P@ssw0rd123"));
  expect("9aaa55f07f1b50312f22680623a6d21316885488").toBe(sanari.helpers.sha(true));
  expect("9aaa55f07f1b50312f22680623a6d21316885488").toBe(sanari.helpers.sha(false));
});