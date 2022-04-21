module.exports = it("sayHello", () => {
  expect("Hello Sanjari").toBe(sanari.helpers.sayHello("Sanjari"));
  expect("Hello Sans").toBe(sanari.helpers.sayHello("Sans"));
});