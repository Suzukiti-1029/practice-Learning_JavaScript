const u1 = { name: '和洋' };
const u2 = { name: '花子' };
const u3 = { name: '涼子' };
const u4 = { name: '哲人' };

const userRoles = new Map([
  [u1, 'ユーザー'],
  [u2, 'ユーザー'],
  [u3, '管理者'],
]);

console.log(userRoles.has(u1));
console.log(userRoles.get(u1));
console.log(userRoles.has(u4));
console.log(userRoles.get(u4));

console.log(userRoles.get(u1));
userRoles.set(u1, '管理者');
console.log(userRoles.get(u1));

console.log(userRoles.size);

for (const u of userRoles.keys()) {
  console.log(u.name);
}
for (const r of userRoles.values()) {
  console.log(r);
}
for (const ur of userRoles.entries()) {
  console.log(`${ur[0].name}: ${ur[1]}`);
}
for (const [u, r] of userRoles.entries()) { // デストラクチャリングを使うと自然
  console.log(`${u.name}: ${r}`);
}
for (const [u, r] of userRoles) { // entriesはMapのデフォルトイテレーター
  console.log(`${u.name}: ${r}`);
}

console.log(userRoles.values());
console.log([...userRoles.values()]);

userRoles.delete(u2);
console.log(userRoles.size);
console.log([...userRoles.values()]);

userRoles.clear();
console.log(userRoles.size);
console.log([...userRoles.values()]);
